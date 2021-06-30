const clock = document.querySelector("#clock");

const d = "2"

function updateClock(){
   const date = new Date();
   const hours = String(date.getHours()).padStart(2,"0");
   const minutes = String(date.getMinutes()).padStart(2,"0");
   const seconds = String(date.getSeconds()).padStart(2,"0");

   clock.innerText = `${hours}:${minutes}:${seconds}`;
}


function init(){
   updateClock();
   setInterval(updateClock, 1000);
}

init();