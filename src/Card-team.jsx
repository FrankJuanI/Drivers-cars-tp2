import "./Card-team.css";

function TeamFlagComp({ teamFlag }) {
  return (
    <div className="card-teamFlag">
      <img src={teamFlag} alt="" style={{ width: "50%" }} />
    </div>
  );
}

export { TeamFlagComp };
