  //Variables

  let numRight = 0;
  let numWrong = 0;
  let totalQuestions = 10;
  var intervalId;
  var timerRunning = false;
  let rightAnswers = $("option[value='correct']")
  var number = 1180000
  
  window.onload = function() {
        $("#AllTestContent").hide();
      $("#display").text("1800000"); 
  };
      
  //  Start on click.
  function startTest(b) {
    
      $("#start").click(function(){
        $("#AllTestContent").show();
      intervalId= setInterval(decrement, 1000);
      number--;
    })
      if (number === 0) {
        stop();
        alert("Time Up!");
      }
    };
  console.log(number)
/*
const checkAnswers = function () {
  $("submit").on("click", function(){  */
      var select = $("select")
      addEvent(select, 'change', function (){
          if (this.value === "correct"){
              numRight++;
          } else {
          numWrong++;
      };
      });
let numFinished = totalQuestions - (numRight+ numWrong);
//print numFinished to screen
let finalScore = 50 + numRight * 5;

document.getElementById("numRight").innerHTML("Number Right: " + numRight);
document.getElementById("numWrong").innerHTML("Number Wrong: " + numWrong);
document.getElementById("finalScore").innerHTML("Final Score: " + finalScore);

console.log(numRight)
console.log(numWrong)
console.log(finalScore);
  

  


/*
var game {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function () {
    game.counter: --;
    $("#display").html(game.counter;)
    if (game.counter <= 0 ) {
      alert("Times Up!");
    }
  }
};   */
      