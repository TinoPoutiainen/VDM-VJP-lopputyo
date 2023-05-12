let video = document.querySelectorAll("video");
let button = document.querySelectorAll("pause-play");

let isPaused = true


function pauseVideo() {
    if (isPaused){
        video.play();
        button.innerHTML = "PYSÄYTÄ";
        isPaused = false;
    }
    else{
        video.pause();
        button.innerHTML = "TOISTA";
        isPaused = true;

    }

}