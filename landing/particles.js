const canvas = document.getElementById('landing-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function draw() {
  ctx.fillStyle = 'rgba(15,32,39,0.05)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(draw);
}
draw();
