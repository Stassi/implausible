import { conditional, strictlyEquals } from 'neida'
import seedrandom from 'seedrandom'

const prng = ({ prngName, seed }) => {
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
  }
}

// TODO: Map object from array
const pseudorandom = {
  alea: seed => prng({ seed, prngName: 'alea' }),
  arc4: seed => prng({ seed, prngName: 'arc4' }),
  tychei: seed => prng({ seed, prngName: 'tychei' })
}

export default pseudorandom
