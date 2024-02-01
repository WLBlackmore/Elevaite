import styles from "./PlayerStatBar.module.css";

const PlayerStatBar = (props) => {
    let value = props.value;
    let max = 38;
    let barWidth = Math.round((value/max)*85) + "%";
    return (
        <div className={styles.statBar} style={{width: barWidth}}>
        </div>
    )
}

export default PlayerStatBar;