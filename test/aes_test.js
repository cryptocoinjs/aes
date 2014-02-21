var testVectors = require('./aes_vectors').test_vectors;
var AES = require('../lib/aes');
var bitArray = require('../lib/bitArray');

require('terst')

describe('AES official known-answer tests', function() {
  it('they should all pass', function() {
    var kat = testVectors;
  
    for (var i=0; i<kat.length; i++) {
      var tv = kat[i];
      var len = 32 * tv.key.length;
      var aes = new AES(tv.key);
      T (bitArray.equal(aes.encrypt(tv.pt), tv.ct), "encrypt "+len+" #"+i);
      T (bitArray.equal(aes.decrypt(tv.ct), tv.pt), "decrypt "+len+" #"+i);
    }
  })
})

