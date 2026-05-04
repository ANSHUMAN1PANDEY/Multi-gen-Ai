import React, { useState } from 'react';
import { callAI } from '../../api/localAI';
import '../../styles/toolpages.css';

const EmojiConverter = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    if (!text.trim()) {
      alert("Please provide the text you want to convert.");
      return;
    }
    
    setIsGenerating(true);
    setResult('');
    setError(null);

    const promptText = `Convert the following sentence into a fun emoji style sentence by adding appropriate emojis but keep the original words.\n\nUser text: ${text}`;
    
    try {
      const responseText = await callAI(promptText);
      
      if (responseText && responseText.startsWith("Error:")) {
        setError("AI is not responding. Please try again.");
      } else {
        setResult(responseText);
      }
    } catch (err) {
      setError("AI is not responding. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="tool-page-container animate-fade-in">
      <div className="tool-header">
        <h1><span className="gradient-text">✨ AI Emoji Generator</span></h1>
        <p>Convert your sentence into a fun emoji-filled message instantly.</p>
      </div>

      <div className="tool-workspace">
        <div className="tool-panel">
          <div className="panel-title">Your Text</div>
          <textarea 
            className="input-textarea"
            placeholder="Type a sentence like 'I love coding and I am very happy today'..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          
          <button 
            className="btn-primary" 
            onClick={handleGenerate}
            disabled={isGenerating || !text.trim()}
            style={{ opacity: isGenerating ? 0.7 : 1 }}
          >
            {isGenerating ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <div className="spinner"></div> Generating...
              </span>
            ) : 'Generate'}
          </button>
        </div>

        <div className="tool-panel">
          <div className="panel-title">
            Output box
            {(result || error) && (
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  className="btn-secondary" 
                  style={{ padding: '4px 12px', fontSize: '0.8rem' }}
                  onClick={handleGenerate}
                  disabled={isGenerating}
                >
                  Retry
                </button>
                {result && (
                  <button 
                    className="btn-secondary" 
                    style={{ padding: '4px 12px', fontSize: '0.8rem' }}
                    onClick={() => navigator.clipboard.writeText(result)}
                  >
                    Copy Output
                  </button>
                )}
              </div>
            )}
          </div>
          <div className="output-area">
            {error ? (
              <div className="output-placeholder" style={{color: '#ef4444'}}>
                <span style={{ fontSize: '3rem' }}>⚠️</span>
                <p style={{ textAlign: 'center', marginBottom: '1rem' }}>{error}</p>
                {result && (
                  <div className="output-text animate-fade-in" style={{ color: 'var(--text-primary)', textAlign: 'left', whiteSpace: 'pre-wrap', lineHeight: '1.6', background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '8px', width: '100%' }}>
                    {result}
                  </div>
                )}
              </div>
            ) : isGenerating ? (
              <div className="output-placeholder">
                <div className="spinner" style={{ width: '40px', height: '40px', borderColor: 'var(--accent-color)', borderTopColor: 'transparent' }}></div>
                <p>Generating emojis...</p>
              </div>
            ) : result ? (
              <div className="output-text animate-fade-in" style={{ fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {result}
              </div>
            ) : (
              <div className="output-placeholder">
                <span style={{ fontSize: '3rem' }}>🪄</span>
                <p>Converted emojis will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmojiConverter;
