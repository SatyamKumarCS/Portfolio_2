const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function processImage() {
  const tex = await loadImage('./public/assets/extracted_texture_0.png');
  const saty = await loadImage('./public/assets/saty.png');
  
  console.log('Texture size:', tex.width, 'x', tex.height);
  console.log('Saty size:', saty.width, 'x', saty.height);
}
processImage().catch(console.error);
