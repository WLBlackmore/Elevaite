import React, { useState } from 'react';
import styles from "./PlayerInput.module.css"; 

const PlayerInput = ({ onSubmit }) => {
  const [player1, setPlayer1] = useState({ name: '', season: '' });
  const [player2, setPlayer2] = useState({ name: '', season: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ player1, player2 });
  };

  return (
    <div className={styles.inputCard}>
      <div className={styles.header}>Enter Player Details</div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.playersContainer}>
          <div className={styles.player}>
            <input 
              className={styles.input} 
              value={player1.name} 
              onChange={(e) => setPlayer1({ ...player1, name: e.target.value })} 
              placeholder="Player 1 Name" 
            />
            <input 
              className={styles.input} 
              value={player1.season} 
              onChange={(e) => setPlayer1({ ...player1, season: e.target.value })} 
              placeholder="Player 1 Season" 
            />
          </div>
          <div className={styles.player}>
            <input 
              className={styles.input} 
              value={player2.name} 
              onChange={(e) => setPlayer2({ ...player2, name: e.target.value })} 
              placeholder="Player 2 Name" 
            />
            <input 
              className={styles.input} 
              value={player2.season} 
              onChange={(e) => setPlayer2({ ...player2, season: e.target.value })} 
              placeholder="Player 2 Season" 
            />
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>Compare</button>
      </form>
    </div>
  );
};

export default PlayerInput;
