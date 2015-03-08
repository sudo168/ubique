var assert = require('assert');
var ubique = require('../../index.js');

suite('quants',function () {
console.log('Testing quants/ulcerindex ...');
test('ulcerindex', function (done) {

var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
var xx = ubique.cumprod(ubique.plus(x,1));
var yy = ubique.cumprod(ubique.plus(y,1));
var zz = ubique.cat(1,xx,yy);

assert.deepEqual(ubique.ulcerindex(xx),0.005263078946776312);
assert.deepEqual(ubique.ulcerindex(zz,'return'),[[0.005263078946776312,0.059503055724952056]]);


done();
});
});


// <--- This file has been auto-generated. PLEASE DO NOT EDIT THIS FILE, changes will be overwritten the next time the script is run --->