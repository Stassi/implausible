import seedrandom from 'seedrandom';

const arc4 = seed => seedrandom(seed)();
const prng = name => seed => seedrandom[name](seed || arc4())();

const alea = prng('alea');
const tychei = prng('tychei');
const xor128 = prng('xor128');
const xor4096 = prng('xor4096');
const xorshift7 = prng('xorshift7');
const xorwow = prng('xorwow');

export {
  alea,
  arc4,
  tychei,
  xor128,
  xor4096,
  xorshift7,
  xorwow,
};
