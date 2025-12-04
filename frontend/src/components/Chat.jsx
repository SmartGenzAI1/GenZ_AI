import React, {useState, useRef, useEffect} from 'react'
import ChatMessage from './ChatMessage'
import api from '../lib/api'

export default function Chat(){
  const [messages, setMessages] = useState([
    {id:1, role:'assistant', text:'Hi — I\'m GenZ AI. Ask me anything!'}
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(()=>{ bottomRef.current?.scrollIntoView({behavior:'smooth'}) },[messages])

  async function send(e){
    e?.preventDefault()
    if(!input.trim()) return
    const userMsg = {id:Date.now(), role:'user', text:input}
    setMessages(m=>[...m,userMsg])
    setInput('')
    setLoading(true)
    try{
      // Try to call backend. If backend not available, fallback to canned reply.
      const res = await api.post('/chat', {message: userMsg.text})
      const assistantText = res?.data?.reply ?? 'Sorry, no reply from API.'
      setMessages(m=>[...m,{id:Date.now()+1, role:'assistant', text:assistantText}])
    }catch(err){
      setMessages(m=>[...m,{id:Date.now()+1, role:'assistant', text:'(local) I could not reach the API — this is a demo reply.'}])
    }finally{ setLoading(false) }
  }

  return (
    <section id="chat" className="chat container">
      <h3>Live demo chat</h3>
      <div className="chat-wrap">
        <div className="chat-list" role="log" aria-live="polite">
          {messages.map(m=> <ChatMessage key={m.id} msg={m} />)}
          <div ref={bottomRef} />
        </div>
        <form className="chat-form" onSubmit={send}>
          <input
            aria-label="Type a message"
            placeholder={loading? 'Waiting for reply...' : 'Type a message...'}
            value={input}
            onChange={e=>setInput(e.target.value)}
            disabled={loading}
          />
          <button type="submit" className="btn primary" disabled={loading}>{loading? 'Sending...' : 'Send'}</button>
        </form>
      </div>
    </section>
  )
}
