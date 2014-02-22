aes
===

A JavaScript component for the [Advanced Encryption Standard (AES)](http://en.wikipedia.org/wiki/Advanced_Encryption_Standard). Fully compatible with Node.js and the browser (via Browserify).


Why?
----

AES is currently one of the most popular block ciper encyrption algorithms. It is relevant to the Bitcoin private key encryption scheme [BIP38](https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki).


Usage
-----

(Don't use yet)

### Installation


### Example



References
----------
- https://code.google.com/p/crypto-js/source/browse/tags/3.1.2/src/aes.js
- https://github.com/bitwiseshiftleft/sjcl/blob/master/core/aes.js
- https://github.com/mdp/gibberish-aes
- http://en.wikipedia.org/wiki/Advanced_Encryption_Standard
- http://www.differencebetween.com/difference-between-stream-cipher-and-vs-block-cipher/
- http://en.wikipedia.org/wiki/Cipher_block_chaining
- http://opensource.apple.com/source/OpenSSL/OpenSSL-46/openssl/crypto/aes/aes_core.c


Todo
----

- Refactor to use typed arrays and Node.js Buffers. 
- Implement a [CBC mode](http://en.wikipedia.org/wiki/Cipher_block_chaining#Cipher-block_chaining_.28CBC.29).


Credits
-------

Extracted from the [Stanford JavaScript Crypto Library](https://github.com/bitwiseshiftleft/sjcl).


License
-------

BSD License