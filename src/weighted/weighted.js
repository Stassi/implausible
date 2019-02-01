import {
  applySpec,
  find,
  lt,
  pipe,
  prop,
} from 'ramda';
import divideBySumOfValues from './divideBySumOfValues';
import namesByDescendingWeight from './namesByDescendingWeight';
import prng from '../prng';
import transformWeightsToCeilings from './weightsToCeilings';

// TODO: Rename, extract subcomponents
const applyDistribution = ({ distribution, ...props }) => ({
  ...props,
  ...applySpec({
    divideBySumOfValues,
    namesByDescendingWeight,
  })(distribution),
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
