import React, { useMemo, useState, useEffect } from 'react';

const TypingText = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = useMemo(() => ["DevOps Engineer", "Full-Stack Developer ", "Software Architect"],[]); // Add more texts as needed
  const [displayText, setDisplayText] = useState(texts[0]);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 2 seconds, adjust as needed

    return () => clearInterval(typingInterval);
  }, [texts.length]);

  useEffect(() => {
    let index = 0;
    const typingTimeout = setTimeout(() => {
        const typingInterval = setInterval(() => {
            if (index <= texts[textIndex].length) {
              setDisplayText(texts[textIndex].substring(0, index));
              index++;
            } else {
              clearInterval(typingInterval);
            }
          }, 100); // Typing speed, adjust as needed
        }, 500);// Typing speed, adjust as needed

    return () => clearTimeout(typingTimeout);
  }, [textIndex, texts]);

  return ( 
        
    <div style={{ 
        position: 'absolute',
        top: '3%',
        left: '-3%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        width: '50%',
        height: '100vh',
        marginLeft: '0px', // Adjust margin as needed
        fontSize: '24px', // Adjust font size as needed
      }}>
        <div style={{ color: 'black' }}>I am a</div>
        <div style={{ color: '#DA291C', fontWeight: 'bold',}}>{displayText}</div>
      </div>

    );
};

export default TypingText;
