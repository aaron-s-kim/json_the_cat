// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      // compare returned description
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      // compare returned description
      assert.equal(expectedDesc, desc.trim());
      done();
    });
  });

  
  // it('return null for an invalid/non-existent breed, via callback', (done) => {
  //   fetchBreedDescription('invalidBreed', (err, desc) => {
  //     assert.equal(err, null);
  //     assert.equal(desc, null);
  //     // const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
  //     // // compare returned description
  //     // assert.equal(expectedDesc, desc.trim());
  //     done();
  //   });
  // });
});

// Questions
// for 2nd scenario, expect 1st arg for callback (err) to be set, and desc to be null.
//  getting null null?
