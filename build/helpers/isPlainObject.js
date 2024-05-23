'use strict';

var isArray = require('isarray');

// TODO: inline, semver-major

/** @type {(x: unknown) => x is object} */
module.exports = function isPlainObject(x) {
	return x && typeof x === 'object' && !isArray(x);
};
