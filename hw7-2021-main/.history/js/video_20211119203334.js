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
	video.muted = !video.muted;
	if(video.innerText === "Mute"){
        video.innerText = "Unmute";
    }else{
        video.innerText = "Mute";
    }
	
});	

// document.querySelector("#mute").addEventListener("click", function() {
// 	console.log("Mute");
// 	video.muted = false;	
// });	


	