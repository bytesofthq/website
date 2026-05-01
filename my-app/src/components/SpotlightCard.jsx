import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const SpotlightCard = ({ children, className = '', style = {} }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: 'rgba(20, 20, 30, 0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        transition: 'background-color 0.3s, box-shadow 0.3s, border-color 0.3s',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        ...style
      }}
      whileHover={{ 
        scale: 1.02, 
        backgroundColor: 'rgba(30, 30, 45, 0.7)',
        borderColor: 'rgba(59, 130, 246, 0.3)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: '-1px',
          opacity,
          transition: 'opacity 0.3s',
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
          zIndex: 0
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
        {children}
      </div>
    </motion.div>
  );
};
