import styles from "./PlayerCard.module.css";

const PlayerCard = () => {
    let playerName = 'LeBron James';
    let age = '39';
    let team = 'LAL';
    let activity = 'Active';
    let pts = 29;
  return (
    <div className={styles.statsCard}>
      <div className={styles.season}>2022-24 Season Stats</div>
      <div className={styles.playerInfo}>
        <div className={styles.name}>Name: {playerName}</div>
        <div className={styles.age}>Age: {age} years old</div>
        <div className={styles.team}>Team: {team}</div>
        <div className={styles.activity}>Activity: {activity}</div>
      </div>
      <div className={styles.playerStats}>
        <div className={styles.stat}>
          <span className={styles.label}>PTS</span>
        </div>
        {/* Repeat for each stat */}
      </div>
      <button className={styles.changePlayer}>Change player</button>
    </div>
  );
};

export default PlayerCard;
