
 //function to start and control the countdown
 function countDown() 
     {
        var currTime = 10;
        for (var i = 1; i <= 11; i++) {
            if (i == 11) {
                setTimeout(function () {
                    //code goes here for timer
                    document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
                }, 1000 * i);
            } else if (i > 6) {
                setTimeout(function () {
                  
 //warning to let users know theres half time left
                    document.getElementById("countdownTimer").innerHTML =
                        "Warning Less than ½ way to launch, time left = " + currTime;
                    currTime = currTime - 1;
                }, 1000 * i);
            } else {
                setTimeout(function () {
                  
 //function to show current time to user
                  
                    document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime;
                    currTime = currTime - 1;
                }, 1000 * i);
            }
        }
    }




