'use strict';

var ownKeys = require('own-keys');
var exact = require('./');

var semaphore = ownKeys(exact({}))[0];

module.exports = function sloppy(fullPropTypes) {
	var propTypes = {};

	var keys = ownKeys(fullPropTypes);
	for (var i = 0; i < keys.length; i += 1) {
		var key = keys[i];
		if (key !== semaphore) {
			propTypes[key] = fullPropTypes[key];
		}
	}

	return propTypes;
};
