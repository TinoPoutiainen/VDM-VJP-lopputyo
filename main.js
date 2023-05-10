let video = document.getElementsByClassName("video");
let button = document.getElementsByClassName("pause-play");

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