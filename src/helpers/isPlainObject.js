import isArray from 'isarray';

/** @type {(x: unknown) => x is object} */
export default function isPlainObject(x) {
  return x && typeof x === 'object' && !isArray(x);
}
