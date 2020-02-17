import seedrandom from 'seedrandom'
import {
  conditional,
  map,
  strictlyEquals
} from 'neida'
import fromEntries from './utilities/fromEntries'
import prngNames from './prngNames'

const prng = ({ name, seed }) => {
  const generic = conditional({
    ifFalse: () => new seedrandom[name](seed),
    ifTrue: () => seedrandom(seed),
    predicate: () => strictlyEquals(name, 'arc4')
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
  }
}

const pseudorandom = fromEntries(
  map({
    data: prngNames,
    transform: name => ([
      name,
      seed => prng({
        name,
        seed
      })
    ])
  })
)

export default pseudorandom
