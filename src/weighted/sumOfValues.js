import {
  pipe,
  sum,
  values,
} from 'ramda';

const sumOfValues = pipe(
  values,
  sum,
);

export default sumOfValues;
