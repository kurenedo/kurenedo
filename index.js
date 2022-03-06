var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var day = date.getDay();
var time = document.querySelector('.time');
var dateTime = document.querySelector('.date-time');
// Get the current time, day , month and year
var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();
var day = now.getDay();
var date = now.getDate();
var month = now.getMonth();
var year = now.getFullYear();

// store day and month name in an array
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// format date and time
hours = hours % 12 || 12;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;
date = date < 10 ? '0' + date : date;

// display date and time
var period = hours < 12 ? 'AM' : 'PM';
time.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + period;
dateTime.innerHTML = dayNames[day] + ', ' + monthNames[month] + ' ' + date + ', ' + year;
