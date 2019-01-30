import seedrandom from 'seedrandom';

const arc4 = seed => seedrandom(seed);

const choosePrng = name => name === 'arc4'
  ? arc4
  : seedrandom[name];

const setDefaultsAndApplySeed = ({
  seed,
  name = 'arc4',
}) => choosePrng(name)(seed || arc4());

const prng = (params = {}) => setDefaultsAndApplySeed(params)();

export default prng;
