const canvas = document.createElement('canvas');
canvas.id = 'bg-canvas';
document.body.prepend(canvas);
const ctx = canvas.getContext('2d');

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

const particleCount = 120;
const particles = [];

for(let i=0;i<particleCount;i++){
  particles.push({
    x: Math.random()*w,
    y: Math.random()*h,
    z: Math.random()*0.5+0.5,
    r: Math.random()*2+1,
    dx: Math.random()*0.5-0.25,
    dy: Math.random()*1+0.5
  });
}

function draw() {
  ctx.fillStyle = 'rgba(15,32,39,0.5)';
  ctx.fillRect(0,0,w,h);

  for(let p of particles){
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r*p.z, 0, Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${p.z})`;
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    // reset jika out of screen
    if(p.y > h){ p.y = -10; p.x = Math.random()*w; }
    if(p.x > w) { p.x = 0; }
    if(p.x < 0) { p.x = w; }
  }

  requestAnimationFrame(draw);
}

draw();
