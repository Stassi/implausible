## interval
* `interval()`
* `interval({ ... })`
  * `count`
  * `generations`
  * `prng`
  * `seed`
  * `toPairs`

Generates pseudorandom numbers `[0, 1)` from `0` to `1` that may include `0` but not `1`.

### Usage
#### Random number generation
Generate a random number.

```javascript
interval()
// => [0.68023907735]

interval({ count: 1 })
// => [0.36872358435]

interval({ toPairs: true })
// => { '0': 0.67230265174 }

interval({
  generations: [0],
  toPairs: true
})
// => { '0': 0.05671275166 }
```

Generate many random numbers.

```javascript
interval({ count: 3 })
// => [
//   0.41048516143,
//   0.99257324234,
//   0.91413123341
// ]

interval({
  generations: [0, 1, 2],
  toPairs: true
})
// => {
//   '0': 0.17435435355,
//   '1': 0.33342673333,
//   '2': 0.08767234999
// }

interval({
  generations: [
    [0, 2],
    [3, 5]
  ],
  toPairs: true
})
// => {
//   '0': 0.46715713562,
//   '1': 0.75716121145,
//   '3': 0.23687272543,
//   '4': 0.22561786414
// }
```

Change the algorithm that generates numbers.

```javascript
interval({
  count: 3,
  prng: 'alea'
})
// => [
//   0.7264253735,
//   0.7838716214,
//   0.9979114151
// ]

interval({
  count: 3,
  prng: 'alea',
  toPairs: true
})
// => {
//   '0': 0.24537892543,
//   '1': 0.82371235163,
//   '5': 0.83464561245
// }
```

#### Deterministic number generation
Remove randomness by providing a `seed`.

```javascript
interval({ seed: 'same result' })
// => [0.112977563254]

interval({
  count: 1,
  seed: 'same result'
})
// => [0.112977563254]

interval({
  seed: 'same result',
  toPairs: true
})
// => { '0': 0.112977563254 }
```

Generate many non-random numbers.

```javascript
interval({
  count: 3,
  seed: 'same result'
})
// => [
//   0.112977563254,
//   0.352345345256,
//   0.775475616234
// ]

interval({
  generations: [0, 1, 5],
  seed: 'same result',
  toPairs: true
})
// => {
//   '0': 0.112977563254,
//   '1': 0.352345345256,
//   '5': 0.267645415148
// }

interval({
  count: 3,
  generations: [
    5,
    15,
    [10, 13]
  ],
  seed: 'same result',
  toPairs: true
})
// => {
//   '0': 0.112977563254,
//   '1': 0.352345345256,
//   '3': 0.775475616234,
//   '5': 0.267645415148,
//   '10': 0.689326703275,
//   '11': 0.126267927934,
//   '12': 0.390469087267,
//   '15': 0.099857690156
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
#### count
| | |
| --- | --- |
| **Property** | `count` |
| **Type** | `Number` |

Providing a number determines the first sequential generations starting at `0` in increments of `1`.

`count: 1` is equivalent to `generations: [0]`.

#### generations
| | |
| --- | --- |
| **Property** | `generations` |
| **Type** | `Array` of (`Number` or `Array`-enclosed `Number` pair `[x, y]`) |

Providing a set of numbers to `generations` produces `{ [gen]: [val], ... }` output, where generated values are indexed by generation number keys.

Providing `[x, y]` pairs of numbers to `generations` produces ranges of generation numbers. These range pairs can be combined with individual numbers as input.

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

#### toPairs
| | |
| --- | --- |
| **Property** | `toPairs` |
| **Type** | `Boolean` |
| **Default value** | `false` |

**TODO: Replace with `labelGenerations`**

When enabled, outputs key-labeled pairs of generations.

When disabled, outputs only the set of values in generation-ascending order.

### Output
| | |
| --- | --- |
| **Type** | `Array` of `Number` |
| **Range** | `[0, 1)` |

#### toPairs: true
| | |
| --- | --- |
| **Type** | `Object` |
| **Properties** | `{ generation: value[, ...] }` |

Output is indexed by the subset of input `generations`, where each value is determined by the previous generation's value.

##### generation
| | |
| --- | --- |
| **Type** | `Number` as `Object` key |
| **Range** | `[0, Infinity)` |

##### value
| | |
| --- | --- |
| **Type** | `Number` as `Object` value |
| **Range** | `[0, 1)` |
