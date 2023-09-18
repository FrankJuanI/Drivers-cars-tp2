import "./Card-TeamPoints.css";

function TeamPoints({ driver }) {
  return (
    <div className="Card-Team-points">
      <p>Team points: {driver.teamPoints}</p>
    </div>
  );
}

export { TeamPoints };
