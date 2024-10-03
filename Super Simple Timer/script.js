// getting clock div from html document
const clock = document.getElementById("clock")
const date = document.getElementById("date")

// creating a function and using Date() function to get current hours minutes and seconds using now. function
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let days = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

// checking and formating the hours,minutes,seconds (how to display them)
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

// changing the text content of clock div and outputing using innerHTML
    clock.innerHTML = hours + ':' + minutes + ':' + seconds;
    date.innerHTML = days + "/" + month + "/" + year
}

// setting an interval for updateClock function and setting it to 1000ms(1 seconds)
setInterval(updateClock, 1000);

// calling the updateClock function
updateClock();