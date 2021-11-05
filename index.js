// index.js
const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2]; // only takes 1st arg

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(desc);
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

// All user-facing (terminal output) logic should be in index.js
// fetchBreedDescription should only return descr (or error) via provided callback.