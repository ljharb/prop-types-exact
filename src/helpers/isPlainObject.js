import isArray from 'isarray';

export default function isPlainObject(x) {
  return x && typeof x === 'object' && !isArray(x);
}
