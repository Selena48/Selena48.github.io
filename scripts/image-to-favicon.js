#!/usr/bin/env node

/**
 * Script pour convertir une image en favicon.ico
 *
 * Usage: node image-to-favicon.js <image-source> [output-path]
 *
 * Génère un favicon.ico avec plusieurs tailles : 16x16, 32x32, 48x48
 * Formats source acceptés : PNG, JPG, JPEG, SVG, WebP
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

// Configuration
const FAVICON_SIZES = [16, 32, 48]; // Tailles standards pour favicon.ico
const PWA_SIZES = [72, 96, 128, 144, 152, 192, 384, 512]; // Tailles pour PWA et mobile
const scriptDir = __dirname;

/**
 * Génère plusieurs tailles PNG depuis une image source
 */
async function generatePngSizes(inputPath, tempDir) {
  const pngFiles = [];

  console.log(`📸 Génération des tailles PNG...`);

  for (const size of FAVICON_SIZES) {
    const outputPath = path.join(tempDir, `favicon-${size}.png`);

    await sharp(inputPath)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(outputPath);

    pngFiles.push(outputPath);
    console.log(`  ✅ ${size}x${size}px`);
  }

  return pngFiles;
}

/**
 * Convertit les PNG en favicon.ico en utilisant ImageMagick
 */
async function convertToIco(pngFiles, outputPath) {
  try {
    console.log(`\n🔄 Conversion en favicon.ico avec ImageMagick...`);

    const command = `convert ${pngFiles.join(' ')} "${outputPath}"`;
    await execAsync(command);

    console.log(`✅ Favicon créé avec ImageMagick`);
    return true;
  } catch (error) {
    console.log(`⚠️  ImageMagick non disponible, utilisation de sharp uniquement`);
    return false;
  }
}

/**
 * Génère les icônes PWA pour mobile (192x192, 512x512, etc.)
 */
async function generatePwaIcons(inputPath, outputDir) {
  console.log(`\n📱 Génération des icônes PWA/Mobile...`);

  const iconFiles = [];

  for (const size of PWA_SIZES) {
    const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);

    await sharp(inputPath)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(outputPath);

    iconFiles.push({ size, path: outputPath });
    console.log(`  ✅ ${size}x${size}px`);
  }

  return iconFiles;
}

/**
 * Génère un fichier apple-touch-icon (180x180)
 */
async function generateAppleTouchIcon(inputPath, outputDir) {
  console.log(`\n🍎 Génération de l'icône Apple Touch...`);

  const outputPath = path.join(outputDir, 'apple-touch-icon.png');

  await sharp(inputPath)
    .resize(180, 180, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(outputPath);

  console.log(`  ✅ 180x180px`);
  return outputPath;
}

/**
 * Fallback : crée un favicon simple avec sharp (32x32 uniquement)
 */
async function createSimpleFavicon(inputPath, outputPath) {
  console.log(`\n🔄 Création d'un favicon simple (32x32)...`);

  await sharp(inputPath)
    .resize(32, 32, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toFormat('png')
    .toFile(outputPath.replace('.ico', '.png'));

  console.log(`✅ Favicon PNG créé (renommez en .ico si nécessaire)`);
  console.log(`💡 Pour un vrai .ico multi-tailles, installez ImageMagick:`);
  console.log(`   sudo apt install imagemagick  (Linux)`);
  console.log(`   brew install imagemagick       (macOS)`);
}

/**
 * Nettoie les fichiers temporaires
 */
function cleanup(tempDir) {
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

/**
 * Point d'entrée principal
 */
async function main() {
  console.log('🎨 Conversion Image → Favicon.ico\n');

  // Vérifier les arguments
  const inputPath = process.argv[2];
  if (!inputPath) {
    console.error('❌ Usage: node image-to-favicon.js <image-source> [output-path]');
    console.log('\nExemples:');
    console.log('  node image-to-favicon.js logo.png');
    console.log('  node image-to-favicon.js logo.svg public/favicon.ico');
    console.log('  node image-to-favicon.js public/assets/logo.png public/favicon.ico');
    process.exit(1);
  }

  // Vérifier que le fichier source existe
  if (!fs.existsSync(inputPath)) {
    console.error(`❌ Le fichier "${inputPath}" n'existe pas!`);
    process.exit(1);
  }

  // Déterminer le chemin de sortie
  const defaultOutput = path.join(scriptDir, '..', 'public', 'favicon.ico');
  const outputPath = process.argv[3] || defaultOutput;
  const outputDir = path.dirname(outputPath);

  // Créer le dossier de sortie si nécessaire
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`📂 Source: ${inputPath}`);
  console.log(`📂 Destination: ${outputPath}\n`);

  // Créer un dossier temporaire
  const tempDir = path.join(scriptDir, 'temp-favicon');
  if (fs.existsSync(tempDir)) {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
  fs.mkdirSync(tempDir, { recursive: true });

  try {
    const startTime = Date.now();

    // Générer les PNG aux différentes tailles pour favicon
    const pngFiles = await generatePngSizes(inputPath, tempDir);

    // Essayer de créer un vrai .ico avec ImageMagick
    const icoCreated = await convertToIco(pngFiles, outputPath);

    // Si ImageMagick n'est pas disponible, créer un PNG simple
    if (!icoCreated) {
      await createSimpleFavicon(inputPath, outputPath);
    }

    // Générer les icônes PWA/Mobile dans public/
    const pwaIcons = await generatePwaIcons(inputPath, outputDir);

    // Générer l'icône Apple Touch
    const appleTouchIcon = await generateAppleTouchIcon(inputPath, outputDir);

    // Nettoyer les fichiers temporaires
    cleanup(tempDir);

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);

    console.log(`\n${'='.repeat(60)}`);
    console.log(`✨ Conversion terminée en ${duration}s`);
    console.log(`📂 Favicon sauvegardé: ${outputPath}`);
    console.log(`📂 Icônes PWA/Mobile: ${outputDir}/icon-*.png`);
    console.log(`📂 Apple Touch Icon: ${appleTouchIcon}`);

    if (icoCreated) {
      console.log(`\n💡 Tailles favicon.ico: ${FAVICON_SIZES.join('x, ')}x pixels`);
    }
    console.log(`💡 Tailles PWA: ${PWA_SIZES.join('x, ')}x pixels`);

    console.log(`\n📝 Ajoutez dans votre <head>:`);
    console.log(`   <!-- Favicon standard -->`);
    console.log(`   <link rel="icon" type="image/x-icon" href="/favicon.ico">`);
    console.log(`   `);
    console.log(`   <!-- Apple Touch Icon -->`);
    console.log(`   <link rel="apple-touch-icon" href="/apple-touch-icon.png">`);
    console.log(`   `);
    console.log(`   <!-- Android/Chrome -->`);
    console.log(`   <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png">`);
    console.log(`   <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png">`);

    console.log(`\n📱 Pour PWA, ajoutez dans manifest.json:`);
    console.log(`   "icons": [`);
    pwaIcons.forEach((icon, index) => {
      const comma = index < pwaIcons.length - 1 ? ',' : '';
      console.log(`     { "src": "/icon-${icon.size}x${icon.size}.png", "sizes": "${icon.size}x${icon.size}", "type": "image/png" }${comma}`);
    });
    console.log(`   ]`);

  } catch (error) {
    console.error('❌ Erreur fatale:', error.message);
    cleanup(tempDir);
    process.exit(1);
  }
}

// Exécuter le script
main().catch(error => {
  console.error('❌ Erreur fatale:', error);
  process.exit(1);
});
