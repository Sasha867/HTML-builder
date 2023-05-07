const path = require('path');
const fs = require('fs');
const filePath = path.resolve(__dirname, 'text.txt');
const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });
const { stdout } = process;
readStream.on('data', (chunk) => stdout.write(chunk));
