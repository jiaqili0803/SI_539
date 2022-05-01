var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate -= video.playbackRate*0.05;
	console.log("New video speed is " + video.playbackRate);
});


document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	console.log("Old video speed is " + video.playbackRate);
	video.playbackRate += video.playbackRate*0.05;
	console.log("New video speed is " + video.playbackRate);
});



document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime = video.currentTime + 15;
	console.log(video.currentTime);
});	



video.addEventListener('ended', function(){
	// Reset the video to 0
	video.currentTime = 0;
	// And play again
	video.play();
	});



    



document.querySelector("#mute").addEventListener("click", function() {
	// if(video.innerHTML == "Mute"){
    //     video.innerHTML = "Unmute";
    // }
	// else{
    //     video.innerHTML = "Mute";
    // }
	video.muted = !video.muted;
	
	
});	


function change() // no ';' here
{
    var video = document.getElementById("#mute");
    if (video.value=="Mute") video.value = "Unmute";
    else video.value = "Mute";
}




	