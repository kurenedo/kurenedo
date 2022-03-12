<script>
    var time = document.querySelector('.time');
    var dateTime = document.querySelector('.date-time');

    function updateClock() {
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
      var dayNames = ['Sunday', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
      var monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

      // format date and time
      hours = hours % 24 || 24;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      date = date < 10 ? '0' + date : date;

      // display date and time
      var period = hours < 24 ? 'Time' : 'Time';
      time.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + period;
      dateTime.innerHTML =  dayNames[day] + ', ' + date + ' ' + monthNames[month] + ', ' + year;
    }

    updateClock();
    setInterval(updateClock, 1000);
  </script>