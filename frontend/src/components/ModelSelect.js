"use client";
import { useState } from 'react';
import { ChevronDown, Cpu, Search, Sparkles } from 'lucide-react';

export default function ModelSelect({ currentModel, setModel }) {
    const [isOpen, setIsOpen] = useState(false);
    
    const models = [
        { id: 'g:', name: 'Groq (Ultra Fast)', icon: Sparkles },
        { id: 'hf:', name: 'HuggingFace', icon: Cpu },
        { id: 'or:', name: 'OpenRouter', icon: Cpu },
        { id: 'web:', name: 'Web Search', icon: Search },
    ];

    const handleSelect = (id) => {
        setModel(id);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 hover:bg-white/80 transition text-sm font-medium text-slate-700 shadow-sm"
            >
                <span className="text-primary font-bold">{currentModel.replace(':','').toUpperCase()}</span>
                <ChevronDown size={14} />
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 left-0 w-48 bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-white p-1 overflow-hidden z-50">
                    {models.map((m) => (
                        <button 
                            key={m.id}
                            onClick={() => handleSelect(m.id)} 
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-left hover:bg-slate-100 rounded-lg text-slate-700"
                        >
                            <m.icon size={14} className="text-slate-400"/>
                            {m.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
