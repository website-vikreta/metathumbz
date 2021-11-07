// Hero Timer
// --------------------------------------------------------------------
var upgradeTime =
  new Date("2021-11-15").getTime() / 1000 - new Date().getTime() / 1000;
var seconds = upgradeTime;

function timer() {
  var days = Math.floor(seconds / 24 / 60 / 60);
  var hoursLeft = Math.floor(seconds - days * 86400);
  var hours = Math.floor(hoursLeft / 3600);
  var minutesLeft = Math.floor(hoursLeft - hours * 3600);
  var minutes = Math.floor(minutesLeft / 60);
  var remainingSeconds = seconds % 60;
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }

  let countDays = pad(days);
  document.getElementById("day10").innerHTML = Math.floor(countDays / 10);
  document.getElementById("day").innerHTML = Math.floor(countDays % 10);

  let countHours = pad(hours);
  document.getElementById("hour10").innerHTML = Math.floor(countHours / 10);
  document.getElementById("hour").innerHTML = Math.floor(countHours % 10);

  let countMins = pad(minutes);
  document.getElementById("min10").innerHTML = Math.floor(countMins / 10);
  document.getElementById("min").innerHTML = Math.floor(countMins % 10);

  let countSecond = pad(remainingSeconds);
  document.getElementById("sec10").innerHTML = Math.floor(countSecond / 10);
  document.getElementById("sec").innerHTML = Math.floor(countSecond % 10);

  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "Completed";
  } else {
    seconds--;
  }
}
var countdownTimer = setInterval("timer()", 1000);

// Minting form
// --------------------------------------------------------------------
const minus = $("#mintingForm #minus");
const plus = $("#mintingForm #plus");
const textValue = $("#mintingForm #mintingNumber");

minus.on("click", function (e) {
  e.preventDefault();

  let value = textValue.val();
  if (value <= 0) {
    minus.attr("disabled", true);
    plus.attr("disabled", false);
  } else {
    minus.attr("disabled", false);
    plus.attr("disabled", false);
    textValue.val(textValue.val() - 1);
  }
});
plus.on("click", function (e) {
  e.preventDefault();

  let value = textValue.val();
  if (value >= 20) {
    plus.attr("disabled", true);
    minus.attr("disabled", false);
  } else {
    plus.attr("disabled", false);
    minus.attr("disabled", false);
    textValue.val(parseInt(textValue.val()) + 1);
  }
});
