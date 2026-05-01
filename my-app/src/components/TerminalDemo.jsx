import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Circle, Play } from 'lucide-react';

export const TerminalDemo = () => {
  const [text, setText] = useState('');
  const fullText = `> Initializing secure connection...
> Connection established.
> Deploying application to edge network...
> Building assets... [DONE]
> Uploading static files... [DONE]
> Provisioning databases... [DONE]
> Deployment successful!
> Live at: https://bytesoft.tech
> Status: All systems operational.`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backgroundColor: '#0d1117',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      width: '100%',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '12px 16px',
        backgroundColor: '#161b22',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Circle size={12} fill="#ff5f56" stroke="none" />
          <Circle size={12} fill="#ffbd2e" stroke="none" />
          <Circle size={12} fill="#27c93f" stroke="none" />
        </div>
        <div style={{
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.75rem',
          color: '#8b949e',
          fontFamily: 'monospace'
        }}>
          <Terminal size={14} />
          <span>deploy.sh</span>
        </div>
      </div>
      <div style={{
        padding: '24px',
        fontFamily: 'monospace',
        fontSize: '0.9rem',
        color: '#c9d1d9',
        minHeight: '250px',
        lineHeight: '1.6'
      }}>
        {text.split('\n').map((line, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              color: line.includes('successful') || line.includes('operational') ? '#4ade80' : '#c9d1d9',
              fontWeight: line.includes('successful') || line.includes('operational') ? 'bold' : 'normal',
              marginTop: line.includes('successful') ? '12px' : '0'
            }}
          >
            {line}
          </motion.div>
        ))}
        <motion.div 
          animate={{ opacity: [1, 0] }} 
          transition={{ repeat: Infinity, duration: 0.8 }}
          style={{
            display: 'inline-block',
            width: '8px',
            height: '16px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            marginLeft: '4px',
            transform: 'translateY(3px)'
          }}
        />
      </div>
      <div style={{
        backgroundColor: '#161b22',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{ fontSize: '0.75rem', color: '#8b949e', fontFamily: 'monospace' }}>Process exited with code 0</div>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.75rem',
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          padding: '6px 12px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontWeight: 600
        }}>
          <Play size={14} /> Rerun
        </button>
      </div>
    </div>
  );
};
