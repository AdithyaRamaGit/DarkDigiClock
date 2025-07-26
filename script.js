const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const Am_Pm = document.getElementById("Am_Pm");

const timeInc = setInterval(() => {
  let currentTIme = new Date();
    let hours = currentTIme.getHours()
    let minutes = currentTIme.getMinutes()
    let seconds = currentTIme.getSeconds()

    let am_pm = hours>=12?"PM":"AM"
    hours = hours%12||12

    hrs.innerHTML = (hours<10?"0":"")+hours
    min.innerHTML = (minutes<10?"0":"")+minutes
    sec.innerHTML = (seconds<10?"0":"")+seconds
    Am_Pm.innerHTML = am_pm

}, 1000);
