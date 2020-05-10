const axios = require('axios');
const fs = require('fs');
const path = require('path');
const util = require('util');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

const promisifiedWriteFile = util.promisify(fs.writeFile);

const promise = () => {
  return axios
    .get(apiUrl)
    .then((response) => {
      const filePath = path.join(
        __dirname,
        '../../writtenFiles',
        'promiseResult.json'
      );
      return promisifiedWriteFile(filePath, JSON.stringify(response.data));
    })
    .then(() => console.log("I'm done writing the file!"));
};

promise().then(() => console.log('Promise is resolved'));

console.log('end of main program flow');
