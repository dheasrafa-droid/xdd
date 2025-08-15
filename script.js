const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let img = new Image();
let originalImgData = null;
let brushActive = false;
let brushSize = 5;
let brushColor = '#ff0000';
let bgTransparent = false;

// Upload
document.getElementById('upload').addEventListener('change', e => {
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) { img.src = evt.target.result; }
  reader.readAsDataURL(file);
});

img.onload = () => drawResponsiveImage();

// Responsif
function drawResponsiveImage(){
  const containerWidth = canvas.parentElement.offsetWidth;
  const ratio = img.height / img.width;
  canvas.width = containerWidth;
  canvas.height = containerWidth * ratio;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  originalImgData = ctx.getImageData(0,0,canvas.width,canvas.height);
}

// Tabs
const tabs = {
  rotateTab: 'rotateOptions',
  filterTab: 'filterOptions',
  brushTab: 'brushOptions',
  textTab: 'textOptions',
  stickerTab: 'stickerOptions',
  bgTab: 'bgOptions'
};

Object.keys(tabs).forEach(tabId => {
  document.getElementById(tabId).addEventListener('click', () => {
    Object.values(tabs).forEach(id => document.getElementById(id).classList.add('hidden'));
    document.getElementById(tabs[tabId]).classList.remove('hidden');
  });
});

// Rotate
document.querySelectorAll('#rotateOptions button').forEach(btn => {
  btn.addEventListener('click', () => {
    const angle = parseInt(btn.dataset.angle);
    const radians = angle * Math.PI / 180;
    drawResponsiveImage();
    ctx.save();
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.rotate(radians);
    ctx.drawImage(img, -canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
    ctx.restore();
  });
});

// Filter
const brightness = document.getElementById('brightness');
const contrast = document.getElementById('contrast');
document.getElementById('grayscale').addEventListener('click', applyFilters);
document.getElementById('sepia').addEventListener('click', applyFilters);
[brightness, contrast].forEach(input => input.addEventListener('input', applyFilters));

function applyFilters(e){
  drawResponsiveImage();
  const b = brightness.value;
  const c = contrast.value;
  ctx.filter = `brightness(${b}%) contrast(${c}%) ${e && e.target.id==='grayscale'?'grayscale(100%)':''} ${e && e.target.id==='sepia'?'sepia(100%)':''}`;
  ctx.drawImage(img,0,0,canvas.width,canvas.height);
}

// Brush
const brushInputSize = document.getElementById('brushSize');
const brushInputColor = document.getElementById('brushColor');
document.getElementById('brushClear').addEventListener('click', drawResponsiveImage);

brushInputSize.addEventListener('input', e => brushSize = e.target.value);
brushInputColor.addEventListener('input', e => brushColor = e.target.value);

canvas.addEventListener('mousedown', e => { brushActive = true; drawBrush(e); });
canvas.addEventListener('mousemove', drawBrush);
canvas.addEventListener('mouseup', () => brushActive=false);
canvas.addEventListener('mouseleave', () => brushActive=false);

function drawBrush(e){
  if(!brushActive) return;
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  ctx.fillStyle = brushColor;
  ctx.beginPath();
  ctx.arc(x, y, brushSize, 0, Math.PI*2);
  ctx.fill();
}

// Text
document.getElementById('addText').addEventListener('click', () => {
  const txt = document.getElementById('textInput').value;
  const color = document.getElementById('textColor').value;
  const size = document.getElementById('textSize').value;
  ctx.fillStyle = color;
  ctx.font = `${size}px Arial`;
  ctx.fillText(txt, 50, 50); // bisa ditingkatkan drag nanti
});

// Sticker
document.querySelectorAll('.sticker').forEach(st => {
  st.addEventListener('click', () => {
    const sImg = new Image();
    sImg.src = st.src;
    sImg.onload = () => {
      ctx.drawImage(sImg, 50, 50, 50, 50);
    }
  });
});

// Background removal dummy
document.getElementById('removeBG').addEventListener('click', () => {
  bgTransparent = !bgTransparent;
  canvas.style.background = bgTransparent ? 'transparent' : '#fff';
});

// Download
document.getElementById('download').addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'dsrt_image.png';
  link.href = canvas.toDataURL();
  link.click();
});
