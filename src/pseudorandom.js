import seedrandom from 'seedrandom'
import {
  conditional,
  map,
  strictlyEquals
} from 'neida'
import entries from '../src/utilities/entries'
import flatten from '../src/utilities/flatten'
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
    predicate: () => strictlyEquals(prngName, 'arc4')
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
      data: prngNames,
      transform: prngName => map({
        data: entries({
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
