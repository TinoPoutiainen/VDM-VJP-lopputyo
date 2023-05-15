
// videot ja napit talteen NodeListeihin
const videos = document.querySelectorAll('video');
const buttons = document.querySelectorAll('.pause-play');

// apufunktio videon pausettamiseen ja käynnistämiseen
function pausePlay(video, button) {
    if (video.paused) {
    video.play();
    button.textContent = 'PYSÄYTÄ';
    } else {
    video.pause();
    button.textContent = 'TOISTA';
    }
}

// Lisätään kaikkiin nappeihin eventListener, joka suorittaa apufunktion oikealle videolle
buttons.forEach((button, index) => {
    const video = videos[index];
    button.addEventListener('click', () => {
    pausePlay(video, button);
    });
});