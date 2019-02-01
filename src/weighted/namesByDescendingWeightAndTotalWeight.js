import namesByDescendingWeight from './namesByDescendingWeight';
import sumOfValues from './sumOfValues';

const namesByDescendingWeightAndTotalWeight = distribution => ({
  namesByDescendingWeight: namesByDescendingWeight(distribution),
  totalWeight: sumOfValues(distribution),
});

export default namesByDescendingWeightAndTotalWeight;
