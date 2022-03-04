function clock() {// We create a new Date object and assign it to a variable called "time".
  var time = new Date(),
      
      // Access the "getHours" method on the Date object with the dot accessor.
      hours = time.getHours(23),
      
      // Access the "getMinutes" method with the dot accessor.
      minutes = time.getMinutes(52),
      
      
      seconds = time.getSeconds(0);
  
  document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
    
    function harold(standIn) {
      if (standIn < 10) {
        standIn = '0' + standIn
      }
      return standIn;
    }
  }
  setInterval(clock, 1000);
