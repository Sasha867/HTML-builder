const fsp = require('node:fs/promises');
const path = require('path');
const filePath = path.resolve(__dirname, 'secret-folder');

(async () => {
  try {
    const filenames = await fsp.readdir(filePath);
    filenames.forEach(async (item) => {
      try {
        const stats = await fsp.stat(path.join(filePath, item));
         if (stats.isFile()) {
          const sizeInKB = stats.size / 1000;
          const ext = path.parse(item).ext.slice(1);
          const fileName = path.parse(item).name;
          console.log(`${fileName} - ${ext} - ${sizeInKB.toFixed(3)}kb`);
        }
      } catch (err) {
        console.error(err);
      }
    });
  } catch (err) {
    console.error(err);
  }
})();