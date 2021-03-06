import { describe, it } from 'mocha'
import { expect } from 'chai'
import { prng } from '../src'

describe('pseudorandom number generator', () => {
  describe('seeded', () => {
    const seed = 'hello.'

    describe('alea', () => {
      it('should have deterministic output', () => {
        expect(prng({
          seed,
          name: 'alea'
        })).to.equal(0.4783254903741181)
      })
    })

    describe('arc4', () => {
      const deterministicResult = 0.9282578795792454

      describe('default name parameter', () => {
        it('should have deterministic output', () => {
          expect(prng({ seed })).to.equal(deterministicResult)
        })
      })

      describe('explicit name parameter', () => {
        it('should have deterministic output', () => {
          expect(prng({
            seed,
            name: 'arc4'
          })).to.equal(deterministicResult)
        })
      })
    })

    describe('tychei', () => {
      it('should have deterministic output', () => {
        expect(prng({
          seed,
          name: 'tychei'
        })).to.equal(0.4676165450364351)
      })
    })

    describe('xor128', () => {
      it('should have deterministic output', () => {
        expect(prng({
          seed,
          name: 'xor128'
        })).to.equal(0.698391932528466)
      })
    })

    describe('xor4096', () => {
      it('should have deterministic output', () => {
        expect(prng({
          seed,
          name: 'xor4096'
        })).to.equal(0.9798525865189731)
      })
    })

    describe('xorshift7', () => {
      it('should have deterministic output', () => {
        expect(prng({
          seed,
          name: 'xorshift7'
        })).to.equal(0.7404357127379626)
      })
    })

    describe('xorwow', () => {
      it('should have deterministic output', () => {
        expect(prng({
          seed,
          name: 'xorwow'
        })).to.equal(0.14254314289428294)
      })
    })
  })

  describe('unseeded', () => {
    const twoPseudorandomNumbers = name => [
      prng({ name }),
      prng({ name })
    ]

    describe('alea', () => {
      const [x, y] = twoPseudorandomNumbers('alea')

      it('should have stochastic output', () => {
        expect(x).to.not.equal(y)
      })

      it('should be within range [0, 1)', () => {
        expect(x).to.be.within(0, 1)
        expect(y).to.be.within(0, 1)
      })
    })

    describe('arc4', () => {
      describe('default name parameter', () => {
        const [x, y] = [prng(), prng()]

        it('should have stochastic output', () => {
          expect(x).to.not.equal(y)
        })

        it('should be within range [0, 1)', () => {
          expect(x).to.be.within(0, 1)
          expect(y).to.be.within(0, 1)
        })
      })

      describe('explicit name parameter', () => {
        const [x, y] = twoPseudorandomNumbers('arc4')

        it('should have stochastic output', () => {
          expect(x).to.not.equal(y)
        })

        it('should be within range [0, 1)', () => {
          expect(x).to.be.within(0, 1)
          expect(y).to.be.within(0, 1)
        })
      })
    })

    describe('tychei', () => {
      const [x, y] = twoPseudorandomNumbers('tychei')

      it('should have stochastic output', () => {
        expect(x).to.not.equal(y)
      })

      it('should be within range [0, 1)', () => {
        expect(x).to.be.within(0, 1)
        expect(y).to.be.within(0, 1)
      })
    })

    describe('xor128', () => {
      const [x, y] = twoPseudorandomNumbers('xor128')

      it('should have stochastic output', () => {
        expect(x).to.not.equal(y)
      })

      it('should be within range [0, 1)', () => {
        expect(x).to.be.within(0, 1)
        expect(y).to.be.within(0, 1)
      })
    })

    describe('xor4096', () => {
      const [x, y] = twoPseudorandomNumbers('xor4096')

      it('should have stochastic output', () => {
        expect(x).to.not.equal(y)
      })

      it('should be within range [0, 1)', () => {
        expect(x).to.be.within(0, 1)
        expect(y).to.be.within(0, 1)
      })
    })

    describe('xorshift7', () => {
      const [x, y] = twoPseudorandomNumbers('xorshift7')

      it('should have stochastic output', () => {
        expect(x).to.not.equal(y)
      })

      it('should be within range [0, 1)', () => {
        expect(x).to.be.within(0, 1)
        expect(y).to.be.within(0, 1)
      })
    })

    describe('xorwow', () => {
      const [x, y] = twoPseudorandomNumbers('xorwow')

      it('should have stochastic output', () => {
        expect(x).to.not.equal(y)
      })

      it('should be within range [0, 1)', () => {
        expect(x).to.be.within(0, 1)
        expect(y).to.be.within(0, 1)
      })
    })
  })
})
