const axios = require('axios');
const fs = require('fs');
const path = require('path');
const util = require('util');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

const promisifiedWriteFile = util.promisify(fs.writeFile);

const asyncAwait = async () => {
  const response = await axios.get(apiUrl);

  const filePath = path.join(
    __dirname,
    '../../writtenFiles',
    'asyncAwaitResult.json'
  );

  await promisifiedWriteFile(filePath, JSON.stringify(response.data));
  console.log("I'm done writing the file!");
};

asyncAwait().then(() => console.log('Promise is resolved'));

console.log('end of the main application flow');
