import { NodeIO } from '@gltf-transform/core';
import fs from 'fs';

async function extract() {
  const io = new NodeIO();
  const document = await io.read('./public/assets/card.glb');
  
  const textures = document.getRoot().listTextures();
  for (let i = 0; i < textures.length; i++) {
    const tex = textures[i];
    const image = tex.getImage();
    const mimeType = tex.getMimeType();
    const ext = mimeType === 'image/jpeg' ? 'jpg' : 'png';
    fs.writeFileSync(`./public/assets/extracted_texture_${i}.${ext}`, image);
    console.log(`Extracted texture ${i} to extracted_texture_${i}.${ext}`);
  }
}

extract().catch(console.error);
