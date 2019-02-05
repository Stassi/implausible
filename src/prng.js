import {
  ifElse,
  isNil,
  pipe,
  prop,
  propEq,
  propSatisfies,
  when,
} from 'ramda';
import seedrandom from 'seedrandom';

const setObjectAsDefaultParameter = (param = {}) => ({ ...param });

const setDefaultName = ({ name = 'arc4', ...props }) => ({ ...props, name });

const propNameEqualsArc4 = propEq('name', 'arc4');

const seedProp = prop('seed');
const prngFromSeedProp = pipe(seedProp, seedrandom);

const propIsNil = propSatisfies(isNil);
const whenPropIsNil = pipe(propIsNil, when);
const whenSeedPropIsNil = whenPropIsNil('seed');
const generateSeedWhenPropIsNil = whenSeedPropIsNil(({ ...props }) =>
  ({ ...props, seed: seedrandom() }));

const prngFromNameAndSeedProps = ({ name, seed }) => seedrandom[name](seed);

const ensureSeededPrng = pipe(generateSeedWhenPropIsNil, prngFromNameAndSeedProps);

const selectPrng = ifElse(
  propNameEqualsArc4,
  prngFromSeedProp,
  ensureSeededPrng,
);

const callPrng = x => x();

const prng = pipe(
  setObjectAsDefaultParameter,
  setDefaultName,
  selectPrng,
  callPrng,
);

export default prng;
