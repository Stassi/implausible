import { describe, it } from 'mocha'
import { expect } from 'chai'
import { interval } from '../src'

describe('#interval', () => {
  describe('without arguments', () => {
    it('should generate a non-deterministic number', () => {
      expect(interval()[0]).to.be.at.least(0).and.below(1)
    })
  })

  describe('count: 1', () => {
    it('should generate a non-deterministic number', () => {
      expect(interval({ count: 1 })[0]).to.be.at.least(0).and.below(1)
    })
  })

  describe('count: 3', () => {
    describe('prng: alea', () => {
      it('should generate many non-deterministic numbers', () => {
        const res = interval({ count: 3, prng: 'alea' })
        expect(res[0]).to.be.at.least(0).and.below(1)
        expect(res[1]).to.be.at.least(0).and.below(1)
        expect(res[2]).to.be.at.least(0).and.below(1)
      })
    })

    describe('prng: arc4', () => {
      it('should generate many non-deterministic numbers', () => {
        const res = interval({ count: 3, prng: 'arc4' })
        expect(res[0]).to.be.at.least(0).and.below(1)
        expect(res[1]).to.be.at.least(0).and.below(1)
        expect(res[2]).to.be.at.least(0).and.below(1)
      })
    })

    describe('prng: tychei', () => {
      it('should generate many non-deterministic numbers', () => {
        const res = interval({ count: 3, prng: 'tychei' })
        expect(res[0]).to.be.at.least(0).and.below(1)
        expect(res[1]).to.be.at.least(0).and.below(1)
        expect(res[2]).to.be.at.least(0).and.below(1)
      })
    })

    describe('prng: xor128', () => {
      it('should generate many non-deterministic numbers', () => {
        const res = interval({ count: 3, prng: 'xor128' })
        expect(res[0]).to.be.at.least(0).and.below(1)
        expect(res[1]).to.be.at.least(0).and.below(1)
        expect(res[2]).to.be.at.least(0).and.below(1)
      })
    })

    describe('prng: xor4096', () => {
      it('should generate many non-deterministic numbers', () => {
        const res = interval({ count: 3, prng: 'xor4096' })
        expect(res[0]).to.be.at.least(0).and.below(1)
        expect(res[1]).to.be.at.least(0).and.below(1)
        expect(res[2]).to.be.at.least(0).and.below(1)
      })
    })

    describe('prng: xorshift7', () => {
      it('should generate many non-deterministic numbers', () => {
        const res = interval({ count: 3, prng: 'xorshift7' })
        expect(res[0]).to.be.at.least(0).and.below(1)
        expect(res[1]).to.be.at.least(0).and.below(1)
        expect(res[2]).to.be.at.least(0).and.below(1)
      })
    })

    describe('prng: xorwow', () => {
      it('should generate many non-deterministic numbers', () => {
        const res = interval({ count: 3, prng: 'xorwow' })
        expect(res[0]).to.be.at.least(0).and.below(1)
        expect(res[1]).to.be.at.least(0).and.below(1)
        expect(res[2]).to.be.at.least(0).and.below(1)
      })
    })
  })

  describe('generations: [0, 3, 10]', () => {
    describe('toPairs: true', () => {
      it('should generate many non-deterministic numbers', () => {
        const res = interval({
          generations: [0, 3, 10],
          toPairs: true
        })
        expect(res[0]).to.be.at.least(0).and.below(1)
        expect(res[3]).to.be.at.least(0).and.below(1)
        expect(res[10]).to.be.at.least(0).and.below(1)
      })
    })

    describe('toPairs: false', () => {
      it('should generate many non-deterministic numbers', () => {
        const res = interval({
          generations: [0, 3, 10],
          toPairs: false
        })
        expect(res[0]).to.be.at.least(0).and.below(1)
        expect(res[1]).to.be.at.least(0).and.below(1)
        expect(res[2]).to.be.at.least(0).and.below(1)
      })
    })
  })

  describe('seed: hello', () => {
    const seed = 'hello'

    it('should generate a deterministic number', () => {
      expect(interval({ seed })[0]).to.equal(1)
    })

    describe('count: 3', () => {
      const count = 3

      describe('prng: alea', () => {
        it('should generate many deterministic numbers', () => {
          const res = interval({ count, seed, prng: 'alea' })
          expect(res[0]).to.equal(1)
          expect(res[1]).to.equal(1)
          expect(res[2]).to.equal(1)
        })
      })

      describe('prng: arc4', () => {
        it('should generate many deterministic numbers', () => {
          const res = interval({ count, seed, prng: 'arc4' })
          expect(res[0]).to.equal(1)
          expect(res[1]).to.equal(1)
          expect(res[2]).to.equal(1)
        })
      })

      describe('prng: tychei', () => {
        it('should generate many deterministic numbers', () => {
          const res = interval({ count, seed, prng: 'tychei' })
          expect(res[0]).to.equal(1)
          expect(res[1]).to.equal(1)
          expect(res[2]).to.equal(1)
        })
      })

      describe('prng: xor128', () => {
        it('should generate many deterministic numbers', () => {
          const res = interval({ count, seed, prng: 'xor128' })
          expect(res[0]).to.equal(1)
          expect(res[1]).to.equal(1)
          expect(res[2]).to.equal(1)
        })
      })

      describe('prng: xor4096', () => {
        it('should generate many deterministic numbers', () => {
          const res = interval({ count, seed, prng: 'xor4096' })
          expect(res[0]).to.equal(1)
          expect(res[1]).to.equal(1)
          expect(res[2]).to.equal(1)
        })
      })

      describe('prng: xorshift7', () => {
        it('should generate many deterministic numbers', () => {
          const res = interval({ count, seed, prng: 'xorshift7' })
          expect(res[0]).to.equal(1)
          expect(res[1]).to.equal(1)
          expect(res[2]).to.equal(1)
        })
      })

      describe('prng: xorwow', () => {
        it('should generate many deterministic numbers', () => {
          const res = interval({ count, seed, prng: 'xorwow' })
          expect(res[0]).to.equal(1)
          expect(res[1]).to.equal(1)
          expect(res[2]).to.equal(1)
        })
      })
    })

    describe('generations: [0, 3, 10], toPairs: true', () => {
      it('should generate many deterministic numbers', () => {
        const res = interval({
          seed,
          generations: [0, 3, 10],
          toPairs: true
        })
        expect(res[0]).to.equal(1)
        expect(res[3]).to.equal(1)
        expect(res[10]).to.equal(1)
      })
    })
  })
})
