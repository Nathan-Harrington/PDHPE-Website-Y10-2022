/*Reaction Time Code*/
//Gets Starting Time
var start = new Date().getTime();
var averageTimes = [];
//Used in average calculator
var sum = 0;
var average = 1;
//Used in counting shapes clicked
var count = 0;
//Makes Shape Appear
function makeShapeAppear() {
    //Defines Random Position for Shape
    var top  = Math.random() * 400;
    var left = Math.random() * 1000;
    var width = 25 + (Math.random() * 200);
    //Makes Shape Appear
    document.getElementById("shape").style.display = "block";
    //Restarts Timer
    start = new Date().getTime();
    //Spawns Shape at position and changes width
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.width = width + "px";
    //Change shape to circle
    if (Math.random() > 0.5){
        document.getElementById("shape").style.borderRadius = "50%";
    }else{
        document.getElementById("shape").style.borderRadius = "0%";
    }
}

function appearAfterDelay() {
    //After A Random Amount of Time Makes Shape Appear
    if(count < 5){
        setTimeout(makeShapeAppear, Math.random() * 1000);
    }else{
        document.getElementById("endCondition").style.display = "block";
        //Calculates Average
        averageCalculator();
    }
}
function startGame(){
    makeShapeAppear();
    document.getElementById("endCondition").style.display = "none";
    //Resets Variables
    count = 0;
    averageTimes = []
}
//Disappears Shape
function disappearOnClick() {
    //Hides Shape
    document.getElementById("shape").style.display = "none"
    //Gets time after click
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000
    //Adds time to array
    averageTimes.push(timeTaken);
    //Displays time taken to click
    count ++;
    appearAfterDelay();
}
function averageCalculator() {
    for (i of averageTimes) {
        sum += i;
    }
    average = sum / averageTimes.length;
    average = average.toFixed(3);
    document.getElementById("endText").innerHTML = "The game has ended. Your average reaction time is: " + average + " secs\n"; 
    document.getElementById("dismissButton").style.display = "block"
}
function dismissButton() {
    document.getElementById("endCondition").style.display = "none"
    document.getElementById("dismissButton").style.display = "none"
}
