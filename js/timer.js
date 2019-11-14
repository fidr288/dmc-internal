function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            // timer = duration;
            document.querySelector('#time').innerText = "STOP"
        }
    }, 1000);
}

document.getElementById("timer").addEventListener("click",() => {
    var oneMinute = 60 * 1,
    display = document.querySelector('#time');
    startTimer(oneMinute, display);
});

// document.getElementById("reset").addEventListener("click",() => {
//     document.querySelector('#time').innerText = "1:00"
// });
