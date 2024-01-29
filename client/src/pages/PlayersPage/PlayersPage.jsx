import PlayerCard from "./PlayerCard/PlayerCard";
import styles from "./PlayersPage.module.css";
const PlayersPage = () => {
  return (
    <section className={styles.title}>
      <div className={styles.backgroundImage}>
        <div className={styles.cardsContainer}>
          <PlayerCard />
          <PlayerCard />
        </div>
      </div>
    </section>
  );
};

export default PlayersPage;
