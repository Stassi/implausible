import {
  length,
  pipe,
  propIs,
  repeat,
  when,
  zipObj,
} from 'ramda';

const propIsArray = propIs(Array);
const collectionPropIsArray = propIsArray('collection');

const repeatOne = repeat(1);
const repeatOneUntilLengthOf = pipe(length, repeatOne);

const distributeUniformWeight = collection => zipObj(
  collection,
  repeatOneUntilLengthOf(collection),
);

const distributeUniformWeightToCollection = ({ collection, ...props }) => ({
  ...props,
  collection: distributeUniformWeight(collection),
});

// TODO: Preserve weights of duplicate uniform items
const uniformToWeightedWhenDetected = when(
  collectionPropIsArray,
  distributeUniformWeightToCollection,
);

export default uniformToWeightedWhenDetected;
