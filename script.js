const date = document.getElementById("date"),
time = document.getElementById("time")

function getCurrentDate() {
    const currentDate = new Date(),
    options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }
    date.innerHTML = currentDate.toLocaleDateString('es', options)
}

function getCurrentTime() {
    const currentDate = new Date(),
    hours   = currentDate.getHours(),
    minutes = formatTime(currentDate.getMinutes()),
    seconds = formatTime(currentDate.getSeconds())
    format = (hours > 12) || (hours == 24) ? `AM` : 'PM',
    formatHours = (hours + 11) % 12 + 1
    time.innerHTML = `${hours}:${minutes}:${seconds}
    <small>${format}</small>`
}

function formatTime(value) {
    return value < 10 ? `0${value}`  : value
}


getCurrentDate()
setInterval(getCurrentTime, 1000)