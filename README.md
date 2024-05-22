# prop-types-exact <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

For use with React PropTypes. Will error on any prop not explicitly specified.

## Usage

```jsx
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

function Foo({ foo, bar }) {
  return <div>{foo}{bar}</div>
}
Foo.propTypes = exact({
  foo: PropTypes.string,
  bar: PropTypes.number,
});

<Foo foo="hi" bar={3} /> // no warnings

<Foo foo="hi" bar={3} baz="extra" /> // propTypes warning!
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/prop-types-exact
[npm-version-svg]: http://versionbadg.es/ljharb/prop-types-exact.svg
[deps-svg]: https://david-dm.org/ljharb/prop-types-exact.svg
[deps-url]: https://david-dm.org/ljharb/prop-types-exact
[dev-deps-svg]: https://david-dm.org/ljharb/prop-types-exact/dev-status.svg
[dev-deps-url]: https://david-dm.org/ljharb/prop-types-exact#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/prop-types-exact.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/prop-types-exact.svg
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/prop-types-exact.svg
[downloads-url]: http://npm-stat.com/charts.html?package=prop-types-exact
[codecov-image]: https://codecov.io/gh/ljharb/prop-types-exact/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/ljharb/prop-types-exact/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ljharb/prop-types-exact
[actions-url]: https://github.com/ljharb/prop-types-exact/actions
