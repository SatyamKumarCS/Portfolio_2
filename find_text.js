import Tesseract from 'tesseract.js';

async function analyze() {
  const result = await Tesseract.recognize(
    './public/assets/extracted_texture_0.png',
    'eng',
    { logger: m => {} }
  );
  
  for (const word of result.data.words) {
    console.log(`Word: ${word.text}, BBox:`, word.bbox);
  }
}
analyze().catch(console.error);
