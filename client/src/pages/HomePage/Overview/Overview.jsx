import playerMain from '../../../assets/player-main.jpg';
const Overview = () => {
    return(
        <section class="overview">
        <div class="overview-flex">
            <div class="overview-img"><img src={playerMain} alt="basketball player"></img></div>
            <div class="overview-text">
                <h3>Providing Historical Basketball
                    Statistics in one place</h3>
                <p>Welcome to our comprehensive collection of historical basketball statistics! Here, you will find a treasure trove of data and records spanning the rich history of the sport. From legendary players and iconic teams to remarkable achievements and game-changing moments, we have meticulously curated a one-stop resource for all your basketball statistical needs.</p>
                <p>Dive into the past and explore the remarkable numbers that define the evolution of basketball. Whether you're researching the greatest scoring performances, comparing player statistics across different eras, or uncovering hidden gems from the records of the game, our database has it all.</p>
            </div>
        </div>
    </section>
    )
};

export default Overview;