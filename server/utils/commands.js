const { exec } = require('child_process');

const mkdir = (dir) => exec(`mkdir ${dir}`, (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }
});

module.exports = {mkdir}
