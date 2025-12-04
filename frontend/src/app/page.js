"use client";
import { useState, useRef, useEffect } from 'react';
import { Send, LogOut, Bot, User, Menu } from 'lucide-react';
import ModelSelect from '../components/ModelSelect';

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("g:");
  const chatEndRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput("");
    setLoading(true);

    try {
      // Replace with your actual Render Backend URL
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
      
      const res = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: currentInput, model: model })
      });

      const data = await res.json();
      
      // Handle response structure
      const reply = data.response || data.content || "No response received.";
      
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Error connecting to backend." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-64 flex-col frosted h-full p-4 border-r border-white/40">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-tr from-teal-400 to-blue-500 rounded-full shadow-md flex items-center justify-center text-white font-bold">G</div>
          <h1 className="font-display font-bold text-xl tracking-tight text-slate-800">GenZ AI</h1>
        </div>
        
        <nav className="flex-1 overflow-y-auto space-y-2">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Recent</div>
          <button className="w-full text-left px-3 py-2 rounded-lg bg-white/40 text-sm text-slate-700 hover:bg-white/60 transition truncate">
            New Chat
          </button>
        </nav>

        <div className="mt-4 pt-4 border-t border-white/30 text-[10px] text-center text-slate-500">
          Made in Kashmir 🇮🇳
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col relative">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-white/30 bg-white/20 backdrop-blur-sm">
            <div className="md:hidden"><Menu className="text-slate-600" /></div>
            <div className="flex items-center gap-2">
                <span className="text-slate-500 text-sm hidden sm:inline">Model:</span>
                <ModelSelect currentModel={model} setModel={setModel} />
            </div>
            <div className="w-8"></div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
            {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                    <div className="p-5 bg-white/40 rounded-full shadow-lg">
                        <Bot size={48} className="text-primary" />
                    </div>
                    <p className="font-display text-lg">How can I help you today?</p>
                </div>
            )}

            {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-slate-700 text-white' : 'bg-primary text-white shadow-lg shadow-teal-500/30'}`}>
                        {msg.role === 'user' ? <User size={16}/> : <Bot size={16}/>}
                    </div>
                    <div className={`max-w-[85%] md:max-w-2xl p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-white text-slate-800 rounded-tr-none' : 'frosted text-slate-800 rounded-tl-none'}`}>
                        {msg.content}
                    </div>
                </div>
            ))}
            
            {loading && (
                <div className="flex gap-4">
                     <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-pulse"><Bot size={16} color="white"/></div>
                     <div className="frosted px-4 py-2 rounded-2xl text-sm text-slate-500">Thinking...</div>
                </div>
            )}
            <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6 pb-8">
            <form onSubmit={sendMessage} className="max-w-3xl mx-auto relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-blue-200 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full pl-6 pr-14 py-4 rounded-full border-none outline-none bg-white/70 backdrop-blur-xl shadow-xl text-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/50 transition"
                    placeholder="Ask GenZ AI..."
                />
                <button 
                  type="submit" 
                  disabled={!input || loading}
                  className="absolute right-2 top-2 p-2 bg-slate-900 rounded-full text-white hover:bg-slate-700 transition shadow-lg disabled:opacity-50"
                >
                    <Send size={18} />
                </button>
            </form>
            <p className="text-center text-[10px] text-slate-400 mt-2">Developed by Owais Ahmad Dar • Kashmir 🇮🇳</p>
        </div>
      </main>
    </div>
  );
}
