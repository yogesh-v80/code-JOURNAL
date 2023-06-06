//variables for buttons

const startStopBtn = document.querySelector('#startStopBtn')
const resetBtn = document.querySelector('#resetBtn')
let play = document.querySelector("#play")
let timer = document.querySelector("#timer")


//time variables 

let seconds = 0;
let minutes = 0;
let hours = 0;

// variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;


//variable for setinteval

let timerInterval = null

let watchStatus = "stopped"

//stopWatch funtion

function stopWatch(){
	
	seconds++

	if(seconds / 60 === 1){
		seconds = 0;
		minutes++;

		if(minutes / 60 === 1){
			minutes = 0;
			hours++;
		}
	}

	if(seconds<10){
		leadingSeconds = "0" + seconds.toString();
	} else{
		leadingSeconds = seconds;
	}

	if(minutes<10){
		leadingMinutes = "0" + minutes.toString();
	} else{
		leadingMinutes = minutes;
	}

	if(hours<10){
		leadingHours = "0" + hours.toString();
	} else{
		leadingHours = hours;
	}


//just below code is possible
	timer.innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}


//setInterval() method
//there 1000 is in mili seconds or 1 second
// window.setInterval(stopWatch, 1000);


startStopBtn.addEventListener('click', function(){

	if(watchStatus === "stopped"){

		timerInterval = window.setInterval(stopWatch, 1000)
		// window.setInterval(stopWatch, 1000) it will work but couldn't able to stop the timer
		//we need to save it in timerInterval to stop in else statement

		// play.style.content = "⏸️"
		play.innerText = "Started ▶️"

		watchStatus = "started"

	}
	else{
		window.clearInterval(timerInterval)
		// window.clearInterval(stopWatch, 0)  it won't work
		play.innerText = "Paused ⏸️"
		watchStatus = "stopped"
	}

})


resetBtn.addEventListener('click', function(){

	window.clearInterval(timerInterval)
	seconds = 0;
	minutes = 0;
	hours = 0;

	leadingSeconds = 0;
	leadingHours = 0;
	leadingMinutes = 0;

	timer.innerText = "00:00:00"
	
	
	play.innerText = "Click to Start ▶️"
	

	watchStatus = "stopped"

})
