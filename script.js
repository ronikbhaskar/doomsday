

const dayCount = document.getElementById("dayCount")
const dayLabel = document.getElementById("dayLabel")

const hourCount = document.getElementById("hourCount")
const hourLabel = document.getElementById("hourLabel")

const minuteCount = document.getElementById("minuteCount")
const minuteLabel = document.getElementById("minuteLabel")

const secondCount = document.getElementById("secondCount")
const secondLabel = document.getElementById("secondLabel")

const secretImageDiv = document.getElementById("secretImageDiv")
var days = -1, hours = -1, minutes = -1, seconds = -1;

const doomsday = new Date(2023, 0, 3, 0, 0, 0, 0);

var imageToggled = false;
function secretButtonClick() {
    imageToggled = !imageToggled;
    if (imageToggled) {
        secretImageDiv.innerHTML = `<img src="friends.jpg" class="secret-image">`;
    } else {
        secretImageDiv.innerHTML = ``;
    }
}

function updateTime() {
    const currentDate = new Date();
    const diff = doomsday.getTime() - currentDate.getTime();
    seconds = Math.trunc(diff / 1000) % 60;
    secondCount.innerText = ("00" + seconds).slice(-2);
    
    if (seconds == 0) {
        secondLabel.innerText = "seconds"
    } else if (seconds == 1) {
        secondLabel.innerText = "second"
    }

    if (seconds == 59 || days < 0 || hours < 0 || minutes < 0) {

        minutes = Math.trunc(diff / 60000) % 60;
        minuteCount.innerText = ("00" + minutes).slice(-2);
        if (minutes == 0) {
            minuteLabel.innerText = "minutes"
        } else if (minutes == 1) {
            minuteLabel.innerText = "minute"
        } 

        hours = Math.trunc(diff / 3600000) % 24;
        hourCount.innerText = ("00" + hours).slice(-2);
        if (hours == 0) {
            hourLabel.innerText = "hours"
        } else if (hours == 1) {
            hourLabel.innerText = "hour"
        } 

        days = Math.trunc(diff / 86400000);
        dayCount.innerText = ("00" + days).slice(-2);
        if (days == 0) {
            dayLabel.innerText = "days"
        } else if (days == 1) {
            dayLabel.innerText = "day"
        }
    
    }
}

setInterval(updateTime, 100);