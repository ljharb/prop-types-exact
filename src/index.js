import has from 'has';
import hasSymbols from 'has-symbols';

import isPlainObject from './helpers/isPlainObject';

const zeroWidthSpace = '\u200b';
const specialProperty = hasSymbols() ? Symbol('prop-types-exact special prop') : /* istanbul ignore next */ zeroWidthSpace;
const semaphore = {};

function brand(fn) {
  return Object.assign(fn, { [specialProperty]: semaphore });
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

export default function forbidExtraProps(propTypes) {
  if (!isPlainObject(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if (has(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    /* istanbul ignore if */
    if (specialProperty === zeroWidthSpace) {
      throw new TypeError('Against all odds, you created a propType for a prop named after the zero-width space - which, sadly, conflicts with `prop-types-exact`');
    }
    throw new TypeError('Somehow you’ve created a prop with the private symbol we use in `prop-types-exact` - this is not supported.');
  }

  return {
    ...propTypes,
    // eslint-disable-next-line prefer-arrow-callback
    [specialProperty]: brand(function forbidUnknownProps(props, _, componentName) {
      const unknownProps = Object.keys(props).filter(prop => !has(propTypes, prop));
      if (unknownProps.length > 0) {
        return new TypeError(`${componentName}: unknown props found: ${unknownProps.join(', ')}`);
      }
      return null;
    }),
  };
}
