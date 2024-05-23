# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.2.4](https://github.com/ljharb/prop-types-exact/compare/v1.2.3...v1.2.4) - 2024-05-22

### Commits

- [Fix] un-inline isPlainObject [`03be2c0`](https://github.com/ljharb/prop-types-exact/commit/03be2c03f4ee609a409e6362634dc4a472553363)

## [v1.2.3](https://github.com/ljharb/prop-types-exact/compare/v1.2.2...v1.2.3) - 2024-05-22

### Fixed

- [Fix] restore isPlainObject helper for airbnb-prop-types to use [`#18`](https://github.com/ljharb/prop-types-exact/issues/18)

## [v1.2.2](https://github.com/ljharb/prop-types-exact/compare/v1.2.1...v1.2.2) - 2024-05-22

### Commits

- [Refactor] avoid a build process on the implementation code [`5a182fd`](https://github.com/ljharb/prop-types-exact/commit/5a182fdc26b630fd20a917c35aefa249b20bacfb)
- [Tests] run prebuilt tests [`3a537d3`](https://github.com/ljharb/prop-types-exact/commit/3a537d34487eb1aea90dd08c3dad07aa2e5b8824)
- [eslint] config cleanup [`ce9ff59`](https://github.com/ljharb/prop-types-exact/commit/ce9ff5939d8b1bb7d8a370e4e450b13ac52c0811)
- [Tests] upgrade to babel 7 [`a546939`](https://github.com/ljharb/prop-types-exact/commit/a546939c5f475df6717b832c9ab0e940cadf659b)
- [Tests] always run coverage [`31cc253`](https://github.com/ljharb/prop-types-exact/commit/31cc253d11b9d9c065d9bfa924b886b2a2f8786f)
- [readme] fix badges [`3c108ac`](https://github.com/ljharb/prop-types-exact/commit/3c108ac921b7c253c6f13f4c768a2e31e66aee74)
- [meta] add `sideEffects` flag [`518b803`](https://github.com/ljharb/prop-types-exact/commit/518b80335f4ed2bb8fd07936e9e3b22ec9c93445)
- [Tests] skip `pack` tests [`c6e232d`](https://github.com/ljharb/prop-types-exact/commit/c6e232ddb13303790346b740c87f7913a73c311f)
- [Tests] skip v0.8 [`29e674a`](https://github.com/ljharb/prop-types-exact/commit/29e674a612b0e904ee0e305d112a99d62e067886)
- [Fix] in node &lt; 1, `.` needs to be `./` [`64e3fa4`](https://github.com/ljharb/prop-types-exact/commit/64e3fa49f1bee57b2bb82e266585a7325391a39d)

## [v1.2.1](https://github.com/ljharb/prop-types-exact/compare/v1.2.0...v1.2.1) - 2024-05-22

### Commits

- [eslint] switch to tabs [`123c070`](https://github.com/ljharb/prop-types-exact/commit/123c0703cdb7b7e657bc26e5de681b874c432815)
- [Tests] migrate from travis to github actions [`1ac4d15`](https://github.com/ljharb/prop-types-exact/commit/1ac4d153f4095564c883c264defd06101e7fca1a)
- [Tests] use `enzyme-adapter-react-helper` [`5b8dc0c`](https://github.com/ljharb/prop-types-exact/commit/5b8dc0c6254b2cc7b15dfc5471498877fb06e5df)
- [Dev Deps] update `enzyme-adapter-react-helper`, `eslint`, `eslint-config-airbnb`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, `in-publish`, `prop-types`, `rimraf`, `safe-publish-latest`, `tape` [`befc6c8`](https://github.com/ljharb/prop-types-exact/commit/befc6c8700df37610d958a27bd014a68486ff1d6)
- [meta] add `auto-changelog` [`cf7a309`](https://github.com/ljharb/prop-types-exact/commit/cf7a3093a5d51544289e59ba0b688c5b30d260dc)
- [meta] update URLs [`1c9142d`](https://github.com/ljharb/prop-types-exact/commit/1c9142db8ec26bb05a78df7d45816542094d4a81)
- [meta] use `npmignore` [`52bb049`](https://github.com/ljharb/prop-types-exact/commit/52bb049b9b0ae781670e7965209a9ef658a1c510)
- [Tests] ignore node deprecation warnings [`af8ca11`](https://github.com/ljharb/prop-types-exact/commit/af8ca115f2f3a7e97b355970a131b8e0cfa1ed0a)
- [Tests] add `aud` in `posttest` [`0f8202c`](https://github.com/ljharb/prop-types-exact/commit/0f8202c3c2a0ac05e87356593b43881b382543ea)
- [Refactor] use `hasown` instead of `has` [`b1b43b6`](https://github.com/ljharb/prop-types-exact/commit/b1b43b62e1b1f199a50e8c742230124e28242d64)
- [Dev Deps] update `eslint`, `eslint-plugin-react`, `tape` [`230785f`](https://github.com/ljharb/prop-types-exact/commit/230785fa42c48bde1931b19a6e80eefa65e283dd)
- [Refactor] use assignment instead of `Object.assign` for a single property [`c837a69`](https://github.com/ljharb/prop-types-exact/commit/c837a6979873f490f53a7229f043f2d899369475)
- [Tests] clean up some scripts [`fc77d6f`](https://github.com/ljharb/prop-types-exact/commit/fc77d6f63102e3c274d016f5e2bb68c7a1a6a110)
- [Robustness] use `isarray` [`a50846d`](https://github.com/ljharb/prop-types-exact/commit/a50846d7e2c21f2c7e1df719828ae6718332f624)
- [Deps] update `hasown`, `reflect.ownkeys` [`a97e67d`](https://github.com/ljharb/prop-types-exact/commit/a97e67d36101412ab6455d3e1c557437ddb4437b)
- [Deps] update `has`, `object.assign`, `reflect.ownkeys` [`96e27ef`](https://github.com/ljharb/prop-types-exact/commit/96e27ef4459e3c24f8ff0adf66ee065a7c3d2e3e)
- [meta] move the build step to `prepack` [`f556234`](https://github.com/ljharb/prop-types-exact/commit/f5562342b884ad708a892c291788962a762d81bc)
- [meta] add missing `engines.node` [`daf1508`](https://github.com/ljharb/prop-types-exact/commit/daf150899f2258f02ca1bb33c9ab081ec74fdea5)
- [Robustness] use `es-errors` for TypeError [`0137c8d`](https://github.com/ljharb/prop-types-exact/commit/0137c8db66223aa99a7d9a430fd3de2441271f58)
- [Tests] require 0.12 and 0.10 to pass, thanks to https://github.com/nathanhleung/install-peerdeps/pull/29 [`84bcbd1`](https://github.com/ljharb/prop-types-exact/commit/84bcbd15d3e79e33dda66b46f840f67dd363d548)
- [Dev Deps] add `babel-register` [`eb8bfd8`](https://github.com/ljharb/prop-types-exact/commit/eb8bfd86d9e73a7b44f2459d42cd749ae59e9541)

<!-- auto-changelog-above -->

1.2.0 / 2018-06-14
==================
  * [New] add `sloppy` import, for removing the "exact"ness on a propTypes object
  * [Deps] update `has`
  * [Dev Deps] update `babel-plugin-istanbul`, `babel-plugin-transform-replace-object-assign`, `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `nyc`, `prop-types`
  * [Tests] on `node` `v10`
  * [Tests] switch from mocha to tape, since mocha drops support for older nodes
  * [Tests] on react 16
  * [Tests] fix test scripts

1.1.2 / 2018-01-17
==================
  * [Fix] replace the object semaphore with a global Symbol/string
  * [Deps] update `object.assign`
  * [Dev Deps] update `babel-cli`, `babel-plugin-istanbul`, `babel-preset-airbnb`, `chai`, `eslint`, `eslint-config-airbnb`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-react`, `mocha`, `nyc`, `prop-types`, `rimraf`; downgrade mocha to v3
  * [Tests] on `node` `v9`; use `nvm install-latest-npm`

1.1.1 / 2017-07-06
==================
  * [Fix] no longer use a Symbol; React doesn’t check those (#3)
  * [Tests] fix tests to fail properly (#3)

1.1.0 / 2017-06-05
==================
  * [New] use a Symbol instead of a zero-width space when supported (#2)
  * [Fix] correct the error message when a conflict is found
  * [Dev Deps] update `chai`
  * [Tests] [Refactor] dynamically determine the special property instead of hardcoding the zero width space.
  * [Tests] ignore istanbul output
  * [Tests] nyc include all files

1.0.0 / 2017-06-04
==================
  * Initial release.
