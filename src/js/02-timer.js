import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

/* const refs ={
input: document.querySelector('#datetime-picker'),
startButton: document.querySelector('[data-start]'),
days: document.querySelector('[data-days]'),
hours: document.querySelector('[data-hours]'),
minutes: document.querySelector('[data-minutes]'),
seconds: document.querySelector('[data-seconds]'),
};
 */



/* function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  


function onButtonStartClick() {
    timerId = setInterval(() => {
        currentTime = Date.now();
        const deltaTime = selectedTime - currentTime;
        const time = convertMs(deltaTime);
        console.log(time)
        updateTime(time)
    }, 1000)
}

function updateTime({ days, hours, mins, secs }) {
refs.days.textContent = days;
refs.hours.textContent = hours;
refs.mins.textContent = mins;
refs.secs.textContent = secs;
} */