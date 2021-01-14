var myAudio = document.getElementById("audios");
var isPlaying = false;

function tocar() {
    if (isPlaying) {
        audios.pause()
    }
    else {
        audios.play();
    }
};

audios.onplaying = function () {
    isPlaying = true;
};
audios.onpause = function () {
    isPlaying = false;
};
