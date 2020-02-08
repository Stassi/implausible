## Compositions
**TODO: Implement**

* `number`
* `manyNumbers`

#### number
##### Interface
* `number()`
* `number(seed)`
* `number({ [prng][, seed] })`

##### Random
Generate a random number.

```javascript
const number = () => interval()[0]
// number() => Number
```

##### Non-random
Generate a non-random number.

```javascript
const number = seed => interval({ seed })[0]
// number(seed) => Number
```

```javascript
const number = ({ prng, seed }) => interval({ prng, seed })[0]
// => Number
```

#### manyNumbers
##### Interface
* `manyNumbers(count)`
* `manyNumbers({ count[, prng][, seed] })`

##### Random
Generate many random numbers.

```javascript
const manyNumbers = count => interval({
  generations: range({
    maximum: count
  })
})
// => Array of size: count

const manyNumbers = ({
  count,
  prng,
}) => interval({
  prng,
  generations: range({
    maximum: count
  })
})
// => Array of size: count
```

##### Non-random
Generate many non-random numbers.

```javascript
const manyNumbers = ({
  count,
  seed
}) => interval({
  seed,
  generations: range({
    maximum: count
  })
})
// => Array of size: count
```

```javascript
const manyNumbers = ({
  count,
  prng,
  seed
}) => interval({
  prng,
  seed,
  generations: range({
    maximum: count
  })
})
// => Array of size: count
```
