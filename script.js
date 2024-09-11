function playMusic(song) {
    const audio = document.getElementById('audio');
    const audioSource = document.getElementById('audioSource');
    audioSource.src = song;
    audio.load();
    audio.play();
}

