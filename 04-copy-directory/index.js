const fsp = require('fs/promises');
const path = require('path');

const pathFolder = path.resolve(__dirname, 'files');
const pathCopyFolder = path.resolve(__dirname, 'files-copy');

async function copyDir() {
  try {
    await fsp.mkdir(pathCopyFolder, { recursive: true });
    const files = await fsp.readdir(pathFolder);
    files.forEach (async(item) => {
      const sourcePath = path.join(pathFolder, item);
      const destPath = path.join(pathCopyFolder, item);
      const stats = await fsp.stat(sourcePath);
        if (stats.isFile()) {
        await fsp.copyFile(sourcePath, destPath);
        }
    })
    } catch (err) {
    console.error(err);
  }
}
copyDir();
