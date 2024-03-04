import React, { useState, useEffect } from 'react';
import styles from "./PlayerStatBar.module.css";

const PlayerStatBar = (props) => {
    const [barWidth, setBarWidth] = useState('0%'); // Start with 0% width
    let value = props.value;
    let max = props.max;
    let comparison = props.comparison; // Extract comparison prop
    console.log(comparison);

    useEffect(() => {
        // This function updates the bar width with transition after component mounts
        const newWidth = Math.round((value / max) * 100) + "%";
        setBarWidth(newWidth);
    }, [value]); // Dependency array includes value to update on value change

    // Conditionally set the style based on the comparison prop
    const barStyle = {
        width: barWidth,
        transition: 'width 0.5s ease-out',
        boxShadow: comparison ? '0px 0px 10px 2px green' : '' // Apply green box shadow if comparison is true
    };

    return (
        <div className={styles.statBar} style={barStyle}>
        </div>
    );
}

export default PlayerStatBar;
