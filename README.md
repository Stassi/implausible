# implausible
[![npm dependencies][shields dependencies]][implausible package]
[![npm dev dependencies][shields dev dependencies]][implausible package]
[![license][shields license]][implausible license]
[![npm bundle size (minified)][shields min]][bundlephobia implausible]
[![npm bundle size (minified + gzip)][shields minzip]][bundlephobia implausible]
[![node version compatibility][shields node]][implausible package]
[![npm current version][shields npm]][npm implausible]

## PRNGs
The following pseudorandom number generators (PRNGs) are included by module name:
* alea
* arc4
* tychei
* xor128
* xor4096
* xorshift7
* xorwow

### Seeded (deterministic)
When an optional `seed` parameter is provided (i.e.: `arc4(seed)`), generates a deterministic number between `0` and `1`.

### Unseeded (stochastic)
When `seed` is not provided (i.e.: `arc4()`), generates a stochastic number between `0` and `1`.

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
