let awayScoreEl = document.getElementById("away-score-el");
let homeScoreEl = document.getElementById("home-score-el");
let homeScore = 0;
let awayScore = 0;

function renderScore() {
    awayScoreEl.textContent = awayScore;
    homeScoreEl.textContent = homeScore;
}

function awayAdd1() {
    awayScore += 1;
    renderScore();
}

function awayAdd2() {
    awayScore += 2;
    renderScore();
}

function awayAdd3() {
    awayScore += 3;
    renderScore();
}

function homeAdd1() {
    homeScore += 1;
    renderScore();
}

function homeAdd2() {
    homeScore += 2;
    renderScore();
}

function homeAdd3() {
    homeScore += 3;
    renderScore();
}

function newGame() {
    homeScore = 0;
    awayScore = 0;
    renderScore();
    removeLeader();
}

function setLeader() {
    if(homeScore > awayScore) {
        removeLeader();
        const leader = document.querySelector(".home");
        leader.id = "leader";
    } else if (awayScore > homeScore){
        removeLeader();
        const leader = document.querySelector(".away");
        leader.id = "leader";
    } else if (homeScore == awayScore) {
        removeLeader();
    }
}

function removeLeader() {
    let leader = document.querySelector("#leader");
    if (leader != null) {
        leader.id = "";
    } else {
        return null;
    }
}

var countDownDate = new Date("Dec 7, 2025 14:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("time").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);