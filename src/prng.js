import seedrandom from 'seedrandom';

const arc4 = seed => seedrandom(seed)();
const algorithm = name => seed => seedrandom[name](seed)();

const alea = algorithm('alea');
const tychei = algorithm('tychei');
const xor128 = algorithm('xor128');
const xor4096 = algorithm('xor4096');
const xorshift7 = algorithm('xorshift7');
const xorwow = algorithm('xorwow');

const selectPrng = ({
  seed,
  name = 'arc4',
}) => ({
  alea,
  arc4,
  tychei,
  xor128,
  xor4096,
  xorshift7,
  xorwow,
}[name])(seed || arc4());

const prng = (params = {}) => selectPrng(params);

export default prng;
