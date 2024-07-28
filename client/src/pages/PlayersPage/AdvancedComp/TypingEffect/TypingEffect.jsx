import React, { useState, useEffect } from 'react';
import styles from './TypingEffect.module.css';

const TypingEffect = ({ text, speed = 50, cursor = true }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [index, text, speed]);

  useEffect(() => {
    setDisplayedText('');
    setIndex(0);
  }, [text]);

  return (
    <span>
      {displayedText}
      {cursor && index < text.length && <span className={styles.cursor}>|</span>}
    </span>
  );
};

export default TypingEffect;
