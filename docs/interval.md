## interval
* `interval()`
* `interval({ [prng][, seed] })`

Generates a number `[0, 1)` from `0` to `1` that may include `0` but not `1`, and a chainable `evolve()` function that determines new generations.

### Example
```ecmascript 6
// Default options
interval() // => ({
//   evolve(),
//   value: 0.6802390773574
// })

// Optional parameters provided
interval({
  prng, // prng: 'arc4'
  seed // seed: 'can be a sentence'
}) // => ({
//   evolve(),
//   value: 0.71265450034
// })

// generations 0 through 3
interval() // generation 0
  .evolve() // generation 1
  .evolve() // generation 2
  .evolve() // generation 3
```

### Input
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
#### evolve
| | |
| --- | --- |
| **Property** | `evolve` |
| **Type** | `Function` |
| **Arguments** | `0` |
| **Output** | `{ evolve, value }` |

Creates a new generation of `{ evolve, value }` properties where `value` is determined by the previous generation's `seed` input.

#### value
| | |
| --- | --- |
| **Property** | `value` |
| **Type** | `Number` |
| **Output** | `[0, 1)` |
| **Minumum** | `0` (inclusive) |
| **Maximum** | `1` (exclusive) |

Creates a number `[0, 1)` from `0` to `1` that may include `0` but not `1`.
