$(document).ready(function() {
  let startTime;
  let timerInterval;
  let elapsedTime = 0;

  function formatTime(ms) {
    let totalseconds = Math.floor(ms / 1000);
    let hours = Math.floor(totalseconds / 3600);
    let minutes =  Math.floor((totalseconds % 3600) / 60);
    let seconds = totalseconds % 60;
    let milliSeconds = Math.floor((ms % 1000) / 100);

    return `${hours}:${minutes}:${seconds}:${milliSeconds}`;
  };

  function startTimer() {
    if (!timerInterval) {
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(function() {
          elapsedTime = Date.now() - startTime;
          $('#timer').text(formatTime(elapsedTime));
      }, 100); 

    $("#start").prop("disabled",true);
    $("#stop").prop("disabled",false);
    $("#reset").prop("disabled",false);
    }
  };

  function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;

    $("#start").prop("disabled",false);
    $("#stop").prop("disabled",true);
  };

  function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    $("#timer").text(formatTime(elapsedTime));

    $("#start").prop("disabled",false);
    $("#stop").prop("disabled",true);
    $("#reset").prop("disabled",true);
  };

  $("#start").click(startTimer);
  $("#stop").click(stopTimer);
  $("#reset").click(resetTimer);

  $("#stop").prop("disabled",true);
  $("#reset").prop("disabled",true);

});