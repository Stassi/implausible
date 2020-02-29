import seedrandom from 'seedrandom'
import {
  conditional,
  flatten,
  map,
  strictEqual
} from 'neida'
import entries from '../src/utilities/entries'
import fromEntries from '../src/utilities/fromEntries'
import prngNames from '../src/prngNames'

const prng = ({
  prngName,
  seed,
  variantName
}) => {
  const generic = conditional({
    ifFalse: () => new seedrandom[prngName](seed),
    ifTrue: () => seedrandom(seed),
    predicate: () => strictEqual(prngName, 'arc4')
  })

  const {
    double,
    int32,
    quick
  } = generic

  return {
    double,
    generic,
    int32,
    quick
  }[variantName]
}

const pseudorandom = seed => fromEntries(
  flatten(
    map({
      collection: prngNames,
      transform: prngName => map({
        collection: entries({
          double: `${prngName}Double`,
          generic: prngName,
          int32: `${prngName}Int32`,
          quick: `${prngName}Quick`
        }),
        transform: ([variantName, compoundName]) => [
          compoundName,
          prng({
            prngName,
            seed,
            variantName
          })
        ]
      })
    })
  )
)

export default pseudorandom
