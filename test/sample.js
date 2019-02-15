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
        expect(sample({ collection, seed })).to.include('tails');
      });

      describe('count: 4', () => {
        it('should have deterministic output', () => {
          expect(sample({
            collection,
            seed,
            count: 4,
          })).to.have.deep.ordered.members([
            'tails',
            'tails',
            'tails',
            'heads',
          ]);
        });
      });
    });

    describe('weighted probability', () => {
      const { weighted: collection } = collections;

      it('should have deterministic output', () => {
        expect(sample({ collection, seed })).to.include('A-');
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
          })).to.include('heads');
        });
      });

      describe('weighted probability', () => {
        const { weighted: collection } = collections;

        it('should have deterministic output', () => {
          expect(sample({
            collection,
            name,
            seed,
          })).to.include('A+');
        });
      });
    });
  });

  describe('unseeded', () => {
    describe('uniform probability', () => {
      const { uniform: collection } = collections;

      it('should have stochastic output', () => {
        const [x] = sample({ collection });
        expect(x).to.be.a('string');
      });

      describe('count: 4', () => {
        it('should have stochastic output', () => {
          const [
            a,
            b,
            c,
            d,
          ] = sample({
            collection,
            count: 4,
          });

          expect(a).to.be.oneOf(collection);
          expect(b).to.be.oneOf(collection);
          expect(c).to.be.oneOf(collection);
          expect(d).to.be.oneOf(collection);
        });
      });
    });

    describe('weighted probability', () => {
      const { weighted: collection } = collections;

      it('should have stochastic output', () => {
        const [x] = sample({ collection });
        expect(x).to.be.a('string');
      });
    });
  });
});
