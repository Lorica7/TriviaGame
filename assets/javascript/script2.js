window.onload = function() {
    $("#hide").click(function(){
        $("#AllTestContent").hide();
  });

$("#startButton").on("click", function() {
      if (!clockRunning) {
          intervalId = setInterval(stopwatch.count, 1000);
          clockRunning = true;
        }
       // $(#AllTestContent).classList.add("showTest");
        $("#show").click(function(){
            $("#AllTestContent").show();
      },
      stop: function() {
    
        // DONE: Use clearInterval to stop the count here and set the clock to not be running.
        clearInterval(intervalId);
        clockRunning = false;

~~~~~~~~~~~~~~~

        $(selector).hide(speed,callback);

        $(selector).show(speed,callback); 

       
         