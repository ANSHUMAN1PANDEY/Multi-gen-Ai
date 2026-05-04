import React, { useState, useRef, useEffect } from 'react';
import { callAI } from '../../api/localAI';
import '../../styles/toolpages.css';

const ChatBot = () => {

  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hello! I am Multi Gen AI. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) {
      alert("Please type a message.");
      return;
    }

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    try {
      const prompt = `${input}`;
      const responseText = await callAI(prompt);
      
      if (responseText && responseText.startsWith("Error:")) {
        setMessages(prev => [...prev, { 
          role: 'ai', 
          content: "AI is not responding. Please try again.", 
          isError: true 
        }]);
      } else {
        setMessages(prev => [...prev, { role: 'ai', content: responseText }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: "AI is not responding. Please try again.", 
        isError: true 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="tool-page-container animate-fade-in" style={{ maxWidth: '900px' }}>
      <div className="tool-header" style={{ textAlign: 'center', alignItems: 'center' }}>
        <h1 style={{ justifyContent: 'center' }}><span className="gradient-text">💬 AI Assistant</span></h1>
        <p>Chat naturally with our advanced AI model to brainstorm, code, or write.</p>
      </div>

      <div className="tool-panel" style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
        <div className="chat-messages" ref={scrollRef}>
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`chat-bubble ${msg.role}`}
              style={msg.isError ? { borderColor: '#ef4444', color: '#ef4444' } : {}}
            >
              {msg.role === 'ai' ? <strong>AI: </strong> : <strong>You: </strong>}
              <span style={{ whiteSpace: 'pre-wrap' }}>{msg.content}</span>
            </div>
          ))}
          {isTyping && (
            <div className="chat-bubble ai">
              <span className="typing-indicator" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="spinner" style={{ width: '16px', height: '16px', borderTopColor: 'transparent', marginRight: '8px' }}></div> 
                <span>Thinking...</span>
              </span>
            </div>
          )}
        </div>

        <div className="chat-input-row">
          <textarea
            className="input-textarea"
            style={{ marginBottom: 0, minHeight: '50px', height: '50px' }}
            placeholder="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          ></textarea>
          <button 
            className="btn-primary" 
            onClick={handleSend}
            disabled={isTyping || !input.trim()}
            style={{ padding: '0 24px' }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
