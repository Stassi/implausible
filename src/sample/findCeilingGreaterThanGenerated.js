import {
  find,
  lt,
  pipe,
  prop,
} from 'ramda';

const findCeilingGreaterThanGenerated = generated => find(
  pipe(
    prop('ceiling'),
    lt(generated),
  ),
);

export default findCeilingGreaterThanGenerated;
