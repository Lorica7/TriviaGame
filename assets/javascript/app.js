   //  Start on click.
   $("#start").on("click", function() {
    //  Set the button alert's timeout to run three seconds after the function's called.
    delayButtonAlert = setTimeout(function() {
      alert("Alert #2");
    }, 3000);
  });

  //  Cancel on click.
  $("#cancel").on("click", function() {
    // Clear the button alert's timeout.
    clearTimeout(delayButtonAlert);
  });


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~functions declared above, called below
  setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);

function timeUp() {

    // in the element with an id of time-left add an h2 saying Time's Up!
    // console log done
    console.log("done");
    $("#time-left").append("<h2>Time's Up!</h2>");
    console.log("time is up");


    //~~~~~~~~~~~~~~Timer display in html very basic~~~~~~~~~~~~~
    <div id="wrapper">

      <div id="display">00:00</div>

      <div id="buttons">
        <button id="start">Start</button>
        <button id="stop">Stop</button>
        <button id="reset">Reset</button>
       </div>
    </div>

//timerjs code

// This code will run as soon as the page loads
window.onload = function() {

    $("#reset").on("click", stopwatch.reset);
    $("#start").on("click", stopwatch.start);
  };
  
  //  Variable that will hold our setInterval that runs the timer
  var intervalId;
  
  // prevents the timer from being sped up unnecessarily if start button pressed many times
  var timerRunning = false;

  var quizTimer = {

    time: 0,
    numWrong: 0,
    numRight: 0,
    totalSel: 0,
  
    reset: function() {
  
      quizTimer.time = 0;
      quizTimer.numWrong = 0;
      quizTimer.numRight = 0;
      quizTimer.totalSel = 0;
      
      // DONE: Change the "display" div to "00:00."
      $("#display").text("00:00");
  
      // DONE: Empty the "numWrong" div.
      $("#numWrong").text("");

      $("#numRight").text("");

      $("#totalSel").text("");
    },