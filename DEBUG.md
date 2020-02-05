## DEBUG
### interval
Generate a number from `0` to `1` (including `0` but not `1`).

##### Example outputs
* `0`
* `0.5`
* `0.71034`
* `0.99999`

#### Deterministic
Given a particular input, the output will always be the same.

```es6
interval({
  generation,
  prngName,
  seed
})
```

##### Parameters
* `generation` (default: `0`)
* `prngName` (default: `arc4`)
* `seed` (default: `undefined`)

#### Non-deterministic
The output is statistically random.

```es6
interval()
```
