## sample
Generate a pseudorandom sample of a distinct collection.

##### Signature
* `sample({ ... })`
  * `collection`
  * `count`
  * `intervals`
  * `generations`
  * `labelGenerations`
  * `prng`
  * `replacement`
  * `seed`

### Usage
#### Random number generation
Generate a random sample.

```javascript
sample({
  collection: ['heads', 'tails'],
  count: 1
})
// => ['heads']
```

---
Change the algorithm that generates samples.

```javascript
sample({
  collection: ['heads', 'tails'],
  count: 1,
  prng: 'alea'
})
// => ['heads']
```

---
Generate many random samples (without replacement).

```javascript
sample({
  collection: [
    'heads',
    42,
    true,
    undefined,
    null,
    Infinity
  ],
  count: 10
})
// => [
//   42,
//   null,
//   Infinity,
//   undefined,
//   'heads',
//   true,      ↑ cycle #1
//   true,      ↓ cycle #2
//   Infinity,
//   undefined,
//   42
// ]            length: 10
```

---
Generate many random samples with replacement.

```javascript
sample({
  collection: [
    'heads',
    42,
    true,
    undefined,
    null,
    Infinity
  ],
  count: 10,
  replacement: true
})
// => [
//   42,
//   Infinity,
//   42,
//   undefined,
//   null,
//   'heads',
//   'heads',
//   null,
//   undefined,
//   'heads'
// ]
```

#### Deterministic number generation
Generate many non-random samples (without replacement).

```javascript
sample({
  collection: [
    'heads',
    42,
    true,
    undefined,
    null,
    Infinity
  ],
  count: 10,
  seed: 'same result'
})
// => [
//   42,
//   null,
//   Infinity,
//   undefined,
//   'heads',
//   true,      ↑ cycle #1
//   true,      ↓ cycle #2
//   Infinity,
//   undefined,
//   42
// ]            length: 10
```

---
Generate many non-random samples with replacement.

```javascript
sample({
  collection: [
    'heads',
    42,
    true,
    undefined,
    null,
    Infinity
  ],
  count: 10,
  seed: 'same result',
  replacement: true
})
// => [
//   42,
//   Infinity,
//   42,
//   undefined,
//   null,
//   'heads',
//   'heads',
//   null,
//   undefined,
//   'heads'
// ]
```

Generate specific generations of non-random samples (without replacement).

```javascript
sample({
  collection: [
    'monday',
    'wednesday',
    'friday'
  ],
  generations: [
    0,
    2,
    [5, 8]
  ],
  labelGenerations: true,
  seed: 'same result'
})
// => {
//   0: 'friday',
//   2: 'wednesday',
//   5: 'wednesday'
//   6: 'monday'
//   7: 'wednesday'
// }
```

##### From intervals
Generate many non-random samples from specific intervals.

```javascript
sample({
  collection: [
    'heads',
    'tails'
  ],
  intervals: [
    0,
    0.4,
    0.5,
    1
  ]
})
// => [
//   'heads',
//   'heads',
//   'tails',
//   'tails'
// ]
```

---
Generate many non-random weighted samples from specific intervals.

```javascript
sample({
  collection: {
    'heads': 9,
    'tails': 1
  },
  intervals: [
    0,
    0.4,
    0.5,
    0.9,
    1
  ]
})
// => [
//   'heads',
//   'heads',
//   'heads',
//   'heads',
//   'tails'
// ]
```

### Input
**TODO**

### Output
**TODO**
