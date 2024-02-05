import styles from './PlayerStatistic.module.css';
import PlayerStatBar from './PlayerStatBar/PlayerStatBar';

const PlayerStatistic = (props) => {
      let stat = props.stat;
      let textOutput = stat.label + " : " + stat.value;

    return (
    <div className={styles.statContainer}>
       <p>{textOutput}</p> 
       <PlayerStatBar value={stat.value} max={stat.max}/>
    </div>
    )
}

export default PlayerStatistic;