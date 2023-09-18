function Current ({driver}) {

    return (
        <div className="card-current">
                <h4>Current</h4>
                <p>Points: {driver.points}</p>
                <p>Last race: {driver.lastRace}</p>
            </div>
    )

}


export { Current }