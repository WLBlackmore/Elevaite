import styles from './PlayerStatistic.module.css';

const PlayerStatistic = (props) => {
      let stat = props.stat;
      let textOutput = stat.label + " : " + stat.value;

    return (
    <div className={styles.statContainer}>
       <p>{textOutput}</p> 
       <p>{textOutput}</p> 
    </div>
    )
}

export default PlayerStatistic;