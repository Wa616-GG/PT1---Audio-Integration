// Can't find in google, so sadly, ChatGPT covered this
// But it taught me so I can understand it

const cover = document.querySelector('.cover');
const reminder = document.querySelector('.start');
const audio = document.getElementById('audio');
let clicked = false;

document.body.addEventListener('click', function () {
    if (clicked) return;
    clicked = true;

    const context = new AudioContext();
    context.resume().then(() => {
        if (audio.paused) {
            audio.play();
        }
    });

    reminder.style.transition = 'opacity 3s ease-in-out';
    reminder.style.opacity = 0;

    setTimeout(function () {
        cover.style.opacity = 0;
    });
});