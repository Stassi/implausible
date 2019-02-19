import {
  divide,
  flip,
  pipe,
  sum,
  values,
} from 'ramda';

const divideBy = flip(divide);
const divideBySumOfValues = pipe(
  values,
  sum,
  divideBy,
);

export default divideBySumOfValues;
