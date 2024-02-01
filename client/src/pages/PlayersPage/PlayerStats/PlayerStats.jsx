import styles from './PlayerStats.module.css';

import PlayerStatistic from './PlayerStatistic/PlayerStatistic';
//<PlayerStatistic stat={stats[0]}/>
const PlayerStats = (props) => {
    let stats = props.stats;
    return(
        <div className={styles.statsContainer}>
            {stats.map((statPoint)=>{
                return(<PlayerStatistic key={statPoint.label} stat={statPoint}/>)
            })}
        </div>
    )
}

export default PlayerStats