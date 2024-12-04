// Special thanks to:

// https://codepen.io/noeldevelops/pen/VwLWOEM
// https://codepen.io/rauldronca/pen/LgXPgJ

// and ChatGPT for helping me understand the code



const particles = document.getElementById("particles");
const pCTX = particles.getContext("2d");

particles.width = window.innerWidth;
particles.height = window.innerHeight;

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 3 + 1;
        this.color = 'rgba(255, 255, 255, 0.8)';
        this.speed = Math.random() * 2 + 1;
        this.direction = Math.random() * Math.PI * 2;
    }

    update() {
        this.x += Math.cos(this.direction) * this.speed;
        this.y += Math.sin(this.direction) * this.speed;
        
        if (
            this.x > particles.width || this.x < 0 ||
            this.y > particles.height || this.y < 0
        ) {
            this.x = Math.random() * particles.width;
            this.y = Math.random() * particles.height;
        }
    }

    draw() {
        pCTX.beginPath();
        pCTX.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        pCTX.fillStyle = this.color;
        pCTX.fill();
    }
}

const pArray = [];
for (let i = 0; i < 100; i++) {
    pArray.push(
        new Particle(Math.random() * particles.width, Math.random() * particles.height)
    );
}

function pAnim() {
    requestAnimationFrame(pAnim);
    pCTX.clearRect(0, 0, particles.width, particles.height);

    for (let i = 0; i < pArray.length; i++) {
        pArray[i].update();
        pArray[i].draw();
    }
}

pAnim();