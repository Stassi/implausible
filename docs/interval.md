## interval
* `interval()`
* `interval({ [generations][, prng][, seed] })`

Generates pseudorandom numbers `[0, 1)` from `0` to `1` that may include `0` but not `1`.

### Usage
#### Random number generation
Generate a random number.

```javascript
interval()
// => { '0': 0.68023907735 }

interval()
// => { '0': 0.43572663456 }

interval({ generations: [0] })
// => { '0': 0.05671275166 }

interval({ generations: [0] })
// => { '0': 0.16156177243 }
```

Generate many random numbers.

```javascript
interval({ generations: [0, 1, 2] })
// => {
//   '0': 0.8852892152
//   '1': 0.42322313123
//   '2': 0.97275714329
// }

interval({ generations: [0, 1, 2] })
// => {
//   '0': 0.4671571356
//   '1': 0.75716121145
//   '2': 0.23687272543
// }
```

Change the algorithm that generates numbers.

```javascript
interval({
  generations: [0, 1, 5],
  prng: 'alea'
})
// => {
//   '0': 0.24537892543
//   '1': 0.8237123516
//   '5': 0.83464561245
// }

interval({
  generations: [0, 1, 5],
  prng: 'alea'
})
// => {
//   '0': 0.7264253735
//   '1': 0.7838716214
//   '5': 0.99791141516
// }
```

#### Deterministic number generation
Remove randomness by providing a `seed`.

```javascript
interval({ seed: 'same result' })
// => { '0': 0.112977563254 }

interval({ seed: 'same result' })
// => { '0': 0.112977563254 }
```

Generate many non-random numbers.

```javascript
interval({
  generations: [0, 1, 5],
  seed: 'same result'
})
// => {
//   '0': 0.112977563254
//   '1': 0.352345345256
//   '5': 0.267645415148
// }

interval({
  generations: [0, 1, 5],
  seed: 'same result'
})
// => {
//   '0': 0.112977563254
//   '1': 0.352345345256
//   '5': 0.267645415148
// }
```

Change the algorithm that generates non-random numbers.

```javascript
interval({
  generations: [0, 1, 5],
  prng: 'alea',
  seed: 'same result'
})
// => {
//   '0': 0.762595455
//   '1': 0.3765782342
//   '5': 0.5132831485
// }

interval({
  generations: [0, 1, 5],
  prng: 'alea',
  seed: 'same result'
})
// => {
//   '0': 0.762595455
//   '1': 0.3765782342
//   '5': 0.5132831485
// }
```

### Input
#### generations
| | |
| --- | --- |
| **Property** | `generations` |
| **Type** | `Array` of `Number` |
| **Default value** | `[0]` |

Providing a set of numbers to `generations` will produce `{ [gen]: [val], ... }` output, where generated values are indexed by generation number keys.

Smaller values require less time to compute.

#### prng
| | |
| --- | --- |
| **Property** | `prng` |
| **Type** | `String` |
| **Default value** | `arc4` |

Providing a **P**seudo**r**andom **N**umber **G**enerator (**PRNG**) name as input changes the algorithm chosen from `seedrandom`.

##### Algorithm names
* `alea`
* `arc4` (default)
* `tychei`
* `xor128`
* `xor4096`
* `xorshift7`
* `xorwow`

#### seed
| | |
| --- | --- |
| **Property** | `seed` |
| **Type** | `Number` or `String` |
| **Default value** | `undefined` |

Providing a `seed` input generates deterministic, predictable output.

Not providing a `seed` input generates stochastic or unpredictable, statistically random output.

### Output
| | |
| --- | --- |
| **Type** | `Object` |
| **Properties** | `{ generation: value[, ...] }` |

Output is indexed by the subset of input `generations`, where each value is determined by the previous generation's value.

#### generation
| | |
| --- | --- |
| **Type** | `Number` as `Object` key |
| **Range** | `[0, Infinity)` |

#### value
| | |
| --- | --- |
| **Type** | `Number` as `Object` value |
| **Range** | `[0, 1)` |