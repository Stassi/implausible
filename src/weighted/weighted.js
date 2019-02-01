import {
  find,
  lt,
  pipe,
  prop,
} from 'ramda';
import prng from '../prng';
import toDivideBySumOfValuesAndNamesByDescendingWeight from './toDivideBySumOfValuesAndNamesByDescendingWeight';
import transformWeightsToCeilings from './weightsToCeilings';

const applyDistribution = ({ distribution, ...props }) => ({
  ...props,
  ...toDivideBySumOfValuesAndNamesByDescendingWeight(distribution),
});

const toWeightsToCeilings = ({ divideBySumOfValues, ...props }) => ({
  ...props,
  weightsToCeilings: transformWeightsToCeilings(divideBySumOfValues),
});

const toCeilings = ({
  weightsToCeilings,
  namesByDescendingWeight,
  ...props
}) => ({
  ...props,
  ceilings: weightsToCeilings(namesByDescendingWeight),
});

const toGenerated = ({ seed, ...props }) => ({
  ...props,
  generated: prng({ seed }),
});

// TODO: Partial application
const findCeilingGreaterThanGenerated = ({ ceilings, generated }) => find(
  pipe(
    prop('ceiling'),
    lt(generated),
  ),
  ceilings,
);

const weighted = pipe(
  applyDistribution,
  toWeightsToCeilings,
  toCeilings,
  toGenerated,
  findCeilingGreaterThanGenerated,
  prop('name'),
);

export default weighted;
