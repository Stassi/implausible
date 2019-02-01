import { expect } from 'chai';
import { weighted } from '../src';

describe('weighted pseudorandom number generator', () => {
  const collection = {
    x: 4,
    y: 1,
    z: 2,
  };

  describe('seeded', () => {
    const seed = 'hello.';

    it('should have deterministic output', () => {
      expect(weighted({ collection, seed })).to.equal('y');
    });

    describe('custom PRNG', () => {
      const name = 'tychei';

      it('should have deterministic output', () => {
        expect(weighted({
          collection,
          name,
          seed,
        })).to.equal('x');
      });
    });
  });

  describe('unseeded', () => {
    it('should have stochastic output', () => {
      expect(weighted({ collection })).to.be.a('string');
    });
  });
});
