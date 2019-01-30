import seedrandom from 'seedrandom';

const arc4 = seed => seedrandom(seed);

const choosePrng = name => name === 'arc4'
  ? arc4
  : seedrandom[name];

const applySeed = ({
  seed,
  name = 'arc4',
}) => choosePrng(name)(seed || arc4());

const prng = (params = {}) => applySeed(params)();

export default prng;
