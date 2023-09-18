import "./Card.css";
import { DriverName } from "./Card-DriverName";
import { Current } from "./Card-Current";
import { Historic } from "./Card-Historic";
import { CountrieflagComp } from "./Card-Flag";
import { TeamFlagComp } from "./Card-Team";
import { TeamPoints } from "./Card-TeamPoints";

function Card({ driver, countrieFlag, teamFlag, index }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: `${countrieFlag.backgroundColor}`,
        color: `${countrieFlag.color}`,
      }}
    >
      <DriverName key={driver.name} driver={driver} index={index} />

      <Current key={driver.name} driver={driver} />

      <Historic key={driver.name} driver={driver} />

      <CountrieflagComp key={driver.name} countrieFlag={countrieFlag} />

      <TeamFlagComp key={driver.name} teamFlag={teamFlag} />

      <TeamPoints key={driver.name} driver={driver} />
    </div>
  );
}

export { Card };
