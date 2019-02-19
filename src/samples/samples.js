import {
  equals,
  length,
  pipe,
  prop,
  until,
} from 'ramda';
import generateOne from './one';
import prng from '../prng';
import toDivideBySumOfValuesAndNamesByDescendingWeight
  from './toDivideBySumOfValuesAndNamesByDescendingWeight';
import transformWeightsToCeilings from './weightsToCeilings';
import uniformToWeightedWhenDetected from './uniformToWeightedWhenDetected';

const setDefaultCount = ({ count = 1, ...props }) => ({ ...props, count });
const setDefaultGenerated = ({ generated = [], ...props }) => ({ ...props, generated });

const applyDistribution = ({ collection, ...props }) => ({
  ...props,
  ...toDivideBySumOfValuesAndNamesByDescendingWeight(collection),
});

const toWeightsToCeilings = ({ divideBySumOfValues, ...props }) => ({
  ...props,
  weightsToCeilings: transformWeightsToCeilings(divideBySumOfValues),
});

const toCeilings = ({
  namesByDescendingWeight,
  weightsToCeilings,
  ...props
}) => ({
  ...props,
  ceilings: weightsToCeilings(namesByDescendingWeight),
});

const countLimitReached = ({ count, generated }) => equals(
  count,
  length(generated),
);
const untilCountLimitReached = until(countLimitReached);

const toGenerated = ({ generated, ...props }) => ({
  ...props,
  generated: [
    ...generated,
    generateOne({ ...props }),
  ],
});

const evolveSeedProp = ({
  name,
  seed,
  ...props
}) => ({
  ...props,
  name,
  seed: prng({ name, seed }),
});

const generateMany = pipe(toGenerated, evolveSeedProp);
const generateManyUntilCountLimitReached = untilCountLimitReached(generateMany);

const generatedProp = prop('generated');

const samples = pipe(
  uniformToWeightedWhenDetected,
  setDefaultCount,
  setDefaultGenerated,
  applyDistribution,
  toWeightsToCeilings,
  toCeilings,
  generateManyUntilCountLimitReached,
  generatedProp,
);

export default samples;
