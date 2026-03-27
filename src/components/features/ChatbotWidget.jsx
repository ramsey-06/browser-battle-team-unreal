import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, from: 'bot', text: "Hi! I'm Ash, your Ashford University assistant. How can I help you today?", time: new Date() },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

const sendMessage = async () => {
  if (!input.trim()) return;

  const userMsg = {
    id: Date.now(),
    from: "user",
    text: input.trim(),
    time: new Date(),
  };

  // Show user message immediately
  setMessages((prev) => [...prev, userMsg]);
  setInput("");
  setTyping(true);

  try {
    // Call your API route
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMsg.text,
      }),
    });

    const data = await response.json();

    const botMsg = {
      id: Date.now() + 1,
      from: "bot",
      text: data.reply,
      time: new Date(),
    };

    setMessages((prev) => [...prev, botMsg]);

  } catch (error) {
    console.error("Chat error:", error);

    const errorMsg = {
      id: Date.now() + 1,
      from: "bot",
      text: "Sorry, something went wrong. Please try again.",
      time: new Date(),
    };

    setMessages((prev) => [...prev, errorMsg]);
  }

  setTyping(false);
};

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const fmt = (d) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat window */}
      {open && (
        <div
          className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-2xl shadow-2xl overflow-hidden animate-fade-up flex flex-col"
          style={{ height: '480px', backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
          role="dialog"
          aria-label="University AI Assistant"
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-blue-600">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <Bot size={18} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">Ash — AI Assistant</p>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-xs text-blue-100">Online</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="Close chat"
            >
              <X size={16} className="text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] ${msg.from === 'user' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.from === 'user'
                        ? 'bg-blue-600 text-white rounded-br-sm'
                        : 'rounded-bl-sm'
                    }`}
                    style={msg.from === 'bot' ? { backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' } : {}}
                  >
                    {msg.text}
                  </div>
                  <p className="text-xs mt-1 px-1" style={{ color: 'var(--text-secondary)' }}>
                    {fmt(msg.time)}
                  </p>
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl rounded-bl-sm" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                  <div className="flex gap-1">
                    {[0, 1, 2].map(i => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          <div className="px-3 py-2 flex gap-2 overflow-x-auto scrollbar-hide" style={{ borderTop: '1px solid var(--border-color)' }}>
            {['Admissions', 'Scholarships', 'Events'].map(s => (
              <button
                key={s}
                onClick={() => { setInput(s); }}
                className="shrink-0 text-xs px-3 py-1.5 rounded-full border transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20"
                style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 p-3" style={{ borderTop: '1px solid var(--border-color)' }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type a message..."
              className="flex-1 text-sm px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 font-body"
              style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
              aria-label="Chat message input"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-600 text-white transition-all hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* FAB Toggle */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close AI assistant' : 'Open AI assistant'}
        className="w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-xl active:scale-95"
      >
        <div className={`absolute transition-all duration-300 ${open ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
          <MessageCircle size={22} />
        </div>
        <div className={`absolute transition-all duration-300 ${open ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
          <X size={22} />
        </div>
      </button>
    </div>
  );
}
