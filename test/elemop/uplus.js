var assert = require('assert');
var ubique = require('../../index.js');

suite('elemop',function () {
console.log('Testing elemop/uplus ...');
test('uplus', function (done) {



assert.deepEqual(ubique.uplus(-5),-5);
assert.deepEqual(ubique.uplus([5,6]),[5,6]);
assert.deepEqual(ubique.uplus([[5,6],[-1,-3]]),[[5,6],[-1,-3]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->