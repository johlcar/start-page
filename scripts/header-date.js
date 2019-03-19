<script>
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

      var quotes = ["And a step backward, after making a wrong turn, is a step in the right direction. <br/>- Kurt Vonnegut", "Positivity, like any skill, you get better at by practicing it. <br/>- Jackson Bliton", 
      "All we have to decide is what to do with the time that is given us. <br/>- J.R.R. Tolkien", "More is lost by indecision than wrong decision. <br/>- Cicero", "A ship is safe in harbor, but that's not what ships are for. <br/>- William Shedd",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. <br/>- Anonymous", "Not all those who wander are lost. <br/>- J.R.R. Tolkien", "Calm seas make poor sailors. <br/>- Anonymous", 
    "There is nothing noble in being superior to your fellow men, true nobility is being superior to your former self. <br/>- Ernest Hemingway", 
  "Everyone you meet is fighting a battle that you know nothing about. <br/>- Various", "Kindness is the language which the deaf can hear and the blind can see. <br/>- Mark Twain", 
"To strive, to seek, to find, and not to yield. <br/>- Tennyson", "Be the change you wish to see in the world. <br/>- Ghandi", "Do or do not. There is no try. <br/>- Yoda", 
"Would I rather be feared or loved? Easy - both. I want people to be afraid of how much they love me. <br/>- Michael Scott", "Hodor. <br/>- Hodor",
"Don't ask for a lighter load, ask for a stronger back. <br/>- Phillips Brooks", "Good judgement comes from experience, and experience comes from bad judgement. <br/>- Anonymous",
"Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world. <br/>- Albert Einstein"]

          var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

          document.getElementById('quote').innerHTML = randomQuote;
    </script>