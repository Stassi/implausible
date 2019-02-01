import { expect } from 'chai';
import { sample } from '../src';

describe('weighted pseudorandom sample', () => {
  const collection = {
    x: 4,
    y: 1,
    z: 2,
  };

  describe('seeded', () => {
    const seed = 'hello.';

    it('should have deterministic output', () => {
      expect(sample({ collection, seed })).to.equal('y');
    });

    describe('custom PRNG', () => {
      const name = 'tychei';

      it('should have deterministic output', () => {
        expect(sample({
          collection,
          name,
          seed,
        })).to.equal('x');
      });
    });
  });

  describe('unseeded', () => {
    it('should have stochastic output', () => {
      expect(sample({ collection })).to.be.a('string');
    });
  });
});
