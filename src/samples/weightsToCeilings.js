import {
  add,
  last,
  pipe,
  propOr,
  reduce,
} from 'ramda';

const ceilingPropOrZero = propOr(0, 'ceiling');
const lastCeilingPropOrZero = pipe(
  last,
  ceilingPropOrZero,
);

const weightsToCeilings = (divideBySumOfValues) => reduce(
  (acc, { name, weight }) => [
    ...acc,
    {
      name,
      ceiling: add(
        lastCeilingPropOrZero(acc),
        divideBySumOfValues(weight),
      ),
    },
  ],
  [],
);

export default weightsToCeilings;
