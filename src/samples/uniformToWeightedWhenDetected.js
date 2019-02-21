import {
  add,
  map,
  mergeDeepWith,
  pipe,
  propIs,
  reduce,
  when,
} from 'ramda';

const propIsArray = propIs(Array);
const collectionPropIsArray = propIsArray('collection');

const keyOfWeightOne = map(x => ({ [x]: 1 }));
const additiveMerge = reduce(
  mergeDeepWith(add),
  {},
);
const histogram = pipe(keyOfWeightOne, additiveMerge);

const toHistogram = ({ collection, ...props }) => ({
  ...props,
  collection: histogram(collection),
});

const uniformToWeightedWhenDetected = when(
  collectionPropIsArray,
  toHistogram,
);

export default uniformToWeightedWhenDetected;
