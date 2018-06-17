  //Variables

  let numRight = 0;
  let numWrong = 0;
  let totalQuestions = 10;
  var intervalId;
  var timerRunning = false;
  let rightAnswers = $("option[value='correct']")
  
  
  window.onload = function() {
        $("#AllTestContent").hide();
      $("#display").text("00:00");

  
    
  //  Start on click.
   $("#start").on("click", function startTest() { 
    if (!clockRunning) {
      intervalId = setInterval(stopwatch.count, 1180000);
      clockRunning = true;
    }
   // $(#AllTestContent).classList.add("showTest");
    $("#show").click(function(){
        $("#AllTestContent").show();
  });
 
 
  stop: function() {
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;

    console.log("done");
    $("#time-left").append("<h2>Time's Up!</h2>");
    console.log("time is up");

const checkAnswers = function () {
  $("submit").on("click", function(){
    const checkAnswer = function (){
      var select = $("select")
      addEvent(select, 'change', function (){
          if (this.value === "correct"){
              numRight++;
          } else {
          numWrong++;
      };
      });
    }
let numFinished = totalQuestions - (numRight+ numWrong);
//print numFinished to screen
let finalScore = 50 + numRight * 5;
  })
    
    
    /*   
 
  var quizTimer = {

    time: 0,
    numWrong: 0,
    numRight: 0,
    totalSel: 0,
  }


 

        This example returns a list of all <div> elements within the document with a class of either "note" or "alert":

var matches = document.querySelectorAll("div.note, div.alert")
*/}