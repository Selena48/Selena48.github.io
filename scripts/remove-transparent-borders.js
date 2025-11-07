#!/usr/bin/env node

/**
 * Script pour supprimer les bordures transparentes des images PNG
 *
 * Usage: node remove-transparent-borders.js [dossier-images]
 *
 * Si aucun dossier n'est spécifié, le script traite le dossier "images" adjacent
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const scriptDir = __dirname;
const targetDir = process.argv[2] || path.join(scriptDir, 'images');
const outputDir = path.join(scriptDir, 'images-cropped');

// Extensions d'images supportées
const supportedExtensions = ['.png', '.jpg', '.jpeg', '.webp'];

/**
 * Vérifie si un fichier est une image supportée
 */
function isImageFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  return supportedExtensions.includes(ext);
}

/**
 * Supprime les bordures transparentes d'une image
 */
async function removeTransparentBorders(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`📸 Traitement: ${path.basename(inputPath)} (${metadata.width}x${metadata.height})`);

    // Utiliser trim() pour supprimer automatiquement les bordures transparentes
    await image
      .trim({
        threshold: 10 // Seuil de transparence (0-255), ajustable
      })
      .toFile(outputPath);

    const newMetadata = await sharp(outputPath).metadata();
    const savedWidth = metadata.width - newMetadata.width;
    const savedHeight = metadata.height - newMetadata.height;

    if (savedWidth > 0 || savedHeight > 0) {
      console.log(`✅ Rognée: ${newMetadata.width}x${newMetadata.height} (économie: ${savedWidth}x${savedHeight}px)`);
    } else {
      console.log(`⚪ Aucune bordure transparente détectée`);
    }

    return true;
  } catch (error) {
    console.error(`❌ Erreur sur ${path.basename(inputPath)}:`, error.message);
    return false;
  }
}

/**
 * Traite récursivement tous les fichiers d'un dossier
 */
async function processDirectory(inputDir, outputDir) {
  // Créer le dossier de sortie s'il n'existe pas
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(inputDir);
  let processed = 0;
  let errors = 0;

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    const stat = fs.statSync(inputPath);

    if (stat.isDirectory()) {
      // Traiter récursivement les sous-dossiers
      await processDirectory(inputPath, path.join(outputDir, file));
    } else if (isImageFile(file)) {
      const success = await removeTransparentBorders(inputPath, outputPath);
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
  console.log('🎨 Suppression des bordures transparentes\n');
  console.log(`📂 Dossier source: ${targetDir}`);
  console.log(`📂 Dossier destination: ${outputDir}\n`);

  // Vérifier que le dossier source existe
  if (!fs.existsSync(targetDir)) {
    console.error(`❌ Le dossier "${targetDir}" n'existe pas!`);
    console.log(`💡 Créez un dossier "images" à côté du script ou spécifiez un chemin:`);
    console.log(`   node remove-transparent-borders.js /chemin/vers/dossier`);
    process.exit(1);
  }

  const startTime = Date.now();
  const { processed, errors } = await processDirectory(targetDir, outputDir);
  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log(`\n${'='.repeat(60)}`);
  console.log(`✨ Traitement terminé en ${duration}s`);
  console.log(`✅ Images traitées: ${processed}`);
  if (errors > 0) {
    console.log(`❌ Erreurs: ${errors}`);
  }
  console.log(`📂 Images sauvegardées dans: ${outputDir}`);
}

// Exécuter le script
main().catch(error => {
  console.error('❌ Erreur fatale:', error);
  process.exit(1);
});
