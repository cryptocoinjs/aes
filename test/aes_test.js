var testVectors = require('./aes_vectors').test_vectors;
var AES = require('../lib/aes');
var util = require('util')

require('terst')

function ARR_EQ (a1, a2, msg) {
  if (a1.length != a2.length)
    throw new Error("a1.length != a2.length.\n\n" + msg);
  //console.dir(a1)
  //console.dir(a2)
  for (var i = 0; i < a1.length; ++i) {
    if (a1[i] !== a2[i]) {
      var errMsg = "a1[%d]: %d !== a2[%d]: %d.\n\n" + msg;
      throw new Error(util.format(i, a1[i], i, a2[i]));
    }
  } 
}

/*function convertEndian(num32) {
  var ret = 0x0;
  return ret = (num32 >>> 24) |
        ((num32 >>> 8) & 0x0000FF00) |
        ((num32 << 8) & 0x00FF0000) |
        ((num32 << 24)) 
}

function convArray(arr) {
  for (var i = 0; i < arr.length; ++i) {
    arr[i] = convertEndian(arr[i])
  }
  return arr
}

var tvs = [];
for (var i = 0; i < testVectors.length; ++i) {
  var obj = testVectors[i]
  //obj.key = new Uint32Array(convArray(obj.key))
  //obj.pt = new Uint32Array(convArray(obj.pt))
  //obj.ct = new Uint32Array(convArray(obj.ct))
}*/

describe('AES official known-answer tests', function() {
  it('they should all pass', function() {
    var kat = testVectors;
  
    for (var i=0; i<kat.length; i++) {
      var tv = kat[i];
      var len = 32 * tv.key.length;
      var aes = new AES(tv.key);
      ARR_EQ(aes.encrypt(tv.pt), tv.ct, "encrypt "+len+" #"+i);
      ARR_EQ(aes.decrypt(tv.ct), tv.pt, "decrypt "+len+" #"+i);
    }
  })
})

