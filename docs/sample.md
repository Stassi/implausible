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
Generate many non-random samples from specific intervals (without replacement).

```javascript
sample({
  collection: [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  intervals: [
    0.3,
    0.5,
    0.5,
    0.5,
    0.7
  ],
})
// => [
//   2,
//   4,
//   5,
//   3,
//   6
// ]
```

---
Generate many non-random samples from specific intervals with replacement.

```javascript
sample({
  collection: [
    1,
    2,
    3,
    4,
    5,
    6
  ],
  intervals: [
    0.3,
    0.5,
    0.5,
    0.5,
    0.7
  ],
  replacement: true
})
// => [
//   2,
//   4,
//   4,
//   4,
//   5
// ]
```

---
Generate many non-random weighted samples from specific intervals (without replacement).

```javascript
sample({
  collection: [
    [1, 1],
    [2, 100],
    [3, 1],
    [4, 100],
    [5, 1],
    [6, 100]
  ],
  intervals: [
    0.3,
    0.5,
    0.5,
    0.5,
    0.7
  ],
})
// => [
//   2,
//   4,
//   6,
//   3,
//   5
// ]
```

---
Generate many non-random weighted samples from specific intervals with replacement.

```javascript
sample({
  collection: [
    [1, 1],
    [2, 100],
    [3, 1],
    [4, 100],
    [5, 1],
    [6, 100]
  ],
  intervals: [
    0.3,
    0.5,
    0.5,
    0.5,
    0.7
  ],
  replacement: true
})
// => [
//   2
//   4,
//   4,
//   4,
//   6
// ]
```

### Input
**TODO**

### Output
**TODO**
