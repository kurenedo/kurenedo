function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
  }
  function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
  }
  function currentTime() {
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec; /* adding time to the div */
  function currentTime() {
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  
  currentTime(); /* calling currentTime() function to initiate the process */
  function currentTime() {
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  
  currentTime(); /* calling currentTime() function to initiate the process */
