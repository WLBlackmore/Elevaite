import React, { useState, useEffect } from 'react';
import styles from "./AdvancedComp.module.css";
import TypingEffect from './TypingEffect/TypingEffect';

const AdvancedComp = (props) => {
  // State to control loader visibility
  const [loading, setLoading] = useState(false);

  const handleAdvancedCompClick = () => {
    setLoading(true); // Show loader
    props.onAdvancedCompClick();
  };

  useEffect(() => {
    if (props.ACresp) {
      setLoading(false); // Hide loader once response is ready
    }
  }, [props.ACresp]);

  return (
    <div className={styles.inputCard}>
      {/* Show loader if loading is true and hide if response is present */}
      {loading && <div className={styles.loader}></div>}
      
      {/* Show the button only if not loading and no response is present */}
      {!loading && !props.ACresp && (
        <button className={styles.btn} onClick={handleAdvancedCompClick}>
          <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" className={styles.sparkle}>
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>
          <span className={styles.text}>Generate Advanced Insights</span>
        </button>
      )}

      {/* TypingEffect component will render the response */}
      <TypingEffect text={props.ACresp} speed={10} />
    </div>
  );
};

export default AdvancedComp;
