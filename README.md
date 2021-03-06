# implausible
[![npm current version][shields npm]][npm implausible]
[![license][shields license]][implausible license]
[![npm dependencies][shields dependencies]][implausible package]
[![npm dev dependencies][shields dev dependencies]][implausible package]
[![node version compatibility][shields node]][implausible package]
[![snyk advisor][snyk implausible badge]][snyk implausible]
[![npm bundle size (minified)][shields min]][bundlephobia implausible]
[![npm bundle size (minified + gzip)][shields minzip]][bundlephobia implausible]
[![gha codeql][gha codeql badge]][gha codeql]
[![gha ci][gha ci badge]][gha ci]
[![gha snyk][gha snyk badge]][gha snyk]
---
**implausible** is a collection of [pseudorandom number generators (PRNGs)][wikipedia prng] and utilities powered by [seedrandom][npm seedrandom].

## Quick start
### RunKit
RunKit provides one of the most direct ways to get started:
* [test with RunKit][runkit implausible]

### CodePen
Declare imports and global binding in the `JS` section to get started:
```es6
import { prng } from 'https://unpkg.com/implausible@latest?module';
window.prng = prng;
```

Run commands in the `Console` section:
```es6
prng();
// example output: 0.3722007770466942
```
* [test with CodePen][codepen new]

### Browsers
Insert the following element within the `<head>` tag of an HTML document:
```html
<script src="https://unpkg.com/implausible@latest"></script>
```

After the script is loaded, the `implausible` browser global is exposed:
```es6
implausible.prng();
// example output: 0.6736552471595748
```

## Node.js
With [`npm` installed][npm install], run terminal command:
```shell
npm i implausible
```
* [npm package][npm implausible]

Once installed, declare method imports at the top of each JavaScript file they will be used.

### ES2015
__Recommended__
```es6
import {
  prng,
  sample,
  samples,
} from 'implausible';
```

### CommonJS
```javascript
const {
  prng,
  sample,
  samples,
} = require('implausible');
```

## Usage
### Generate stochastic number
```es6
prng();
// example output: 0.4471833625387327

prng();
// example output: 0.18700348375416123
```

#### ...with a specific algorithm
Refer to the list of PRNG names for valid parameter `{ name }` values.

```es6
prng({ name: 'xor4096' });
// example output: 0.7105067998636514
```

### Generate deterministic number
```es6
prng({ seed: 'hello.' });
// output: 0.9282578795792454

prng({ seed: 'hello.' });
// output: 0.9282578795792454
```

#### ...with a specific algorithm
Refer to the list of PRNG names for valid parameter `{ name }` values.
```es6
prng({
  name: 'xor4096',
  seed: 'hello.',
});
// output: 0.9798525865189731
```

### Stochastic uniform sample
```es6
sample({
  collection: [
    'heads',
    'tails',
  ],
});
// example output: 'tails'
```

#### ...with a specific algorithm
Refer to the list of PRNG names for valid parameter `{ name }` values.

```es6
sample({
  collection: [
    'heads',
    'tails',
  ],
  name: 'alea',
});
// example output: 'heads'
```

### Stochastic weighted sample
```es6
sample({
  collection: {
    'A-': 6.3,
    'A+': 35.7,
    'AB-': 0.6,
    'AB+': 3.4,
    'B-': 1.5,
    'B+': 8.5,
    'O-': 6.6,
    'O+': 37.4,
  },
});
// example output: 'A+'
```

#### ...with a specific algorithm
Refer to the list of PRNG names for valid parameter `{ name }` values.

```es6
sample({
  collection: {
    'A-': 6.3,
    'A+': 35.7,
    'AB-': 0.6,
    'AB+': 3.4,
    'B-': 1.5,
    'B+': 8.5,
    'O-': 6.6,
    'O+': 37.4,
  },
  name: 'alea',
});
// example output: 'O+'
```

### Deterministic uniform sample
```es6
sample({
  collection: [
    'heads',
    'tails',
  ],
  seed: 'hello.',
});
// output: 'tails'
```

#### ...with a specific algorithm
Refer to the list of PRNG names for valid parameter `{ name }` values.

```es6
sample({
  collection: [
    'heads',
    'tails',
  ],
  name: 'tychei',
  seed: 'hello.',
});
// output: 'heads'
```

### Deterministic weighted sample
```es6
sample({
  collection: {
    'A-': 6.3,
    'A+': 35.7,
    'AB-': 0.6,
    'AB+': 3.4,
    'B-': 1.5,
    'B+': 8.5,
    'O-': 6.6,
    'O+': 37.4,
  },
  seed: 'hello.',
});
// output: 'A-'
```

#### ...with a specific algorithm
Refer to the list of PRNG names for valid parameter `{ name }` values.

```es6
sample({
  collection: {
    'A-': 6.3,
    'A+': 35.7,
    'AB-': 0.6,
    'AB+': 3.4,
    'B-': 1.5,
    'B+': 8.5,
    'O-': 6.6,
    'O+': 37.4,
  },
  name: 'tychei',
  seed: 'hello.',
});
// output: 'A+'
```

## API
### List of PRNG names
The following names of pseudorandom number generators (PRNGs) are valid `String` inputs for the optional `{ name }` parameter:
* `alea`
* `arc4` (default)
* `tychei`
* `xor128`
* `xor4096`
* `xorshift7`
* `xorwow`

All undefined `seed` are automatically generated by `arc4` before being piped to other generators in stochastic mode.
Visit [seedrandom documentation][npm seedrandom] for comparative statistics on period and performance.

### `prng() || prng({ [name][, seed] })`
#### Input
All parameters are optional properties of an optional `Object`.

| parameter | input type(s) | default | description |
| --------- | ------------- | ------- | ----------- |
| `name` | `String` | `arc4` | Refer to the list of PRNG names for values. |
| `seed` | `Number`, `String` | `undefined`  (stochastic) | Deterministic when provided, or stochastic when undefined. |

#### Output
Generates a `Number` within range: `[0, 1)` (including `0` and excluding `1`).

### `sample({ collection[, name][, seed] })`
*See also:* `samples`

#### Input
All parameters are properties of an `Object`.

| parameter | input type(s) | default | description |
| --------- | ------------- | ------- | ----------- |
| `collection` (required) | `Array` or `Object` of `{String:Number}` pairs | | `Array`: collection of outcomes with uniform (equally likely) probability distribution (i.e.: coin, dice). `Object`: histogram where the relative probability of sampling a __key__ is determined by its `Number` __value__. |
| `name` | `String` | `arc4` | Refer to the list of PRNG names for values. |
| `seed` | `Number`, `String` | `undefined`  (stochastic) | Deterministic when provided, or stochastic when undefined. |

#### Output
Generates a `String` weighted random sample from a `collection` member or key.

### `samples({ collection[, count][, name][, seed] })`
*See also:* `sample`

#### Input
All parameters are properties of an `Object`.

| parameter | input type(s) | default | description |
| --------- | ------------- | ------- | ----------- |
| `collection` (required) | `Array` or `Object` of `{String:Number}` pairs | | `Array`: collection of outcomes with uniform (equally likely) probability distribution (i.e.: coin, dice). `Object`: histogram where the relative probability of sampling a __key__ is determined by its `Number` __value__. |
| `count` | `Number` | `1` | Sample size that determines output `Array` length. |
| `name` | `String` | `arc4` | Refer to the list of PRNG names for values. |
| `seed` | `Number`, `String` | `undefined`  (stochastic) | Deterministic when provided, or stochastic when undefined. |

#### Output
Generates an `Array` of weighted random sample `String` from a `collection` member or key, similar to calling `sample` multiple times.

## Credits
Thanks to David Bau and additional authors for distributing parent package [seedrandom][npm seedrandom] under the MIT license.

[bundlephobia implausible]: https://bundlephobia.com/result?p=implausible
    (bundlephobia: implausible)
[codepen new]: https://codepen.io/pen
    (CodePen: Create a New Pen)
[gha ci]: https://github.com/Stassi/implausible/actions/workflows/ci.yml
    (GitHub Actions: CI for implausible)
[gha ci badge]: https://github.com/Stassi/implausible/actions/workflows/ci.yml/badge.svg
[gha codeql]: https://github.com/Stassi/implausible/actions/workflows/codeql.yml
    (GitHub Actions: CodeQL for implausible)
[gha codeql badge]: https://github.com/Stassi/implausible/actions/workflows/codeql.yml/badge.svg
[gha snyk]: https://github.com/Stassi/implausible/actions/workflows/snyk.yml
    (GitHub Actions: Snyk for implausible)
[gha snyk badge]: https://github.com/Stassi/implausible/actions/workflows/snyk.yml/badge.svg
[implausible license]: LICENSE
    (implausible license)
[implausible package]: package.json
    (implausible package.json)
[npm implausible]: https://www.npmjs.com/package/implausible
    (npm: implausible)
[npm install]: https://www.npmjs.com/get-npm
    (npm: install npm with Node.js)
[npm seedrandom]: https://www.npmjs.com/package/seedrandom
    (npm: seedrandom)
[runkit implausible]: https://runkit.com/npm/implausible
    (RunKit+npm: test implausible)
[shields dependencies]: https://img.shields.io/david/Stassi/implausible.svg
[shields dev dependencies]: https://img.shields.io/david/dev/Stassi/implausible.svg
[shields license]: https://img.shields.io/npm/l/implausible.svg
[shields min]: https://img.shields.io/bundlephobia/min/implausible.svg
[shields minzip]: https://img.shields.io/bundlephobia/minzip/implausible.svg
[shields node]: https://img.shields.io/node/v/implausible.svg
[shields npm]: https://img.shields.io/npm/v/implausible.svg
[snyk implausible]: https://snyk.io/advisor/npm-package/implausible
[snyk implausible badge]: https://snyk.io/advisor/npm-package/implausible/badge.svg
    (Snyk Advisor: implausible)
[wikipedia prng]: https://en.wikipedia.org/wiki/Pseudorandom_number_generator
    (wikipedia: Pseudorandom number generator)
