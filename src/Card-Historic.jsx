import "./Card-Historic.css";

function Historic({ driver }) {
  return (
    <div className="Historic">
      <h4>Historic</h4>
      <div className="historic-title">
        <p>Wins</p>
        <p>Poles</p>
        <p>Best</p>
      </div>
      <div className="historic-stast">
        <p>{driver.wins}</p>
        <p>{driver.poles}</p>
        <p className="flag">{driver.bestPosition}</p>
      </div>
    </div>
  );
}

export { Historic };
