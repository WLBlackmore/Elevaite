import PlayerCard from "./PlayerCard/PlayerCard";
import PlayerInput from "./PlayerInput/PlayerInput";
import AdvancedComp from "./AdvancedComp/AdvancedComp";
import styles from "./PlayersPage.module.css";
import axios from "axios";
import { useState } from "react";

const PlayersPage = () => {
  let player1CardData = {
    info: { playerName: "", age: "", team: "", season: "", image_url: "" },
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
    info: { playerName: "", age: "", team: "", season: "", image_url: "" },
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
  const [advancedcompData, setAdvancedCompData] = useState("");
  const [showAdvancedComp, setShowAdvancedComp] = useState(false);

  const handlePlayerInputSubmit = ({ player1, player2 }) => {
    console.log("Player 1 Data:", player1);
    console.log("Player 2 Data:", player2);

    // Fetch player data and advanced comparison
    axios
      .post("http://localhost:5000/players", { player1, player2 })
      .then((response) => {
        let playerData = response.data;
        let player1Data = playerData.player1stats[0];
        let player2Data = playerData.player2stats[0];
        let player1ProcessedData = {
          info: { playerName: player1.name, age: player1Data.PLAYER_AGE, team: player1Data.TEAM_ABBREVIATION, season: player1Data.SEASON_ID, image_url: playerData.player1headshot },
          stats: [
            { label: "PPG", value: player1Data.PTS, max: "35.4", comparison: player1Data.PTS > player2Data.PTS },
            { label: "AST", value: player1Data.AST, max: "11.7", comparison: player1Data.AST > player2Data.AST },
            { label: "REB", value: player1Data.REB, max: "15.2", comparison: player1Data.REB > player2Data.REB },
            { label: "BLK", value: player1Data.BLK, max: "3.9", comparison: player1Data.BLK > player2Data.BLK },
            { label: "STL", value: player1Data.STL, max: "2.7", comparison: player1Data.STL > player2Data.STL },
            { label: "FG%", value: Number(player1Data.FG_PCT*100).toPrecision(3), max: "67", comparison: player1Data.FG_PCT > player2Data.FG_PCT },
            { label: "FGA", value: player1Data.FGA, max: "27.8", comparison: player1Data.FGA > player2Data.FGA },
            { label: "FGM", value: player1Data.FGM, max: "12.1", comparison: player1Data.FGM > player2Data.FGM },
            { label: "3P%", value: Number(player1Data.FG3_PCT*100).toPrecision(3), max: "45.4", comparison: player1Data.FG3_PCT > player2Data.FG3_PCT },
            { label: "3PA", value: player1Data.FG3A, max: "13.2", comparison: player1Data.FG3A > player2Data.FG3A },
            { label: "3PM", value: player1Data.FG3M, max: "5.3", comparison: player1Data.FG3M > player2Data.FG3M },
            { label: "FT%", value: Number(player1Data.FT_PCT*100).toPrecision(3), max: "92.4", comparison: player1Data.FT_PCT > player2Data.FT_PCT },
            { label: "FTA", value: player1Data.FTA, max: "10.2", comparison: player1Data.FTA > player2Data.FTA },
            { label: "GP", value: player1Data.GP, max: "82", comparison: player1Data.GP > player2Data.GP },
            { label: "MIN", value: player1Data.MIN, max: "41.1", comparison: player1Data.MIN > player2Data.MIN },
            { label: "PF", value: player1Data.PF, max: "4.5", comparison: player1Data.PF < player2Data.PF },
            { label: "TOV", value: player1Data.TOV, max: "5", comparison: player1Data.TOV < player2Data.TOV }
          ]}
          let player2ProcessedData = {
            info: { playerName: player2.name, age: player2Data.PLAYER_AGE, team: player2Data.TEAM_ABBREVIATION, season: player2Data.SEASON_ID, image_url: playerData.player2headshot },
            stats: [
              { label: "PPG", value: player2Data.PTS, max: "35.4", comparison: player2Data.PTS > player1Data.PTS },
              { label: "AST", value: player2Data.AST, max: "11.7", comparison: player2Data.AST > player1Data.AST },
              { label: "REB", value: player2Data.REB, max: "15.2", comparison: player2Data.REB > player1Data.REB },
              { label: "BLK", value: player2Data.BLK, max: "3.9", comparison: player2Data.BLK > player1Data.BLK },
              { label: "STL", value: player2Data.STL, max: "2.7", comparison: player2Data.STL > player1Data.STL },
              { label: "FG%", value: Number(player2Data.FG_PCT*100).toPrecision(3), max: "67", comparison: player2Data.FG_PCT > player1Data.FG_PCT },
              { label: "FGA", value: player2Data.FGA, max: "27.8", comparison: player2Data.FGA > player1Data.FGA },
              { label: "FGM", value: player2Data.FGM, max: "12.1", comparison: player2Data.FGM > player1Data.FGM },
              { label: "3P%", value: Number(player2Data.FG3_PCT*100).toPrecision(3), max: "45.4", comparison: player2Data.FG3_PCT > player1Data.FG3_PCT },
              { label: "3PA", value: player2Data.FG3A, max: "13.2", comparison: player2Data.FG3A > player1Data.FG3A },
              { label: "3PM", value: player2Data.FG3M, max: "5.3", comparison: player2Data.FG3M > player1Data.FG3M },
              { label: "FT%", value: Number(player2Data.FT_PCT*100).toPrecision(3), max: "92.4", comparison: player2Data.FT_PCT > player1Data.FT_PCT },
              { label: "FTA", value: player2Data.FTA, max: "10.2", comparison: player2Data.FTA > player1Data.FTA },
              { label: "GP", value: player2Data.GP, max: "82", comparison: player2Data.GP > player1Data.GP },
              { label: "MIN", value: player2Data.MIN, max: "41.1", comparison: player2Data.MIN > player1Data.MIN },
              { label: "PF", value: player2Data.PF, max: "4.5", comparison: player2Data.PF < player1Data.PF },
              { label: "TOV", value: player2Data.TOV, max: "5", comparison: player2Data.TOV < player1Data.TOV }
            ]
          }

          let combinedProcessedPlayerData = {player1: player1ProcessedData, player2: player2ProcessedData};
          setPlayerCardData(combinedProcessedPlayerData);

          // Fetch advanced comparison data
          axios.post("http://localhost:5000/advancedcomp", {player1: player1ProcessedData.info, player2: player2ProcessedData.info})
          .then((response) => {
            setAdvancedCompData(response.data.response);
          })
          .catch((error) => {
            console.error("Error fetching advanced comparison:", error);
          });
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleAdvancedCompClick = () => {
    setShowAdvancedComp(true);
  };

  return (
    <section className={styles.title}>
      <div className={styles.backgroundImage}>
        <PlayerInput onSubmit={handlePlayerInputSubmit} />
        <div className={styles.cardsContainer}>
          <PlayerCard player={playerCardData.player1} />
          <PlayerCard player={playerCardData.player2} />
        </div>
        <AdvancedComp 
          onAdvancedCompClick={handleAdvancedCompClick} 
          ACresp={showAdvancedComp ? advancedcompData : ""} 
        />
      </div>
    </section>
  );
};

export default PlayersPage;
