import styles from "./PlayerCard.module.css";
import headshot from "../../../assets/PlayerPlaceholder.png";

const PlayerCard = () => {
  let playerName = "LeBron James";
  let age = "39";
  let team = "LAL";
  let activity = "Active";
  let pts = 29;
  return (
    <div className={styles.statsCard}>
      <div className={styles.season}>2022-24 Season Stats</div>
      <div className={styles.content}>
        <div className={styles.playerInfo}>
          <div className={styles.name}>Name: {playerName}</div>
          <div className={styles.age}>Age: {age} years old</div>
          <div className={styles.team}>Team: {team}</div>
          <div className={styles.activity}>Activity: {activity}</div>
          {/* Additional player stats can be added here */}
        </div>
        <div className={styles.headshot}>
          <img src={headshot} alt={`${playerName} headshot`} />
        </div>
      </div>
      <div className={styles.playerStats}>
        {/* Player stats like PTS would go here */}
        <div className={styles.stat}>
          <span className={styles.label}>PTS:</span>
          <span className={styles.value}>{pts}</span>
        </div>
        {/* Repeat for each stat */}
      </div>
      <button className={styles.changePlayer}>Change player</button>
    </div>
  );
};

export default PlayerCard;
