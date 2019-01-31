import {
  add,
  descend,
  divide,
  find,
  last,
  lt,
  map,
  pipe,
  prop,
  propOr,
  reduce,
  sort,
  sum,
  toPairs,
  values,
} from 'ramda';
import prng from './prng';

const toGenerated = ({ seed, ...props }) => ({
  ...props,
  generated: prng({ seed }),
});

const sumOfValues = pipe(
  values,
  sum,
);

const toTotalWeight = ({ distribution, ...props }) => ({
  ...props,
  distribution,
  totalWeight: sumOfValues(distribution),
});

const namesByDescendingWeight = pipe(
  toPairs,
  map(([name, weight]) => ({ name, weight })),
  sort(
    descend(
      prop('weight'),
    ),
  ),
);

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
