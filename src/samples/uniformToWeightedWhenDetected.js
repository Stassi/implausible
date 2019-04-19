import {
  countBy,
  identity,
  propIs,
  when,
} from 'ramda';

const propIsArray = propIs(Array);
const collectionPropIsArray = propIsArray('collection');

const histogram = countBy(identity);

const toHistogram = ({ collection, ...props }) => ({
  ...props,
  collection: histogram(collection),
});

const uniformToWeightedWhenDetected = when(
  collectionPropIsArray,
  toHistogram,
);

export default uniformToWeightedWhenDetected;
