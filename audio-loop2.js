document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer2 = document.getElementById('audio-player2');
    const bgVideo2 = document.getElementById('bg-video2');

    // Play the background video when the audio starts playing
    audioPlayer2.addEventListener('play', function() {
        bgVideo2.play();
    });

    // Pause the background video when the audio is paused or ended
    audioPlayer2.addEventListener('pause', function() {
        bgVideo2.pause();
    });

    audioPlayer2.addEventListener('ended', function() {
        bgVideo2.pause();
        bgVideo2.currentTime = 0;
    });

    
});