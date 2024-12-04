// HUGE THANKS TO THIS WEBSITE:

// https://codepen.io/nfj525/pen/rVBaab

// AND CHATGPT TO UNDERSTAND THE CODE

window.onload = function () {
    var audio = document.getElementById("audio");
    var context = new AudioContext();
    var wSRC = context.createMediaElementSource(audio);
    var wFrequency = context.createAnalyser();

    var waveform = document.getElementById("waveform");
    waveform.width = window.innerWidth;
    waveform.height = window.innerHeight;
    var wCTX = waveform.getContext("2d");

    wSRC.connect(wFrequency);
    wFrequency.connect(context.destination);

    wFrequency.fftSize = 4096;

    var wBuffer = wFrequency.frequencyBinCount;
    var wData = new Uint8Array(wBuffer);

    var WIDTH = waveform.width;
    var HEIGHT = waveform.height;

    var bWidth = (WIDTH / wBuffer) * 2.5;
    var bHeight;
    var x = 0;

    function wRender() {
        requestAnimationFrame(wRender);

        x = 0;
        wCTX.clearRect(0, 0, WIDTH, HEIGHT);

        wFrequency.getByteFrequencyData(wData);

        for (var i = 0; i < wBuffer; i++) {
            bHeight = wData[i] * 0.5;

            var r = bHeight + (25 * (i / wBuffer));
            var g = 250 * (i / wBuffer);
            var b = 50;

            wCTX.fillStyle = "white";
            wCTX.fillRect(x, HEIGHT - bHeight, bWidth, bHeight);

            x += bWidth + 1;
        }
    }

    audio.addEventListener("play", function () {
        context.resume();
        wRender();
    });
};
