'use strict';

var assign = require('object.assign');
var hasOwn = require('hasown');
var ownKeys = require('reflect.ownkeys');
var TypeError = require('es-errors/type');

var isPlainObject = require('../build/helpers/isPlainObject');

var zeroWidthSpace = '\u200b';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
// eslint-disable-next-line no-restricted-properties
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */ specialProperty;

/** @type {<T extends Function>(fn: T) => T} */
function brand(fn) {
	// eslint-disable-next-line no-param-reassign
	fn[specialProperty] = semaphore;
	return fn;
}

function isBranded(value) {
	return value && value[specialProperty] === semaphore;
}

module.exports = function forbidExtraProps(propTypes) {
	if (!isPlainObject(propTypes)) {
		throw new TypeError('given propTypes must be an object');
	}
	if (hasOwn(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
		throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
	}

	var forbidden = {};
	forbidden[specialProperty] = brand(function forbidUnknownProps(props, _, componentName) {
		var unknownProps = ownKeys(props).filter(function (prop) {
			return !hasOwn(propTypes, prop);
		});
		if (unknownProps.length > 0) {
			return new TypeError(componentName + ': unknown props found: ' + unknownProps.join(', '));
		}
		return null;
	});

	return assign({}, propTypes, forbidden);
};
