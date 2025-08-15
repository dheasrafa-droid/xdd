const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let img = new Image();

// Upload
document.getElementById('upload').addEventListener('change', e => {
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(evt) {
    img.src = evt.target.result;
  }
  reader.readAsDataURL(file);
});

img.onload = () => {
  canvas.width = img.width > 600 ? 600 : img.width;
  canvas.height = img.height > 400 ? 400 : img.height;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

// Tabs
const rotateTab = document.getElementById('rotateTab');
const filterTab = document.getElementById('filterTab');
const rotateOptions = document.getElementById('rotateOptions');
const filterOptions = document.getElementById('filterOptions');

rotateTab.addEventListener('click', () => {
  rotateOptions.classList.toggle('hidden');
  filterOptions.classList.add('hidden');
});

filterTab.addEventListener('click', () => {
  filterOptions.classList.toggle('hidden');
  rotateOptions.classList.add('hidden');
});

// Rotate
rotateOptions.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const angle = parseInt(btn.dataset.angle);
    const radians = angle * Math.PI / 180;
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.clearRect(0,0,canvas.width,canvas.height);
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
  const b = brightness.value;
  const c = contrast.value;
  ctx.filter = `brightness(${b}%) contrast(${c}%) ${e && e.target.id==='grayscale'?'grayscale(100%)':''} ${e && e.target.id==='sepia'?'sepia(100%)':''}`;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(img,0,0,canvas.width,canvas.height);
}

// Download
document.getElementById('download').addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'dsrt_image.png';
  link.href = canvas.toDataURL();
  link.click();
});
