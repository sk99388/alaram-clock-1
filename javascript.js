const display=document.getElementById('clock');
// creat a new audio object by use new audio
const audio=new Audio('alarm-clock-27067.mp3');
// use audio.loop when it ring it start from begging
audio.loop=true;
let alarmTime=null;
// store refarence to clear it
let alarmTimeOut=null;


function updateTime(){
    // to get current date and time
  const date= new Date();
    // we extract houres,minutes and seconds
  const hour=date.getHours();
  const minute=date.getMinutes();
  const second=date.getSeconds();
    // then we diplay in our screan by display.inertext 
  display.innerText= hour+":"+minute+":"+ second;
  
}

//   to store the alaram time 
function setAlarmTime(value){
      alarmTime=value;
      
}

function setAlarm(){
    if(alarmTime){
        const current = new Date();
        const timeToAlarm= new Date(alarmTime);

        if(timeToAlarm > current){
            const timeOut = timeToAlarm.getTime() - current.getTime();
            alarmTimeOut=setTimeout(()=>audio.play(),timeOut);
            alert('Alarm set');
            
        }
    }
}

function clearAlarm(){
    audio.pause();
    if(alarmTimeOut){
        clearTimeout(alarmTimeOut);
        alert('Alarm clear')
    }
}

setInterval(updateTime,1000);

