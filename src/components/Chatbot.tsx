"use client";
import { useState, useRef, useEffect } from "react";

type Message = {
  text: string;
  sender: "user" | "bot";
  time: string;
};

const getTime = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const QUICK_REPLIES = ["💍 Weddings", "🎂 Birthdays", "🎉 Events", "📋 Pricing"];

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Welcome to Fundi Juma. I'm here to help you craft the perfect look for your special occasion. How may I assist you today?",
      sender: "bot",
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [hasUnread, setHasUnread] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => setHasUnread(true), 3000);
      return () => clearTimeout(timer);
    } else {
      setHasUnread(false);
    }
  }, [open]);

  const sendMessage = async (customMessage?: string) => {
    const messageToSend = customMessage ?? input;
    if (!messageToSend.trim()) return;

    const userMessage: Message = {
      text: messageToSend,
      sender: "user",
      time: getTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend }),
      });
      const data = await res.json();
      const botMessage: Message = {
        text: data.reply,
        sender: "bot",
        time: getTime(),
      };
      if (!res.ok) throw new Error("API failed");
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const renderMessageContent = (msg: Message) => {
    if (msg.sender === "user") {
      return <p className="m-0">{msg.text}</p>;
    } else {
      const containsHtml = /<a\s+[^>]*>.*?<\/a>/i.test(msg.text);
      if (containsHtml) {
        return (
          <div
            className="m-0 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: msg.text }}
            style={
              {
                "--tw-prose-body": "#3a2210",
                "--tw-prose-links": "#c8975a",
                "--tw-prose-link-underline": "#c8975a",
              } as React.CSSProperties
            }
          />
        );
      }
      return <p className="m-0 whitespace-pre-wrap">{msg.text}</p>;
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Jost:wght@300;400;500&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-jost { font-family: 'Jost', sans-serif; }
        .chat-scroll::-webkit-scrollbar { width: 3px; }
        .chat-scroll::-webkit-scrollbar-thumb { background: rgba(200,151,90,0.25); border-radius: 3px; }
        @keyframes msg-in { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
        .animate-msg { animation: msg-in 0.25s ease; }
        @keyframes tdot { 0%,60%,100% { transform:translateY(0); opacity:0.4; } 30% { transform:translateY(-5px); opacity:1; } }
        .animate-tdot1 { animation: tdot 1.2s infinite ease-in-out; }
        .animate-tdot2 { animation: tdot 1.2s 0.2s infinite ease-in-out; }
        .animate-tdot3 { animation: tdot 1.2s 0.4s infinite ease-in-out; }
        @keyframes fj-rise { from { opacity:0; transform:translateY(20px) scale(0.96); } to { opacity:1; transform:translateY(0) scale(1); } }
        .animate-rise { animation: fj-rise 0.35s cubic-bezier(.34,1.56,.64,1); }
        @keyframes badge-pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.2)} }
        .animate-badge { animation: badge-pulse 1.6s infinite; }
        .bot-message a {
          color: #c8975a;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 2px;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .bot-message a:hover {
          color: #a0733e;
          text-decoration-thickness: 2px;
        }
        /* === MOBILE FIXES === */
        @media (max-width: 480px) {
          .chat-box {
            width: calc(100vw - 2rem) !important;
            max-width: 370px;
            right: 1rem !important;
            left: auto !important;
            bottom: 5rem !important;
            max-height: 80dvh !important;
          }
          .chat-input {
            font-size: 16px !important; /* prevents zoom on focus in iOS */
          }
          .quick-reply-btn {
            font-size: 11px !important;
            padding: 0.5rem 0.75rem !important;
          }
        }
      `}</style>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chat with Fundi Juma"
        className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-yellow-700 border-none cursor-pointer flex items-center justify-center text-2xl z-[9999] transition-all duration-300 hover:scale-110 hover:-rotate-6 shadow-lg"
      >
        {open ? "✕" : "💬"}
      </button>

      {/* Chat Box */}
      {open && (
        <div
          className="fixed bottom-24 right-4 left-4 sm:right-7 sm:left-auto chat-box animate-rise rounded-2xl flex flex-col overflow-hidden z-[9998]"
          style={{
            background: "#fdf8f2",
            boxShadow: "0 40px 100px rgba(100,60,20,0.22), 0 0 0 1px rgba(200,151,90,0.25)",
            maxHeight: "80dvh",
            width: "calc(100vw - 2rem)",
            maxWidth: "370px",
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 sm:px-5 sm:py-[18px] relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #2c1a0e 0%, #4a2c14 100%)" }}
          >
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c8975a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative flex items-center gap-3">
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                style={{
                  background: "linear-gradient(145deg, #c8975a, #e8b97a)",
                  boxShadow: "0 0 0 2px rgba(200,151,90,0.4), 0 0 0 5px rgba(200,151,90,0.1)",
                }}
              />
              <div>
                <p className="font-cormorant text-lg sm:text-xl font-semibold tracking-wide m-0 leading-tight mb-0.5 sm:mb-1" style={{ color: "#f0dfc0" }}>
                  Fundi Juma
                </p>
                <span className="font-jost text-[9px] sm:text-[11px] font-light uppercase tracking-widest flex items-center gap-1" style={{ color: "rgba(240,223,192,0.55)" }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#7ed4a4", boxShadow: "0 0 6px #7ed4a4" }} />
                  Available · Special Occasions Designer
                </span>
              </div>
            </div>
          </div>

          <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(200,151,90,0.5), transparent)" }} />

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto px-3 pt-4 pb-2 flex flex-col gap-3 chat-scroll"
            style={{ background: "#fdf8f2" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col animate-msg ${msg.sender === "user" ? "items-end" : "items-start bot-message"}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 sm:px-4 sm:py-2.5 font-jost text-[12.5px] sm:text-[13.5px] font-normal leading-relaxed break-words ${
                    msg.sender === "user"
                      ? "text-[#fff8f0] rounded-[18px] rounded-br-[4px]"
                      : "text-[#3a2210] rounded-[18px] rounded-bl-[4px]"
                  }`}
                  style={
                    msg.sender === "user"
                      ? {
                          background: "linear-gradient(135deg, #c8975a, #a0733e)",
                          boxShadow: "0 4px 16px rgba(160,115,62,0.3)",
                        }
                      : {
                          background: "#fff",
                          border: "1px solid rgba(200,151,90,0.2)",
                          boxShadow: "0 2px 12px rgba(100,60,20,0.08)",
                        }
                  }
                >
                  {renderMessageContent(msg)}
                </div>
                <span className="font-jost text-[9px] sm:text-[10px] mt-1 px-1 tracking-wide" style={{ color: "rgba(100,60,20,0.35)" }}>
                  {msg.time}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex flex-col items-start animate-msg">
                <div
                  className="flex gap-1.5 items-center px-3 py-2 sm:px-4 sm:py-3 rounded-[18px] rounded-bl-[4px]"
                  style={{ background: "#fff", border: "1px solid rgba(200,151,90,0.2)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full animate-tdot1" style={{ background: "#c8975a" }} />
                  <span className="w-1.5 h-1.5 rounded-full animate-tdot2" style={{ background: "#c8975a" }} />
                  <span className="w-1.5 h-1.5 rounded-full animate-tdot3" style={{ background: "#c8975a" }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="flex gap-1.5 flex-wrap px-3 py-2 sm:px-3.5" style={{ background: "#fdf8f2" }}>
            {QUICK_REPLIES.map((qr) => (
              <button
                key={qr}
                onClick={() => sendMessage(qr)}
                className="quick-reply-btn font-jost text-[11px] sm:text-[11.5px] font-medium tracking-wide px-2.5 py-1.5 sm:px-3 rounded-full cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: "rgba(200,151,90,0.08)",
                  border: "1px solid rgba(200,151,90,0.25)",
                  color: "#4a2c14",
                }}
              >
                {qr}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div
            className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-3"
            style={{
              background: "#fff",
              borderTop: "1px solid rgba(200,151,90,0.15)",
            }}
          >
            <input
              className="chat-input flex-1 font-jost text-[14px] sm:text-[13.5px] font-light rounded-xl px-3 py-2 sm:py-2.5 outline-none transition-all duration-200 focus:ring-2 min-h-[44px]"
              style={{
                color: "#3a2210",
                background: "#fdf8f2",
                border: "1px solid rgba(200,151,90,0.25)",
              }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
              placeholder="Tell us about your occasion…"
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "rgba(200,151,90,0.6)";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(200,151,90,0.1)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(200,151,90,0.25)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim()}
              aria-label="Send message"
              className="w-11 h-11 rounded-xl border-none cursor-pointer flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-35 disabled:cursor-not-allowed disabled:scale-100 min-w-[44px] min-h-[44px]"
              style={{
                background: "linear-gradient(135deg, #c8975a, #a0733e)",
                boxShadow: "0 4px 14px rgba(160,115,62,0.35)",
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="#fff8f0" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>

          {/* Footer */}
          <div
            className="text-center py-1.5 font-jost text-[8px] sm:text-[9.5px] tracking-widest uppercase"
            style={{ color: "rgba(100,60,20,0.3)", background: "#fff" }}
          >
            Fundi Juma · Couture for Every Occasion
          </div>
        </div>
      )}
    </>
  );
}