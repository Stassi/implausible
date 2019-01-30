import seedrandom from 'seedrandom';

const arc4 = seed => seedrandom(seed);

const selectPrng = ({
  seed,
  name = 'arc4',
}) => name === 'arc4'
  ? arc4(seed)
  : seedrandom[name](seed || arc4());

const prng = (params = {}) => selectPrng(params)();

export default prng;
