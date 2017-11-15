var myVar;
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
	var ms=setstudyTime();
	myVar = setInterval(breakt,ms);
	document.getElementById('showtime').innerHTML="studyTime "+myVar;
	console.log(ms);

}

function breakt(){
	var bms = setBreakTime();
	myVar = setInterval(studyTimer,bms);
	document.getElementById('showtime').innerHTML="Take a Break!";
	var audio = new Audio('audio_file.mp3');
	audio.play();
}
function stoptime(){
	clearInterval(myVar);
	document.getElementById('showtime').innerHTML="time cleared";


}