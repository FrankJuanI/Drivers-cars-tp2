
function DriverName ({driver}){

    return(
        <div className="driver-name">
                <h3>{driver.name} {driver.surname}</h3>
            </div>
        )
}


export { DriverName }