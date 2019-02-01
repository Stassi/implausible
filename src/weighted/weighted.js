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
import namesByDescendingWeight from './namesByDescendingWeight';
import prng from '../prng';
import sumOfValues from './sumOfValues';

const toGenerated = ({ seed, ...props }) => ({
  ...props,
  generated: prng({ seed }),
});

const toTotalWeight = ({ distribution, ...props }) => ({
  ...props,
  distribution,
  totalWeight: sumOfValues(distribution),
});

const toNamesByDescendingWeight = ({
  distribution,
  ...props,
}) => ({
  ...props,
  namesByDescendingWeight: namesByDescendingWeight(distribution),
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

// TODO: Partial application
const findCeilingGreaterThanGenerated = ({ ceilings, generated }) => find(
  pipe(
    prop('ceiling'),
    lt(generated),
  ),
  ceilings,
);

const weighted = pipe(
  toGenerated,
  toTotalWeight,
  toNamesByDescendingWeight,
  toCeilings,
  findCeilingGreaterThanGenerated,
  prop('name'),
);

export default weighted;
