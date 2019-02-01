import {
  add,
  last,
  propOr,
  reduce,
} from 'ramda';

const weightsToCeilings = divideBySumOfValues => reduce(
  (acc, { name, weight }) => [
    ...acc,
    {
      name,
      // TODO: Extract subcomponents
      ceiling: add(
        propOr(
          0,
          'ceiling',
          last(acc),
        ),
        divideBySumOfValues(weight),
      ),
    },
  ],
  [],
);

export default weightsToCeilings;
