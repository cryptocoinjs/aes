var testVectors = require('./aes-vectors').test_vectors;
var AES = require('../lib/aes');
var util = require('util');

require('terst');

// Convert array to buffer
function _toArray(buffer) {
  var data = [];
  var len = (buffer.length / 4) | 0;
  for (let count = 0; count < len; count++) {
    data[count] = buffer.readUInt32BE(count * 4);
  }
  return data;
}

// Convert buffer to array
function _toBuffer(array) {
  var len = array.length;
  var data = Buffer.alloc(len * 4);
  for (let count = 0; count < len; count++) {
    data.writeUInt32BE(array[count], count * 4, 4);
  }
  return data;
}



function ARR_EQ(a1, a2, msg) {
  if (a1.length != a2.length)
    throw new Error("a1.length != a2.length.\n\n" + msg);
  for (var i = 0; i < a1.length; ++i) {
    if (a1[i] !== a2[i]) {
      var errMsg = "a1[" + i + "]: " + a1[i] + " !== a2[" + i + "]: " + a2[i] + ".\n\n" + msg;
      throw new Error(errMsg);
    }
  }
}

describe('AES official known-answer tests', function () {
  var kat = testVectors;
  var katBuffer = [];

  it('Convert array to Buffer', function () {
    for (var i = 0; i < kat.length; i++) {
      var tv = kat[i];
      katBuffer.push({ key: _toBuffer(tv.key), pt: _toBuffer(tv.pt), ct: _toBuffer(tv.ct) });
    }
  });

  it('Array of Big Endian Int', function () {
    for (var i = 0; i < kat.length; i++) {
      var tv = kat[i];
      var len = 32 * tv.key.length;
      var aes = new AES(tv.key);
      ARR_EQ(aes.encrypt(tv.pt), tv.ct, "encrypt " + len + " #" + i);
      ARR_EQ(aes.decrypt(tv.ct), tv.pt, "decrypt " + len + " #" + i);
    }
  });


  it('Buffer test', function () {
    for (var i = 0; i < kat.length; i++) {
      var tv = katBuffer[i];
      var len = 32 * tv.key.length;
      var aes = new AES(tv.key);
      if (Buffer.compare(aes.encrypt(tv.pt), tv.ct) != 0
        || Buffer.compare(aes.decrypt(tv.ct), tv.pt) != 0) {
        throw (new Error("Error at " + i + " buffer isn't equal"));
      }
    }
  });

});

