import {
  add,
  divide,
  find,
  last,
  lt,
  pipe,
  prop,
  propOr,
  reduce,
} from 'ramda';
import namesByDescendingWeightAndTotalWeight from './namesByDescendingWeightAndTotalWeight';
import prng from '../prng';

const toNamesByDescendingWeightAndTotalWeight = ({ distribution, ...props }) => ({
  ...props,
  ...namesByDescendingWeightAndTotalWeight(distribution),
});

// TODO: Partial application
const toCeilings = ({
  namesByDescendingWeight,
  totalWeight,
  ...props
}) => ({
  ...props,
  ceilings: reduce(
    (acc, { name, weight }) => [
      ...acc,
      {
        name,
        ceiling: add(
          propOr(
            0,
            'ceiling',
            last(acc),
          ),
          divide(weight, totalWeight),
        ),
      },
    ],
    [],
    namesByDescendingWeight,
  ),
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
  toNamesByDescendingWeightAndTotalWeight,
  toCeilings,
  toGenerated,
  findCeilingGreaterThanGenerated,
  prop('name'),
);

export default weighted;
