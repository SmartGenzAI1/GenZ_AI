import React from 'react'

export default function ChatMessage({msg}){
  const isUser = msg.role === 'user'
  return (
    <div className={`chat-msg ${isUser? 'user' : 'assistant'}`}>
      <div className="bubble">
        <div className="role">{isUser ? 'You' : 'GenZ AI'}</div>
        <div className="text">{msg.text}</div>
      </div>
    </div>
  )
}
