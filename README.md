# implausible
[![npm dependencies][shields dependencies]][implausible package]
[![npm dev dependencies][shields dev dependencies]][implausible package]
[![license][shields license]][implausible license]
[![npm bundle size (minified)][shields min]][bundlephobia implausible]
[![npm bundle size (minified + gzip)][shields minzip]][bundlephobia implausible]
[![node version compatibility][shields node]][implausible package]
[![npm current version][shields npm]][npm implausible]

## Usage
### Import
```javascript
import { prng } from 'implausible';
```

### Generate stochastic number
```javascript
prng();
// output: 0.9282578795792454

prng();
// output: 0.7404357127379626
```

### Generate deterministic number
```javascript
prng({ seed: 'hello.' });
// output: 0.9282578795792454

prng({ seed: 'hello.' });
// output: 0.9282578795792454
```

## API
### `prng({ name, seed })`
#### Input
| parameter | input type(s) | default | description |
| --------- | ---- | ------- | ----------- |
| `name` | `String` | `arc9` | choose valid input from list of PRNG names |
| `seed` | `Number`, `String` | `undefined`  (stochastic) | deterministic when provided, stochastic when undefined |

#### Output
Generates a `Number` equal to or greater than `0` and less than `1`.

#### List of PRNG names
The following names of pseudorandom number generators (PRNGs) are valid inputs for the `{ name }` parameter:
* `alea`
* `arc4` (default)
* `tychei`
* `xor128`
* `xor4096`
* `xorshift7`
* `xorwow`

Visit [seedrandom documentation][npm seedrandom] for more information on these algorithms.

## Credits
Thanks to David Bau and additional authors for distributing parent package [seedrandom][npm seedrandom] under the MIT license.

[bundlephobia implausible]: https://bundlephobia.com/result?p=implausible
    (bundlephobia: implausible)
[npm implausible]: https://www.npmjs.com/package/implausible
    (npm: implausible)
[npm seedrandom]: https://www.npmjs.com/package/seedrandom
    (npm: seedrandom)
[shields dependencies]: https://img.shields.io/david/Stassi/implausible.svg
[shields dev dependencies]: https://img.shields.io/david/dev/Stassi/implausible.svg
[shields license]: https://img.shields.io/npm/l/implausible.svg
[shields min]: https://img.shields.io/bundlephobia/min/implausible.svg
[shields minzip]: https://img.shields.io/bundlephobia/minzip/implausible.svg
[shields node]: https://img.shields.io/node/v/implausible.svg
[shields npm]: https://img.shields.io/npm/v/implausible.svg
[implausible license]: LICENSE
    (implausible license)
[implausible package]: package.json
    (implausible package.json)
