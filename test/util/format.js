var assert = require('assert');
var ubique = require('../../index.js');

suite('util',function () {
console.log('Testing util/format ...');
test('format', function (done) {



assert.deepEqual(ubique.format(5.6677798348349,0) // 6,6);
assert.deepEqual(ubique.format([4.5565667,0.000002323234]) // [ 4.5565, 0 ],[4.5566,0]);
assert.deepEqual(ubique.format([[-1000.47748,0.000002],[0.1483478,10.111100]],2) // [ [ -1000.48, 0 ], [ 0.15, 10.11 ] ],[[-1000.48,0],[0.15,10.11]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->