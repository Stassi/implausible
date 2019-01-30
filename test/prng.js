import { expect } from 'chai';
import { prng } from '../src';

describe('pseudorandom number generator', () => {
  describe('seeded', () => {
    const seed = 'hello.';

    describe('alea', () => {
      it('should have deterministic output', () => {
        expect(prng({
          seed,
          name: 'alea',
        })).to.equal(false);
      });
    });

    describe('arc4', () => {
      it('should have deterministic output', () => {
        expect(prng({
          seed,
          name: 'arc4',
        })).to.equal(false);
      });
    });

    describe('tychei', () => {
      it('should have deterministic output', () => {
        expect(prng({
          seed,
          name: 'tychei',
        })).to.equal(false);
      });
    });

    describe('xor128', () => {
      it('should have deterministic output', () => {
        expect(prng({
          seed,
          name: 'xor128',
        })).to.equal(false);
      });
    });

    describe('xor4096', () => {
      it('should have deterministic output', () => {
        expect(prng({
          seed,
          name: 'xor4096',
        })).to.equal(false);
      });
    });

    describe('xorshift7', () => {
      it('should have deterministic output', () => {
        expect(prng({
          seed,
          name: 'xorshift7',
        })).to.equal(false);
      });
    });

    describe('xorwow', () => {
      it('should have deterministic output', () => {
        expect(prng({
          seed,
          name: 'xorwow',
        })).to.equal(false);
      });
    });
  });

  describe('unseeded', () => {
    describe('alea', () => {
      it('should have stochastic output', () => {
        expect(prng({ name: 'alea' })).to.equal(false);
      });
    });

    describe('arc4', () => {
      it('should have stochastic output', () => {
        expect(prng({ name: 'arc4' })).to.equal(false);
      });
    });

    describe('tychei', () => {
      it('should have stochastic output', () => {
        expect(prng({ name: 'tychei' })).to.equal(false);
      });
    });

    describe('xor128', () => {
      it('should have stochastic output', () => {
        expect(prng({ name: 'xor128' })).to.equal(false);
      });
    });

    describe('xor4096', () => {
      it('should have stochastic output', () => {
        expect(prng({ name: 'xor4096' })).to.equal(false);
      });
    });

    describe('xorshift7', () => {
      it('should have stochastic output', () => {
        expect(prng({ name: 'xorshift7' })).to.equal(false);
      });
    });

    describe('xorwow', () => {
      it('should have stochastic output', () => {
        expect(prng({ name: 'xorwow' })).to.equal(false);
      });
    });
  });
});
