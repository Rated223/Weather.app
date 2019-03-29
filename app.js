const request = require('request');

const url = 'https://api.darksky.net/forecast/9a092f4f99fcbfa3dc1bf1c24feb3eb6/37.8267,-122.4233';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.dir(data.currently, {depth: null});
});