import { pipe } from 'ramda';
import selectPrng from './select';

const setObjectAsDefaultParameter = (param = {}) => ({ ...param });

const setDefaultName = ({ name = 'arc4', ...props }) => ({ ...props, name });

const applySeed = ({ algorithm, seed }) => algorithm(seed)();

const prng = pipe(
  setObjectAsDefaultParameter,
  setDefaultName,
  selectPrng,
  applySeed,
);

export default prng;
