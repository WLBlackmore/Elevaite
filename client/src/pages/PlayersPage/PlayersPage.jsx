import PlayerCard from "./PlayerCard/PlayerCard";
import PlayerInput from "./PlayerInput/PlayerInput";
import styles from "./PlayersPage.module.css";
import axios from 'axios';

const PlayersPage = () => {
  // To be replaced with API call
  let player1 = {
    info: {playerName: "LeBron James",
    age: "39",
    team: "LAL",
    activity:"Active"},
    stats: [
      {label:"PTS", value: "30"}, 
      {label:"AST", value: "20"}, 
      {label:"REB", value: "8"}
  ]
  }
  let player2 = {
    info: {playerName: "Stephen Curry",
    age: "36",
    team: "GST",
    activity:"Active"},
    stats: [
      {label:"PTS", value: "10"}, 
      {label:"AST", value: "6"}, 
      {label:"REB", value: "4"}
  ]
  }
  return (
    <section className={styles.title}>
      <div className={styles.backgroundImage}>
      <PlayerInput/>
        <div className={styles.cardsContainer}>
          <PlayerCard player={player1}/>
          <PlayerCard player={player2}/>
        </div>
      </div>
    </section>
  );
};

export default PlayersPage;
