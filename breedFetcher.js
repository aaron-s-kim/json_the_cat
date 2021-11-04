let breedName = process.argv.slice(2,3)[0]; // takes 1 arg, selects 0th element

const request = require('request');
let URL = 'https://api.thecatapi.com/v1/breeds/search';
// let URL = 'https://api.thecatasdfasdfapi.com/v1/breeds/search';
if (breedName) URL = URL + `?q=${breedName}`;

request(URL, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print error if one occurred
  } else {
    if (response.statusCode !== 200) console.log('statusCode:', response.statusCode); // Print response status code if not 200
    
    const data = JSON.parse(body);
    console.log((data.length !== 0) ? data[0]['description'] : 'Array is empty');
  }
});


// GET /breeds/search