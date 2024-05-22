import hasOwn from 'hasown';
import TypeError from 'es-errors/type';

import isPlainObject from './helpers/isPlainObject';

const zeroWidthSpace = '\u200b';
const specialProperty = `prop-types-exact: ${zeroWidthSpace}`;
const semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */ specialProperty;

/** @type {<T extends Function>(fn: T) => T} */
function brand(fn) {
	// eslint-disable-next-line no-param-reassign
	fn[specialProperty] = semaphore;
	return fn;
}

function isBranded(value) {
	return value && value[specialProperty] === semaphore;
}

export default function forbidExtraProps(propTypes) {
	if (!isPlainObject(propTypes)) {
		throw new TypeError('given propTypes must be an object');
	}
	if (hasOwn(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
		throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
	}

	return {
		...propTypes,
		// eslint-disable-next-line prefer-arrow-callback
		[specialProperty]: brand(function forbidUnknownProps(props, _, componentName) {
			const unknownProps = Object.keys(props).filter((prop) => !hasOwn(propTypes, prop));
			if (unknownProps.length > 0) {
				return new TypeError(`${componentName}: unknown props found: ${unknownProps.join(', ')}`);
			}
			return null;
		}),
	};
}
