import { expect } from 'chai';
import { weighted } from '../src';

describe('weighted pseudorandom number generator', () => {
  const distribution = {
    x: 4,
    y: 1,
    z: 2,
  };

  describe('seeded', () => {
    it('should have stochastic output', () => {
      expect(weighted({ distribution })).to.be.a('string');
    });
  });

  describe('unseeded', () => {
    const seed = 'hello.';

    it('should have deterministic output', () => {
      expect(weighted({ distribution, seed })).to.equal('y');
    });
  });
});
