import PlayerStatistic from './PlayerStatistic/PlayerStatistic';
const PlayerStats = (props) => {
    let stats = props.stats;
    return(
        <div>
            <PlayerStatistic stat={stats[0]}/>
        </div>
    )
}

export default PlayerStats