import "./Card-Current.css";

function Current({ driver }) {
  return (
    <div className="card-current">
      <h4>Current</h4>
      <div className="stats">
        <p>Points: {driver.points}</p>
        <p>Last race: {driver.lastRace}</p>
      </div>
    </div>
  );
}

export { Current };
