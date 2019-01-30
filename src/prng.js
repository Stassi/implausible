import {
  alea,
  arc4,
  tychei,
  xor128,
  xor4096,
  xorshift7,
  xorwow,
} from './prngs';

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
