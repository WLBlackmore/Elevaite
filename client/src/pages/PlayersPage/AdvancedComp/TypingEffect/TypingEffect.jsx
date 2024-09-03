import React, { useState, useEffect } from 'react';
import styles from './TypingEffect.module.css';

const TypingEffect = ({ text, speed = 50 }) => {
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

  const formatText = (text) => {
    // Replace markdown-like syntax with corresponding HTML
    const formattedText = text
      .replace(/### (.*?)(\n|$)/g, '<h3>$1</h3>') // Replace ### with h3
      .replace(/## (.*?)(\n|$)/g, '<h2>$1</h2>')  // Replace ## with h2
      .replace(/# (.*?)(\n|$)/g, '<h1>$1</h1>')   // Replace # with h1
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Replace **text** with <strong>text</strong>
      .replace(/\*(.*?)\*/g, '<em>$1</em>')       // Replace *text* with <em>text</em>
      .replace(/\n/g, '<br/>');                   // Replace newlines with <br/>

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: formattedText,
        }}
      />
    );
  };

  return (
    <div className={styles.typingContainer}>
      {formatText(displayedText)}
    </div>
  );
};

export default TypingEffect;
