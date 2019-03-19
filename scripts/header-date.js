function ordinal_suffix_of(i) {
  var j = i % 10,
      k = i % 100;
  if (j == 1 && k != 11) {
      return i + "st";
  }
  if (j == 2 && k != 12) {
      return i + "nd";
  }
  if (j == 3 && k != 13) {
      return i + "rd";
  }
  return i + "th";
}
class Clock {
  constructor() {
    this._clockEl = document.getElementById('js-clock');
    this._dateEl = document.getElementById('js-date');
    this._setTime = this._setTime.bind(this);
    this._start();
  }
  _pad(num) {
    return (`0${num.toString()}`).slice(-2);
  }
  _setTime() {
    const date = new Date();
    const hours = this._pad(date.getHours());
    const minutes = this._pad(date.getMinutes());
    this._clockEl.innerHTML = `${hours} : ${minutes}`;
    const year = date.getFullYear();
    const month = this._pad(date.getMonth());
    const day = date.getDate();
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    var months = new Array(12);
    months['00'] = "January";
    months['01'] = "February";
    months['02'] = "March";
    months['03'] = "April";
    months['04'] = "May";
    months['05'] = "June";
    months['06'] = "July";
    months['07'] = "August";
    months['08'] = "September";
    months['09'] = "October";
    months['10'] = "November";
    months['11'] = "December";
    var weekday   = weekdays[date.getDay()];
    var fullMonth = months[month];
    this._dateEl.innerHTML = weekday + ', ' + fullMonth + ' ' + ordinal_suffix_of(day) + ' ' + year;
  }
  _start() {
    this._setTime();
    setInterval(this._setTime, 3000);
  }
}
const clock = new Clock();