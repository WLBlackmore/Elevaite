import React, { useState, useEffect } from 'react';
import styles from "./PlayerStatBar.module.css";

const PlayerStatBar = (props) => {
    const [barWidth, setBarWidth] = useState('0%'); // Start with 0% width
    let value = props.value;
    let max = props.max;

    useEffect(() => {
        // This function updates the bar width with transition after component mounts
        const newWidth = Math.round((value / max) * 100) + "%";
        setBarWidth(newWidth);
    }, [value]); // Dependency array includes value to update on value change

    return (
        <div className={styles.statBar} style={{width: barWidth, transition: 'width 0.5s ease-out'}}>
        </div>
    );
}

export default PlayerStatBar;
