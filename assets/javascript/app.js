  //Variables

  let numRight = 0;
  let numWrong = 0;
  let totalQuestions = 10;
  var intervalId;
  var timerRunning = false;
  let rightAnswers = $("option[value='correct']")
  var number = 1180000
  var decrement = number - 1000;
  
  window.onload = function() {
        $("#AllTestContent").hide();
      $("#display").text("1800000"); 
  };
      
  //  Start on click.
  function startTest(b) {
    
      $("#start").click(function(){
        $("#AllTestContent").show();
      intervalId= setInterval(decrement, 1000);
      clearInterval(intervalId);
    })
      if (number === 0) {
        stop();
        alert("Time Up!");
      }
    };
  console.log(number)

const checkAnswers = function (){ 
  let option = document.getElementsByTagName("option");
    if (option.value == "correct"){
        numRight++;
      } else {
       numWrong++;
      };
      };

  
const addFinalNum = function () {
let numFinished = totalQuestions - (numRight+ numWrong);
//print numFinished to screen
let finalScore = 50 + numRight * 5;

document.getElementById("numRight").innerHTML("Number Right: " + numRight);
document.getElementById("numWrong").innerHTML("Number Wrong: " + numWrong);
document.getElementById("finalScore").innerHTML("Final Score: " + finalScore);

console.log(numRight)
console.log(numWrong)
console.log(finalScore);

    };   

    $("#ubmit").on("click", checkAnswers());
    $("#submit").on("click"), addFinalNum ();

  


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
      