## Compositions
**TODO: Implement**

* `number`

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
// => Number
```

```javascript
const number = ({ prng, seed }) => interval({ prng, seed })[0]
// => Number
```
