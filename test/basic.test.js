/* jshint node: true */
/* global suite, test */
'use strict';

var chai = require('chai');
var assert = chai.assert;
var pointInPoly = require('../src/index.js');

/**
 * Basic tests of the API using the different APIs
 */
var simpleRectangle = [
	[ 1, 1 ],
	[ 1, 2 ],
	[ 2, 2 ],
	[ 2, 1 ]
];
var pt1 = [1.5, 1.5];
var pt2 = [4.9, 1.2];
var pt3 = [1.8, 1.1];

suite('Ray casting point in polygon tests', function () {
	test('simple rectangle', function () {
		var pointInPolyRaycast = pointInPoly.pointInPolyRaycast;
		var test1 = pointInPolyRaycast([ 1.5, 1.5 ], simpleRectangle);
		var test2 = pointInPolyRaycast([ 4.9, 1.2 ], simpleRectangle);
		var test3 = pointInPolyRaycast([ 1.8, 1.1 ], simpleRectangle);
		assert.strictEqual(test1, true, 'Point should be inside');
		assert.strictEqual(test2, false, 'Point should be outside');
		assert.strictEqual(test3, true, 'Point should be inside');
	});
});

suite('Winding number point in polygon tests', function () {
	test('simple rectangle', function () {
		var pointInPolyWindingNumber = pointInPoly.pointInPolyWindingNumber;
		var test1 = pointInPolyWindingNumber([ 1.5, 1.5 ], simpleRectangle);
		var test2 = pointInPolyWindingNumber([ 4.9, 1.2 ], simpleRectangle);
		var test3 = pointInPolyWindingNumber([ 1.8, 1.1 ], simpleRectangle);
		assert.strictEqual(test1, true, 'Point should be inside');
		assert.strictEqual(test2, false, 'Point should be outside');
		assert.strictEqual(test3, true, 'Point should be inside');
	});
});

