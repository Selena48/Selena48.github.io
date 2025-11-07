#!/usr/bin/env node

/**
 * Script pour convertir des fichiers SVG en PNG
 *
 * Usage: node svg-to-png.js [dossier-svg] [largeur]
 *
 * Si aucun dossier n'est spécifié, le script traite le dossier "svg" adjacent
 * Largeur par défaut : 200px (hauteur calculée automatiquement pour garder le ratio)
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const scriptDir = __dirname;
const targetDir = process.argv[2] || path.join(scriptDir, 'svg');
const outputDir = path.join(scriptDir, 'png-output');
const targetWidth = parseInt(process.argv[3]) || 200;

/**
 * Vérifie si un fichier est un SVG
 */
function isSvgFile(filename) {
  return path.extname(filename).toLowerCase() === '.svg';
}

/**
 * Convertit un fichier SVG en PNG
 */
async function convertSvgToPng(inputPath, outputPath, width) {
  try {
    const filename = path.basename(inputPath, '.svg');
    console.log(`🎨 Conversion: ${filename}.svg → ${filename}.png (largeur: ${width}px)`);

    // Lire le fichier SVG
    const svgBuffer = fs.readFileSync(inputPath);

    // Convertir SVG en PNG avec sharp
    const image = sharp(svgBuffer);
    const metadata = await image.metadata();

    // Calculer la hauteur proportionnelle
    const aspectRatio = metadata.height / metadata.width;
    const height = Math.round(width * aspectRatio);

    await image
      .resize(width, height, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 } // Fond transparent
      })
      .png({
        compressionLevel: 9, // Compression maximale
        quality: 100
      })
      .toFile(outputPath);

    console.log(`✅ Créé: ${filename}.png (${width}x${height}px)`);
    return true;
  } catch (error) {
    console.error(`❌ Erreur sur ${path.basename(inputPath)}:`, error.message);
    return false;
  }
}

/**
 * Traite récursivement tous les SVG d'un dossier
 */
async function processDirectory(inputDir, outputDir, width) {
  // Créer le dossier de sortie s'il n'existe pas
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(inputDir);
  let processed = 0;
  let errors = 0;

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const stat = fs.statSync(inputPath);

    if (stat.isDirectory()) {
      // Traiter récursivement les sous-dossiers
      const subOutputDir = path.join(outputDir, file);
      const result = await processDirectory(inputPath, subOutputDir, width);
      processed += result.processed;
      errors += result.errors;
    } else if (isSvgFile(file)) {
      const outputFilename = path.basename(file, '.svg') + '.png';
      const outputPath = path.join(outputDir, outputFilename);

      const success = await convertSvgToPng(inputPath, outputPath, width);
      if (success) {
        processed++;
      } else {
        errors++;
      }
    }
  }

  return { processed, errors };
}

/**
 * Point d'entrée principal
 */
async function main() {
  console.log('🎨 Conversion SVG → PNG\n');
  console.log(`📂 Dossier source: ${targetDir}`);
  console.log(`📂 Dossier destination: ${outputDir}`);
  console.log(`📏 Largeur cible: ${targetWidth}px (hauteur proportionnelle)\n`);

  // Vérifier que le dossier source existe
  if (!fs.existsSync(targetDir)) {
    console.error(`❌ Le dossier "${targetDir}" n'existe pas!`);
    console.log(`💡 Créez un dossier "svg" à côté du script ou spécifiez un chemin:`);
    console.log(`   node svg-to-png.js /chemin/vers/dossier [largeur]`);
    console.log(`\nExemples:`);
    console.log(`   node svg-to-png.js public/assets 300`);
    console.log(`   node svg-to-png.js ./icons 150`);
    process.exit(1);
  }

  const startTime = Date.now();
  const { processed, errors } = await processDirectory(targetDir, outputDir, targetWidth);
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log(`\n${'='.repeat(60)}`);
  console.log(`✨ Conversion terminée en ${duration}s`);
  console.log(`✅ SVG convertis: ${processed}`);
  if (errors > 0) {
    console.log(`❌ Erreurs: ${errors}`);
  }
  console.log(`📂 PNG sauvegardés dans: ${outputDir}`);
}

// Exécuter le script
main().catch(error => {
  console.error('❌ Erreur fatale:', error);
  process.exit(1);
});
