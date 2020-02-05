import {
  ifElse,
  isNil,
  pipe,
  propEq,
  propSatisfies,
  when
} from 'ramda'
import seedrandom from 'seedrandom'

const namePropEqualsArc4 = propEq('name', 'arc4')

const setDefaultAlgorithm = ({ name, ...props }) => ({ ...props, algorithm: seedrandom })

const propIsNil = propSatisfies(isNil)
const whenPropIsNil = pipe(propIsNil, when)
const whenSeedPropIsNil = whenPropIsNil('seed')
const generateSeed = ({ ...props }) => ({ ...props, seed: seedrandom()() })
const generateSeedWhenPropIsNil = whenSeedPropIsNil(generateSeed)

const setNamedAlgorithm = ({ name, ...props }) => ({ ...props, algorithm: seedrandom[name] })

const generateSeedAndSetNamedAlgorithm = pipe(
  generateSeedWhenPropIsNil,
  setNamedAlgorithm
)

const select = ifElse(
  namePropEqualsArc4,
  setDefaultAlgorithm,
  generateSeedAndSetNamedAlgorithm
)

export default select
