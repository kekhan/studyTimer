
var myVar;// needs to be global for stop button to stop time
var audio = new Audio('demi.mp3');// global because audio pause works


function setstudyTime(){
	var studyTime = document.getElementById('study').value;
	studyTime=Number(studyTime);
	var title = "Study";
	screen(studyTime,title)
	var covertStudyTime= studyTime*60*1000;
	return covertStudyTime;

}


function setBreakTime(){
	var breakTime = document.getElementById('break').value;
	breakTime=Number(breakTime);
	console.log(typeof(breakTime));
	var title="Break";
	screen(breakTime,title);
	var convertedTime= breakTime*60*1000;
	return convertedTime;

}


function screen(time,title){
	var titletoscreen = document.getElementById('title').innerHTML=title;
	if(time ===1){
		var timetoScreen = document.getElementById('showtime').innerHTML=time+" minute";

	}
	else{
		var timetoScreen = document.getElementById('showtime').innerHTML=time+" minutes";
	}
	

}


function studyTimer(){
	//audio.removeAttribute('src');
	//clearInterval(music);
	audio.pause();
	audio.currentTime = 0.0;
	var ms=setstudyTime();
	myVar = setInterval(breakt,ms);
	document.getElementById('showtime').innerHTML="studyTime";
	console.log(ms);
	console.log("back to studying");

}


function breakt(){
	var bms = setBreakTime();
	myVar = setInterval(studyTimer,bms);
	console.log("playing song");
	audio.play();
	//music = setInterval(playsong(),bms);
	document.getElementById('showtime').innerHTML="Take a Break!";
}

function stoptime(){
	clearInterval(myVar);
	audio.pause();
	audio.currentTime = 0.0;
	document.getElementById('showtime').innerHTML="time cleared";
}

