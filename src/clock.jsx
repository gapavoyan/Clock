
setInterval(() => {
    const hour = document.querySelector('.hour')
    const minute = document.querySelector('.min')
    const second = document.querySelector('.sec')
    const date = new Date()
    const hourTime = date.getHours()
    const minuteTime = date.getMinutes()
    const secondTime = date.getSeconds()

    const hRotate = 30 * hourTime + minuteTime / 2
    const mRotate = 6 * minuteTime
    const sRotate = 6 * secondTime

    hour.style.transform = `rotate(${hRotate}deg)`
    minute.style.transform = `rotate(${mRotate}deg)`
    second.style.transform = `rotate(${sRotate}deg)`
}, 1000);


function Clock() {
    return (
        <div className="main">
            <div className="clock">
                <div className="hour">

                </div>
                <div className="min">

                </div>
                <div className="sec">

                </div>
            </div>
        </div>
    )
}
export default Clock
