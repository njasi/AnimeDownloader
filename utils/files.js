
/*#!/usr/bin/env node --no-warnings*/
const remote = require('remote-file-size')
const {access, F_OK} = require('fs')
/**
 * gets the size of the file at the specified url (async)
 * @param {string} url    the file you want to check
 */
const fileSize = (url) => {
  return new Promise((resolve, reject) => {
    remote(url, function(err, o) {
      return o;
    })
  })
}

/**
 * check if a file exists at a path (async)
 * @param {string} path
 */
function checkFileExists(path){
  return new Promise((resolve, reject) => {
    access(path, F_OK, error => {
      resolve(!error);
    });
  });
}

module.exports = {checkFileExists,fileSize};
