import { pipe, prop } from 'ramda';
import prng from '../prng';
import toDivideBySumOfValuesAndNamesByDescendingWeight
  from './toDivideBySumOfValuesAndNamesByDescendingWeight';
import transformWeightsToCeilings from './weightsToCeilings';
import findCeilingGreaterThanGenerated from './findCeilingGreaterThanGenerated';

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

const toGenerated = ({
  name,
  seed,
  ...props
}) => ({
  ...props,
  generated: prng({ name, seed }),
});

const toFindCeilingGreaterThanGenerated = ({ generated, ...props }) => ({
  ...props,
  findCeilingGreaterThanGenerated: findCeilingGreaterThanGenerated(generated),
});

const applyCeilings = ({
  ceilings,
  findCeilingGreaterThanGenerated,
}) => findCeilingGreaterThanGenerated(ceilings);

const nameProp = prop('name');

const weighted = pipe(
  applyDistribution,
  toWeightsToCeilings,
  toCeilings,
  toGenerated,
  toFindCeilingGreaterThanGenerated,
  applyCeilings,
  nameProp,
);

export default weighted;
