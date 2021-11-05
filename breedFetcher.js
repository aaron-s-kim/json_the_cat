// breedFetcher.js
const request = require('request');
let URL = 'https://api.thecatapi.com/v1/breeds/search';

const fetchBreedDescription = function(breedName, callback) {
  if (breedName) URL = URL + `?q=${breedName}`;

  request(URL, (error, response, body) => {
    const data = JSON.parse(body);
    let desc;
    if (data.length !== 0) {
      desc = data[0]['description'];
    } else {
      desc = null;
    }
    return callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };