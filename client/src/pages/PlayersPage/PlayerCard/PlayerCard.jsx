import styles from "./PlayerCard.module.css";
import headshot from "../../../assets/PlayerPlaceholder.png";
import PlayerStats from "../PlayerStats/PlayerStats";

const PlayerCard = (props) => {
  let playerName = props.player.info.playerName;
  let age = props.player.info.age;
  let team = props.player.info.team;
  let season = props.player.info.season
  let image_url = props.player.info.image_url;
  return (
    <div className={styles.statsCard}>
      <div className={styles.season}>{season} Season Stats</div>
      <div className={styles.content}>
        <div className={styles.playerInfo}>
          <div className={styles.name}>Name: {playerName}</div>
          <div className={styles.age}>Age: {age} years old</div>
          <div className={styles.team}>Team: {team}</div>
        </div>
        <div className={styles.headshot}>
          <img src={image_url ? image_url : headshot} alt={`${playerName} headshot`} />
        </div>
      </div>
        <PlayerStats stats={props.player.stats}/>
    </div>
  );
};

export default PlayerCard;
