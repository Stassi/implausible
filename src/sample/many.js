import {
  equals,
  length,
  pipe,
  prop,
  until,
} from 'ramda';
import generateOne from './one';
import prng from '../prng';

const setDefaultCount = ({ count = 1, ...props }) => ({ ...props, count });
const setDefaultGenerated = ({ generated = [], ...props }) => ({ ...props, generated });

const countLimitReached = ({ count, generated }) => equals(
  count,
  length(generated),
);
const untilCountLimitReached = until(countLimitReached);

const toGenerated = ({ generated, ...props }) => ({
  ...props,
  generated: [
    ...generated,
    generateOne({ ...props }),
  ],
});

const evolveSeedProp = ({
  name,
  seed,
  ...props
}) => ({
  ...props,
  name,
  seed: prng({ name, seed }),
});

const generateMany = pipe(toGenerated, evolveSeedProp);
const generateManyUntilCountLimitReached = untilCountLimitReached(generateMany);

const generatedProp = prop('generated');

const many = pipe(
  setDefaultCount,
  setDefaultGenerated,
  generateManyUntilCountLimitReached,
  generatedProp,
);

export default many;
