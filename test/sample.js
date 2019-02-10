import { expect } from 'chai';
import { sample } from '../src';

describe('pseudorandom samples', () => {
  const collections = {
    uniform: [
      'heads',
      'tails',
    ],
    weighted: {
      'A-': 6.3,
      'A+': 35.7,
      'AB-': 0.6,
      'AB+': 3.4,
      'B-': 1.5,
      'B+': 8.5,
      'O-': 6.6,
      'O+': 37.4,
    },
  };

  describe('seeded', () => {
    const seed = 'hello.';

    describe('uniform probability', () => {
      const { uniform: collection } = collections;

      it('should have deterministic output', () => {
        expect(sample({ collection, seed })).to.equal('tails');
      });

      describe('count: 4', () => {
        // TODO: Rename
        it('should have named tests', () => {
          expect(sample({
            collection,
            seed,
            count: 4,
          })).to.equal('__debug__');
        });
      })
    });

    describe('weighted probability', () => {
      const { weighted: collection } = collections;

      it('should have deterministic output', () => {
        expect(sample({ collection, seed })).to.equal('A-');
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
          })).to.equal('heads');
        });
      });

      describe('weighted probability', () => {
        const { weighted: collection } = collections;

        it('should have deterministic output', () => {
          expect(sample({
            collection,
            name,
            seed,
          })).to.equal('A+');
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
