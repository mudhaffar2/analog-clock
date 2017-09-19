
var hoursNeedle = document.getElementById("hours-needle");
var minutesNeedle = document.getElementById("minutes-needle");
var secondsNeedle = document.getElementById("seconds-needle");
var digitalClock = document.getElementById("digital-clock");
var textDate = document.getElementById("text-date");
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function positionNeedles () {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var day = date.getDate() + 1;
  var month = date.getMonth();
  var dayNumber = date.getDay();
  var year = date.getFullYear();
  var dayOrder = 'th';

  if ((day == 1) || (day == 21) || (day == 31)) {dayOrder = 'st'};
  if ((day == 2) || (day == 22)) {dayOrder = 'nd'};
  if ((day == 3) || (day == 23)) {dayOrder = 'rd'};

  digitalClock.textContent = hours + ':' + minutes + ':' + seconds;
  textDate.textContent = days[dayNumber] + ', ' + months[month] + ' ' + day + dayOrder + ', ' + year;



  seconds = seconds * 6 + 6;
  minutes = minutes * 6 + 6;
  hours = hours * 30;
  hoursNeedle.style.transform = "rotate(" + hours + "deg)";
  minutesNeedle.style.transform = "rotate(" + minutes + "deg)";
  secondsNeedle.style.transform = "rotate(" + seconds + "deg)";
}

var moveClock = setInterval(function(){positionNeedles()}, 1000);

























