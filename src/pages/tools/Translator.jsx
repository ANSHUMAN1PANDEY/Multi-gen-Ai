import React, { useState } from 'react';
import { callAI } from '../../api/localAI';
import '../../styles/toolpages.css';

const Translator = () => {
  const [sourceLang, setSourceLang] = useState('English');
  const [targetLang, setTargetLang] = useState('Spanish');
  const [text, setText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState(null);

  const languages = ['English', 'Spanish', 'French', 'German', 'Japanese', 'Chinese'];

  const handleGenerate = async () => {
    if (!text.trim()) {
      alert("Please enter text to translate.");
      return;
    }
    
    setIsGenerating(true);
    setResult('');
    setError(null);

    try {
      const prompt = `Translate the following text into ${targetLang}:\n${text}`;
      const translatedText = await callAI(prompt);
      
      if (translatedText && translatedText.startsWith("Error:")) {
        setError("AI is not responding. Please try again.");
        setIsGenerating(false);
        return;
      }
      
      let i = 0;
      setIsGenerating(false);
      
      const interval = setInterval(() => {
        setResult((prev) => prev + translatedText.charAt(i));
        i++;
        if (i >= translatedText.length) clearInterval(interval);
      }, 15);

    } catch (err) {
      setError("AI is not responding. Please try again.");
      setIsGenerating(false);
    }
  };

  return (
    <div className="tool-page-container animate-fade-in">
      <div className="tool-header">
        <h1><span className="gradient-text">🌍 AI Translator</span></h1>
        <p>Translate text seamlessly between languages with high accuracy.</p>
      </div>

      <div className="tool-workspace">
        <div className="tool-panel">
          <div className="panel-title">
            Source Language
            <select 
              className="input-select" 
              style={{ width: 'auto', marginBottom: 0, padding: '4px 8px' }}
              value={sourceLang}
              onChange={(e) => setSourceLang(e.target.value)}
            >
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
          <textarea 
            className="input-textarea"
            placeholder="Enter text to translate..."
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
                <div className="spinner"></div> Translating...
              </span>
            ) : 'Translate Text'}
          </button>
        </div>

        <div className="tool-panel">
          <div className="panel-title">
            Target Language
            <select 
              className="input-select" 
              style={{ width: 'auto', marginBottom: 0, padding: '4px 8px' }}
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
            >
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
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
              <div className="output-placeholder" style={{color: '#ef4444', margin: 'auto'}}>
                <span style={{ fontSize: '3rem' }}>⚠️</span>
                <p style={{ textAlign: 'center', marginBottom: '1rem' }}>{error}</p>
                {result && (
                  <div className="output-text animate-fade-in" style={{ color: 'var(--text-primary)', textAlign: 'left', whiteSpace: 'pre-wrap', lineHeight: '1.6', background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '8px', width: '100%' }}>
                    {result}
                  </div>
                )}
              </div>
            ) : result ? (
              <div className="output-text">{result}</div>
            ) : (
              <div className="output-placeholder">
                <span style={{ fontSize: '3rem' }}>A/文</span>
                <p>Translation will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translator;
