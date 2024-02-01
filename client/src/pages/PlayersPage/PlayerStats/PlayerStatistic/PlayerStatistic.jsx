const PlayerStatistic = (props) => {
    let player1 = {
        info: {playerName: "LeBron James",
        age: "39",
        team: "LAL",
        activity:"Active"},
        stats: [
          {label:"PTS", value: "28"}, 
          {label:"AST", value: "6"}, 
          {label:"REB", value: "8"}
      ]
      }
      let stat = props.stat;
      let textOutput = stat.label + " : " + stat.value;

    return (
    <div>
        <div className="statHolder"> 
            <p>{textOutput}</p>
        </div>

    </div>
    )
}

export default PlayerStatistic;