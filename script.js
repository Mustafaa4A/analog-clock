setInterval(clock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');



function clock() {
    const currentDate = new Date();
    let hours = currentDate.getHours(),
        minutes = currentDate.getMinutes(),
        seconds = currentDate.getSeconds();
    
    let secondsRatio = seconds / 60,
        minutesRatio = (secondsRatio + minutes) / 60,
        hoursRatio = (minutesRatio + hours) / 12;
    
    route(secondHand, secondsRatio);
    route(minuteHand, minutesRatio);
    route(hourHand, hoursRatio);
}

function route(element, rate) {
    element.style.setProperty('--routate', rate * 360);
}

clock()