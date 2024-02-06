import PlayerCard from "./PlayerCard/PlayerCard";
import PlayerInput from "./PlayerInput/PlayerInput";
import styles from "./PlayersPage.module.css";
import axios from "axios";
import { useState } from "react";

const PlayersPage = () => {
  let player1CardData = {
    info: { playerName: "", age: "", team: "", season: "" },
    stats: [
      { label: "PPG", value: "0", max: "35.4" },
      { label: "AST", value: "0", max: "11.7" },
      { label: "REB", value: "0", max: "15.2" },
      { label: "BLK", value: "0", max: "3.9" },
      { label: "STL", value: "0", max: "2.7" },
      { label: "FG%", value: "0", max: "67" },
      { label: "FGA", value: "0", max: "27.8" },
      { label: "FGM", value: "0", max: "12.1" },
      { label: "3P%", value: "0", max: "45.4" },
      { label: "3PA", value: "0", max: "13.2" },
      { label: "3PM", value: "0", max: "5.3" },
      { label: "FT%", value: "0", max: "92.4" },
      { label: "FTA", value: "0", max: "10.2" },
      { label: "GP ", value: "0", max: "82" },
      { label: "MIN", value: "0", max: "41.1" },
      { label: "PF ", value: "0", max: "4.5" },
      { label: "TOV", value: "0", max: "5" }
    ],
  };
  let player2CardData = {
    info: { playerName: "", age: "", team: "", season: "" },
    stats: [
      { label: "PPG", value: "0", max: "35.4" },
      { label: "AST", value: "0", max: "11.7" },
      { label: "REB", value: "0", max: "15.2" },
      { label: "BLK", value: "0", max: "3.9" },
      { label: "STL", value: "0", max: "2.7" },
      { label: "FG%", value: "0", max: "67" },
      { label: "FGA", value: "0", max: "27.8" },
      { label: "FGM", value: "0", max: "12.1" },
      { label: "3P%", value: "0", max: "45.4" },
      { label: "3PA", value: "0", max: "13.2" },
      { label: "3PM", value: "0", max: "5.3" },
      { label: "FT%", value: "0", max: "92.4" },
      { label: "FTA", value: "0", max: "10.2" },
      { label: "GP ", value: "0", max: "82" },
      { label: "MIN", value: "0", max: "41.1" },
      { label: "PF ", value: "0", max: "4.5" },
      { label: "TOV", value: "0", max: "5" }
    ],
  };
  let initialPlayerCardData = {player1: player1CardData, player2: player2CardData}
  
  // STATE
  const [playerCardData, setPlayerCardData] = useState(initialPlayerCardData);

  const handlePlayerInputSubmit = ({ player1, player2 }) => {
    console.log("Player 1 Data:", player1);
    console.log("Player 2 Data:", player2);
    axios
      .post("http://localhost:5000/players", { player1, player2 })
      .then((response) => {
        // Handle the response here
        let playerData = response.data;
        let player1Data = playerData.player1stats[0];
        let player2Data = playerData.player2stats[0];
        let player1ProcessedData = {
          info: { playerName: player1.name, age: player1Data.PLAYER_AGE, team: player1Data.TEAM_ABBREVIATION, season: player1Data.SEASON_ID },
          stats: [
            { label: "PPG", value: player1Data.PTS, max: "35.4" },
            { label: "AST", value: player1Data.AST, max: "11.7" },
            { label: "REB", value: player1Data.REB, max: "15.2" },
            { label: "BLK", value: player1Data.BLK, max: "3.9" },
            { label: "STL", value: player1Data.STL, max: "2.7" },
            { label: "FG%", value: Number(player1Data.FG_PCT*100).toPrecision(3), max: "67" },
            { label: "FGA", value: player1Data.FGA, max: "27.8" },
            { label: "FGM", value: player1Data.FGM, max: "12.1" },
            { label: "3P%", value: Number(player1Data.FG3_PCT*100).toPrecision(3), max: "45.4" },
            { label: "3PA", value: player1Data.FG3A, max: "13.2" },
            { label: "3PM", value: player1Data.FG3M, max: "5.3" },
            { label: "FT%", value: Number(player1Data.FT_PCT*100).toPrecision(3), max: "92.4" },
            { label: "FTA", value: player1Data.FTA, max: "10.2" },
            { label: "GP ", value: player1Data.GP, max: "82" },
            { label: "MIN", value: player1Data.MIN, max: "41.1" },
            { label: "PF ", value: player1Data.PF, max: "4.5" },
            { label: "TOV", value: player1Data.TOV, max: "5" }
          ]}
          let player2ProcessedData = {
            info: { playerName: player2.name, age: player2Data.PLAYER_AGE, team: player2Data.TEAM_ABBREVIATION, season: player2Data.SEASON_ID },
            stats: [
              { label: "PPG", value: player2Data.PTS, max: "35.4" },
              { label: "AST", value: player2Data.AST, max: "11.7" },
              { label: "REB", value: player2Data.REB, max: "15.2" },
              { label: "BLK", value: player2Data.BLK, max: "3.9" },
              { label: "STL", value: player2Data.STL, max: "2.7" },
              { label: "FG%", value: Number(player2Data.FG_PCT*100).toPrecision(3), max: "67" },
              { label: "FGA", value: player2Data.FGA, max: "27.8" },
              { label: "FGM", value: player2Data.FGM, max: "12.1" },
              { label: "3P%", value: Number(player2Data.FG3_PCT*100).toPrecision(3), max: "45.4" },
              { label: "3PA", value: player2Data.FG3A, max: "13.2" },
              { label: "3PM", value: player2Data.FG3M, max: "5.3" },
              { label: "FT%", value: Number(player2Data.FT_PCT*100).toPrecision(3), max: "92.4" },
              { label: "FTA", value: player2Data.FTA, max: "10.2" },
              { label: "GP ", value: player2Data.GP, max: "82" },
              { label: "MIN", value: player2Data.MIN, max: "41.1" },
              { label: "PF ", value: player2Data.PF, max: "4.5" },
              { label: "TOV", value: player2Data.TOV, max: "5" }
            ]}

            let combinedProcessedPlayerData = {player1: player1ProcessedData, player2: player2ProcessedData};
            setPlayerCardData(combinedProcessedPlayerData);
        
        
      })
      .catch((error) => {
        // Handle the error here
        console.error("Error:", error);
      });
  };

  return (
    <section className={styles.title}>
      <div className={styles.backgroundImage}>
        <PlayerInput onSubmit={handlePlayerInputSubmit} />
        <div className={styles.cardsContainer}>
          <PlayerCard player={playerCardData.player1} />
          <PlayerCard player={playerCardData.player2} />
        </div>
      </div>
    </section>
  );
};

export default PlayersPage;
