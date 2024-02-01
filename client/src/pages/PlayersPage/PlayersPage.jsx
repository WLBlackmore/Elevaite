import PlayerCard from "./PlayerCard/PlayerCard";
import styles from "./PlayersPage.module.css";
const PlayersPage = () => {
  // To be replaced with API call
  let player1 = {
    info: {playerName: "LeBron James",
    age: "39",
    team: "LAL",
    activity:"Active"},
    stats: [
      {label:"PTS", value: "15"}, 
      {label:"AST", value: "6"}, 
      {label:"REB", value: "8"}
  ]
  }
  let player2 = {
    info: {playerName: "Stephen Curry",
    age: "36",
    team: "GST",
    activity:"Active"},
    stats: [
      {label:"PTS", value: "29"}, 
      {label:"AST", value: "6"}, 
      {label:"REB", value: "4"}
  ]
  }
  return (
    <section className={styles.title}>
      <div className={styles.backgroundImage}>
        <div className={styles.cardsContainer}>
          <PlayerCard player={player1}/>
          <PlayerCard player={player2}/>
        </div>
      </div>
    </section>
  );
};

export default PlayersPage;
