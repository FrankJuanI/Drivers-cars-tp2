import "./Card-DriverName.css";

function DriverName({ driver, index }) {
  return (
    <div className="driver-name">
      <h3>
        {`${index + 1} - `}
        {driver.name} {driver.surname}
      </h3>
    </div>
  );
}

export { DriverName };
