const process = require('node:process');
const { stdout } = process;
const { stdin } = process;
const path = require('path');
const fs = require('fs');
const filePath = path.resolve(__dirname, 'message.txt');
const readStream = fs.createReadStream(filePath, { encoding: 'utf-8' });
fs.appendFile(filePath, 'Hi, enter your message here \n', (err) => {
  if (err) throw err;
});
readStream.on('data', (data) => {
  stdout.write(data);
  stdin.on('data', (data) => {
    const value = data.toString().trim();
    if (value === 'exit') {
      stdout.write('\nУдачи в изучении Node.js!\n');
      process.exit();
    }
    fs.appendFile(filePath, data, (err) => {
      if (err) throw err;
    });
    
  });
});
process.on('SIGINT', () => {
  stdout.write('\nУдачи в изучении Node.js!\n');
  process.exit();
});
