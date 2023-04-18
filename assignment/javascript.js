const rotated = document.getElementById('carPhoto');
let rotation = 0; 
const angle = 90;
function rotateImage() {
    rotation = (rotation + angle) % 360;
    rotated.style.transform = `rotate(${rotation}deg)`;
  }