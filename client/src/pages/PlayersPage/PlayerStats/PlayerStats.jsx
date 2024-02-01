import styles from './PlayerStats.module.css';

import PlayerStatistic from './PlayerStatistic/PlayerStatistic';

const PlayerStats = (props) => {
    let stats = props.stats;
    return(
        <div className={styles.statsContainer}>
            <PlayerStatistic stat={stats[0]}/>
        </div>
    )
}

export default PlayerStats