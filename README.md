# implausible
[![npm dependencies][shields dependencies]][implausible package]
[![npm dev dependencies][shields dev dependencies]][implausible package]
[![license][shields license]][implausible license]
[![npm bundle size (minified)][shields min]][bundlephobia implausible]
[![npm bundle size (minified + gzip)][shields minzip]][bundlephobia implausible]
[![node version compatibility][shields node]][implausible package]
[![npm current version][shields npm]][npm implausible]
---
**implausible** is a collection of [pseudorandom number generators (PRNGs)][wikipedia prng] powered by [seedrandom][npm seedrandom].

## Quick start
### RunKit
RunKit provides one of the least difficult ways to get started:
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
import { prng } from 'implausible';
```

### CommonJS
```javascript
const { prng } = require('implausible');
```

## Usage
### Generate stochastic number
```es6
prng();
// example output: 0.4471833625387327

prng();
// example output: 0.18700348375416123
```

### Generate deterministic number
```es6
prng({ seed: 'hello.' });
// output: 0.9282578795792454

prng({ seed: 'hello.' });
// output: 0.9282578795792454
```

### Generate number from a specific algorithm
Refer to the list of PRNG names for valid parameter `{ name }` values.

#### Stochastic
```es6
prng({ name: 'xor4096' });
// example output: 0.7105067998636514
```

#### Deterministic
```es6
prng({
  name: 'xor4096',
  seed: 'hello.',
});
// output: 0.9798525865189731
```

## API
### `prng() || prng({ name, seed })`
#### Input
All parameters are optional properties of an optional `Object`.

| parameter | input type(s) | default | description |
| --------- | ------------- | ------- | ----------- |
| `name` | `String` | `arc4` | Refer to the list of PRNG names for values. |
| `seed` | `Number`, `String` | `undefined`  (stochastic) | Deterministic when provided, or stochastic when undefined. |

#### Output
Generates a `Number` equal to or greater than `0` and less than `1`.

#### List of PRNG names
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

## Credits
Thanks to David Bau and additional authors for distributing parent package [seedrandom][npm seedrandom] under the MIT license.

[bundlephobia implausible]: https://bundlephobia.com/result?p=implausible
    (bundlephobia: implausible)
[codepen new]: https://codepen.io/pen
    (CodePen: Create a New Pen)
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
[wikipedia prng]: https://en.wikipedia.org/wiki/Pseudorandom_number_generator
    (wikipedia: Pseudorandom number generator)
