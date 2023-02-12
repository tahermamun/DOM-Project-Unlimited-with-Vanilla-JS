
function digitalClock() {
    
var date = new Date();

var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var timeFormat = "AM"

if(hours==0){
    hours=12
}else{
    hours = hours-12
    timeFormat="PM"
}



var finalOutput = hours + " : " + minutes + " : " + seconds

var clock = document.getElementById("timer")
var format=document.querySelector("small")
clock.innerText = finalOutput
format.innerText=timeFormat

}




setInterval(digitalClock, 1000)


