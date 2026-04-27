const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function analyze() {
  const img = await loadImage('./public/assets/extracted_texture_0.png');
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  
  const imgData = ctx.getImageData(0, 0, img.width, img.height).data;
  
  let minX = img.width, minY = img.height, maxX = 0, maxY = 0;
  
  // Find non-dark background pixels
  // Assuming the background is roughly RGB(10, 10, 20) or similar
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      const i = (y * img.width + x) * 4;
      const r = imgData[i];
      const g = imgData[i+1];
      const b = imgData[i+2];
      
      // If it's bright enough, it's part of the image or text
      if (r > 30 || g > 30 || b > 40) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log(`Content bounding box: x=${minX}, y=${minY}, w=${maxX - minX}, h=${maxY - minY}`);
}
analyze().catch(console.error);
