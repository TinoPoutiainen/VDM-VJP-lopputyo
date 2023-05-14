

const videos = document.querySelectorAll('video');
const buttons = document.querySelectorAll('.pause-play');

// Function to toggle play and pause for a specific video
function pausePlay(video, button) {
    if (video.paused) {
    video.play();
    button.textContent = 'PYSÄYTÄ';
    } else {
    video.pause();
    button.textContent = 'TOISTA';
    }
}

// Add event listeners to all buttons
buttons.forEach((button, index) => {
    const video = videos[index];
    button.addEventListener('click', () => {
    pausePlay(video, button);
    });
});