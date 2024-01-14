import playerSecondary from '../../assets/player-secondary.png';
import basketballHoop from '../../assets/basketball-hoop.png';
import basketballShoe from '../../assets/basketball-shoe.jpg';

const Features = () => {
    return(
        <section class="features">
        <div class="features-flex">
            <div class="card"> 
                <img src={playerSecondary} alt="Player"></img>
                <h4>Player Comparison Tool</h4>
                <ul>
                    <li>Analyze and compare statistics of basketball players, both past and present.</li>
                    <li>Utilize our advanced player comparison tool for a comprehensive evaluation.</li>
                    <li>Gain valuable insights into various aspects of player performance</li>
                </ul>
            </div>

            <div class="card"> 
                <img src={basketballHoop} alt="Hoop"></img>
                <h4>Team Performance Tool</h4>
                <ul>
                    <li>User-friendly solution for comparing and analyzing team performance in basketball.</li>
                    <li>Designed for basketball enthusiasts seeking to explore team comparisons.</li>
                    <li>Provides a straightforward and accessible approach to team analysis.</li>
                </ul>
            </div>

            <div class="card"> 
                <img src={basketballShoe} alt="Shoe"></img>
                <h4>AI Projection Tool</h4>
                <ul>
                    <li>Cutting-edge AI Projection Tool for forecasting future statistics of basketball players.</li>
                    <li>Utilizes past performance data to provide reliable and data-driven player stat predictions.</li>
                    <li>Leverages the power of artificial intelligence to generate accurate projections.</li>
                </ul>
            </div>
        </div>

    </section>
    )
}

export default Features;