## interval
Generates pseudorandom numbers `[0, 1)` from `0` to `1` that may include `0` but not `1`.

##### Signature
* `interval({ ... })`
  * `count`
  * `generations`
  * `labelGenerations`
  * `prng`
  * `seed`

### Usage
#### Random number generation
Generate a random number.

```javascript
interval({ count: 1 })
// => [0.36872358435]
```

---
Generate many random numbers.

```javascript
interval({ count: 3 })
// => [
//   0.41048516143,
//   0.99257324234,
//   0.91413123341
// ]
```

---
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
```

#### Deterministic number generation
Remove randomness by providing a `seed`.

```javascript
interval({
  count: 1,
  seed: 'same result'
})
// => [0.112977563254]
```

---
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
```

---
Generate many specific and ranged generations of non-random numbers.

```javascript
interval({
  generations: [0, 1, 5],
  labelGenerations: true,
  seed: 'same result'
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
    [10, 13],
    15
  ],
  labelGenerations: true,
  seed: 'same result'
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

---
Change the algorithm that generates non-random numbers.

```javascript
interval({
  generations: [0, 1, 5],
  labelGenerations: true,
  prng: 'alea',
  seed: 'same result'
})
// => {
//   '0': 0.7625954551,
//   '1': 0.3765782342,
//   '5': 0.5132831485
// }

interval({
  count: 3,
  generations: [
    5,
    [10, 13],
    15
  ],
  labelGenerations: true,
  prng: 'alea',
  seed: 'same result'
})
// => {
//   '0': 0.7625954551,
//   '1': 0.3765782342,
//   '3': 0.5676847567,
//   '5': 0.5132831485,
//   '10': 0.446786978,
//   '11': 0.467597698,
//   '12': 0.756786888,
//   '15': 0.438875757
// }
```

### Input
#### count
| | |
| --- | --- |
| **Property** | `count` |
| **Type** | `Number` |
| **Default value** | `0` |

Providing a number determines the first sequential generations starting at `0` in increments of `1`.

`count: 1` is equivalent to `generations: [0]`.

#### generations
| | |
| --- | --- |
| **Property** | `generations` |
| **Type** | `Array` of (`Number` or `Array`-enclosed `Number` pair `[x, y]`) |
| **Default value** | `[]` |

Providing a set of numbers to `generations` produces `{ [gen]: [val], ... }` output, where generated values are indexed by generation number keys.

Providing `[x, y]` pairs of numbers to `generations` produces ranges of generation numbers. These range pairs can be combined with individual numbers as input.

Smaller values require less time to compute.

#### labelGenerations
| | |
| --- | --- |
| **Property** | `labelGenerations` |
| **Type** | `Boolean` |
| **Default value** | `false` |

When enabled, outputs values that are labeled by keys representing the generation number.

When disabled, outputs only the set of values in generation-ascending order.


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
| **Type** | `Array` of `Number` |
| **Range** | `[0, 1)` |

#### labelGenerations: true
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
