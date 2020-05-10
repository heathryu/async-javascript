const request = require('request');
const fs = require('fs');
const path = require('path');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

const writeFileCallback = (error) => {
  if (error) {
  }
  console.log("I'm done writing the file now!");
};

const getHandler = (err, response, body) => {
  if (err) {
    console.log(err);
  }
  const filePath = path.join(__dirname, '../../', 'saved-callback.json');

  fs.writeFile(filePath, body, writeFileCallback);
};

request.get(apiUrl, getHandler);

console.log('End of main application');
