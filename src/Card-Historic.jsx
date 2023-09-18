
function Historic ({driver}){
    return (
        <div className="Historic">
                <h4>Historic</h4>
                <p>Wins</p>
                <p>Poles</p>
                <p>Best</p>
                <p>{driver.wins}</p>
                <p>{driver.poles}</p>
                <p className='flag'>{driver.bestPosition}</p>
            </div>
    )


}



export { Historic }