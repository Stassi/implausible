import {
  descend,
  map,
  pipe,
  prop,
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

// TODO: Implement
const debug = ({
  namesByDescendingWeight,
  totalWeight,
  ...props
}) => {
  // TODO: Implement reducer
  const debugTwo = [
    namesByDescendingWeight[0].weight / totalWeight,
    namesByDescendingWeight[0].weight / totalWeight
      + namesByDescendingWeight[1].weight / totalWeight,
    namesByDescendingWeight[0].weight / totalWeight
      + namesByDescendingWeight[1].weight / totalWeight
      + namesByDescendingWeight[2].weight / totalWeight,
  ];
  const res = { ...props, debugTwo };
  return res;
};

// TODO: Implement
const weighted = pipe(
  toGenerated,
  toTotalWeight,
  toNamesByDescendingWeight,
  debug,
);

export default weighted;
