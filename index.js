const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");


const newYears="1 jan 2022";
function countdown(){
    const newYearDate = new Date(newYears);
    const currentDate =new Date();
    const totaltime=(newYearDate-currentDate)/1000;

    const days =Math.floor(totaltime/3600/24);
    const hours =Math.floor(totaltime/3600)%24;
    const mins =Math.floor(totaltime/60)%60;
    const seconds =Math.floor(totaltime)%60;

    daysEl.innerHTML =formatTime( days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}
function formatTime(time){
    return time <10 ? 'none' :time;
}


countdown();
setInterval(countdown ,1000);

