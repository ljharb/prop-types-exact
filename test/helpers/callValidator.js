'use strict';

var secret = require('prop-types/lib/ReactPropTypesSecret');

module.exports = function callValidator(
	validator,
	obj,
	propName,
	componentName,
	location,
	propFullName
) {
	return validator(
		obj.props,
		propName || '',
		componentName || '',
		location || '',
		propFullName || '',
		secret
	);
};
