import { describe, it } from 'mocha'
import { expect } from 'chai'
import { sample, samples } from '../src'
import collections from './collections.json'

describe('pseudorandom samples', () => {
  describe('seeded', () => {
    const seed = 'hello.'

    describe('uniform probability', () => {
      const { uniform: collection } = collections

      it('should have deterministic output', () => {
        expect(sample({ collection, seed })).to.equal('tails')
      })

      describe('count: 4', () => {
        it('should have deterministic output', () => {
          expect(samples({
            collection,
            seed,
            count: 4
          })).to.have.deep.ordered.members([
            'tails',
            'tails',
            'tails',
            'heads'
          ])
        })
      })

      describe('duplicates', () => {
        const { uniformWithDuplicates: collection } = collections

        it('should additively increase probability', () => {
          expect(samples({
            collection,
            seed,
            count: 8
          })).to.have.deep.ordered.members([
            'tails',
            'heads',
            'heads',
            'heads',
            'heads',
            'heads',
            'heads',
            'heads'
          ])
        })
      })
    })

    describe('weighted probability', () => {
      const { weighted: collection } = collections

      it('should have deterministic output', () => {
        expect(sample({ collection, seed })).to.equal('A-')
      })
    })

    describe('custom PRNG', () => {
      const name = 'tychei'

      describe('uniform probability', () => {
        const { uniform: collection } = collections

        it('should have deterministic output', () => {
          expect(sample({
            collection,
            name,
            seed
          })).to.equal('heads')
        })
      })

      describe('weighted probability', () => {
        const { weighted: collection } = collections

        it('should have deterministic output', () => {
          expect(sample({
            collection,
            name,
            seed
          })).to.equal('A+')
        })
      })
    })
  })

  describe('unseeded', () => {
    describe('uniform probability', () => {
      const { uniform: collection } = collections

      it('should have stochastic output', () => {
        expect(sample({ collection })).to.be.a('string')
      })

      describe('count: 4', () => {
        it('should have stochastic output', () => {
          const [
            a,
            b,
            c,
            d
          ] = samples({
            collection,
            count: 4
          })

          expect(a).to.be.oneOf(collection)
          expect(b).to.be.oneOf(collection)
          expect(c).to.be.oneOf(collection)
          expect(d).to.be.oneOf(collection)
        })
      })
    })

    describe('weighted probability', () => {
      const { weighted: collection } = collections

      it('should have stochastic output', () => {
        expect(sample({ collection })).to.be.a('string')
      })
    })
  })
})
