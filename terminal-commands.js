const fs = require('fs');

module.exports.ls = () => {
   fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
    return `${acc} ${file} `;
  }, '');

console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile('message.txt', 'Success!', (err) => {
    if (err) throw err;
    console.log('file created')
  });
};

module.exports.mkdir = () => {
  fs.mkdir('./terminal-commands', (err, dir) => {
        if (err.code != 'EXIST') throw err;
        console.log(`directory created`)
    });
};
