const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function editTexture() {
  const tex = await loadImage('./public/assets/extracted_texture_0.png');
  const saty = await loadImage('./public/assets/saty.png');
  
  const canvas = createCanvas(tex.width, tex.height);
  const ctx = canvas.getContext('2d');
  
  ctx.drawImage(tex, 0, 0);
  
  // Sample top left pixel for background color
  const imgData = ctx.getImageData(0, 0, 10, 10).data;
  const r = imgData[0], g = imgData[1], b = imgData[2];
  console.log(`Background color: rgb(${r}, ${g}, ${b})`);
  
  // We'll fill a large rectangle in the center to cover the old face and text
  // Let's assume the face/text are within x: 200..1300, y: 200..1400
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.fillRect(150, 150, 1200, 1300);
  
  // Draw saty.png. saty.png is 1564 x 2084.
  // We want to scale it down to fit nicely. Maybe height=800, width=600.
  // Let's position it in the center.
  const sWidth = 800;
  const sHeight = sWidth * (saty.height / saty.width); // 800 * 1.33 = 1066
  const sX = (tex.width - sWidth) / 2;
  const sY = 250; // Place it a bit below top
  ctx.drawImage(saty, sX, sY, sWidth, sHeight);
  
  // Draw "Full Stack" pill
  ctx.fillStyle = '#6f6fbe'; // purple pill color
  ctx.roundRect = function(x, y, w, h, r) {
    this.beginPath();
    this.moveTo(x+r, y);
    this.arcTo(x+w, y, x+w, y+h, r);
    this.arcTo(x+w, y+h, x, y+h, r);
    this.arcTo(x, y+h, x, y, r);
    this.arcTo(x, y, x+w, y, r);
    this.closePath();
    return this;
  }
  ctx.roundRect(tex.width/2 - 200, tex.height - 250, 400, 80, 20).fill();
  
  ctx.fillStyle = 'white';
  ctx.font = 'bold 50px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Full Stack', tex.width/2, tex.height - 210);
  
  // Draw "AI/ML Developer"
  ctx.font = 'bold 60px Arial';
  ctx.fillText('AI/ML Developer', tex.width/2, tex.height - 110);
  
  // Save to new file
  const out = fs.createWriteStream('./public/assets/new_texture.png');
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  
  await new Promise(r => out.on('finish', r));
  console.log('Created new_texture.png');
}
editTexture().catch(console.error);
