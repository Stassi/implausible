import {
  descend,
  map,
  pipe,
  prop,
  sort,
  toPairs,
} from 'ramda';

const descendingSortByProp = pipe(
  prop,
  descend,
  sort,
);

const namesByDescendingWeight = pipe(
  toPairs,
  map(([name, weight]) => ({ name, weight })),
  descendingSortByProp('weight'),
);

export default namesByDescendingWeight;
