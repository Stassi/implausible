import { expect } from 'chai';
import { sample } from '../src';

describe('pseudorandom samples', () => {
  const collections = {
    uniform: [
      'heads',
      'tails',
    ],
    weighted: {
      x: 4,
      y: 1,
      z: 2,
    },
  };

  describe('seeded', () => {
    const seed = 'hello.';

    describe('uniform probability', () => {
      const { uniform: collection } = collections;

      it('should have deterministic output', () => {
        expect(sample({ collection, seed })).to.equal('debug');
      });
    });

    describe('weighted probability', () => {
      const { weighted: collection } = collections;

      it('should have deterministic output', () => {
        expect(sample({ collection, seed })).to.equal('y');
      });
    });

    describe('custom PRNG', () => {
      const name = 'tychei';

      describe('uniform probability', () => {
        const { uniform: collection } = collections;

        it('should have deterministic output', () => {
          expect(sample({
            collection,
            name,
            seed,
          })).to.equal('debug');
        });
      });

      describe('weighted probability', () => {
        const { weighted: collection } = collections;

        it('should have deterministic output', () => {
          expect(sample({
            collection,
            name,
            seed,
          })).to.equal('x');
        });
      });
    });
  });

  describe('unseeded', () => {
    describe('uniform probability', () => {
      const { uniform: collection } = collections;

      it('should have stochastic output', () => {
        expect(sample({ collection })).to.be.a('string');
      });
    });

    describe('weighted probability', () => {
      const { weighted: collection } = collections;

      it('should have stochastic output', () => {
        expect(sample({ collection })).to.be.a('string');
      });
    });
  });
});
