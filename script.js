function showTime(){

  let day = new Date();
  let hour = day.getHours();
  let minutes = day.getMinutes();
  let seconds = day.getSeconds();
  let timeFormat = convertFormat(hour);
  hour = checkTime(hour);

  hour = addZero(hour);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  document.getElementById('clock').innerHTML = `${hour}:${minutes}:${seconds}${timeFormat}`
}

function convertFormat(time){
  let format = "AM";
  if(time >= 12){
      format = "PM";
  }
  return format;
}

function checkTime(time){
  if(time>12){
      time = time - 12;
  }
  if (time === 0){
      time = 12;
  }
  return time;
}

function addZero(time){
  if(time<10){
      time = "0" + time;
  }
  return time;
}

showTime()
setInterval(showTime,1000);
