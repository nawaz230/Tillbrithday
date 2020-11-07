 const daysel = document.getElementById('days');
 const hoursel = document.getElementById('hours');
 const minsel = document.getElementById('mins');
 const secondel = document.getElementById('seconds');

let newYear = "27 jan 2021";

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalseconds =(newYearDate - currentDate) / 1000;

    const days = Math.floor(totalseconds/3600/24);

    const hours = Math.floor(totalseconds/3600) % 24;

    const mintes = Math.floor(totalseconds/ 60) % 60;

    const seconds = Math.floor(totalseconds) % 60;


  daysel.innerHTML = days
  hoursel.innerHTML = formatTime(hours)
  minsel.innerHTML  = formatTime(mintes)
  secondel.innerHTML = formatTime(seconds)

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);