## interval
* `interval()`
* `interval({ [generations][, prng][, seed] })`

Generates numbers `[0, 1)` from `0` to `1` that may include `0` but not `1`.

### Examples
#### Default options
```ecmascript 6
interval()
// => { '0': 0.6802390773574 }
```

```ecmascript 6
interval()[0]
// => 0.6802390773574
```

#### Optional parameters
```ecmascript 6
interval({
  generations, // [0]
  prng, // prng: 'arc4'
  seed // seed: 'can be a sentence'
})
// => { '0': 0.71265450034 }
```

#### Multiple generations
```ecmascript 6
interval({
  prng, // prng: 'arc4'
  seed, // seed: 'can be a sentence'
  generations: [0, 1, 3]
})
// => ({
//   '0': 0.71265450034
//   '1': 0.25783245436
//   '3': 0.34626348620
// })
```

### Input
* generations
* prng
* seed

#### generations
| | |
| --- | --- |
| **Property** | `generations` |
| **Type** | `Array` of `Number` |
| **Default value** | `[0]` |

Providing a set of numbers to `generations` will produce `{ [gen]: [val], ... }` output, where generated values are indexed by generation number keys.

Smaller integers require less time to compute.

#### prng
| | |
| --- | --- |
| **Property** | `prng` |
| **Type** | `String` |
| **Default value** | `arc4` |

Providing a **P**seudo**r**andom **N**umber **G**enerator (**PRNG**) name as input changes the algorithm chosen from `seedrandom`.

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

Generates values indexed by the subset of input `generations`, where each value is determined by the previous generation's value.

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

Creates a number `[0, 1)` from `0` to `1` that may include `0` but not `1`.
