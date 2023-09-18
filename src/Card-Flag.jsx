import "./Card-Flag.css";

function CountrieflagComp({ countrieFlag }) {
  return (
    <div className="card-countrieFlag">
      <img src={countrieFlag.flag} alt="" style={{ width: "50%" }} />
    </div>
  );
}

export { CountrieflagComp };
