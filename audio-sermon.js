// JavaScript for Audio Sermon Page

document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const volumeControl = document.getElementById('volume-control');
    const progressBar = document.getElementById('progress-bar');

    // Initial state: show play button
    playPauseBtn.classList.add('play-btn');

    // Play / Pause Button
    playPauseBtn.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.classList.remove('play-btn');
            playPauseBtn.classList.add('pause-btn');
        } else {
            audioPlayer.pause();
            playPauseBtn.classList.remove('pause-btn');
            playPauseBtn.classList.add('play-btn');
        }
    });

    // Volume Control
    volumeControl.addEventListener('input', function() {
        audioPlayer.volume = volumeControl.value;
    });

    // Update Progress Bar
    audioPlayer.addEventListener('timeupdate', function() {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = progress + '%';
    });

   
    
});



