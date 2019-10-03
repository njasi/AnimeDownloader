const fs = require('fs');
const spawn = require('child_process').spawn;

/**
 *
 * @param {string} file_url   The ure of the file to be downloaded
 * @param {string} file_name  The name of the file that will be saved on the server
 * @param {string} dir        The directory to save the file in
 */
const download_file_curl = function(file_url,file_name,dir) {
  var file = fs.createWriteStream(dir + file_name);
  var curl = spawn('curl', [file_url]);
  curl.stdout.on('data', function(data) { file.write(data); });
  curl.stdout.on('end', function(data) { // done downloading
    file.end();
    return file_name + ' downloaded to ' + dir;
  });
  curl.on('exit', function(code) { // checks for error codes
    if (code != 0) {
      return 'Failed: ' + code;
    }
  });
};

module.exports = download_file_curl;

