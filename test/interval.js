import { describe, it } from 'mocha'
import { expect } from 'chai'
import { interval } from '../src'
import forEach from '../src/utilities/forEach'
import prngNames from '../src/prngNames'

describe('#interval', () => {
  describe('without seed', () => {
    describe('count: 1', () => {
      it('should generate a non-deterministic number', () => {
        expect(interval({ count: 1 })[0]).to.be.at.least(0).and.below(1)
      })
    })

    describe('count: 3', () => {
      forEach({
        callback: ([, prngName]) => {
          describe(`prng: ${prngName}`, () => {
            it('should generate many non-deterministic numbers', () => {
              const res = interval({ count: 3, prng: prngName })
              expect(res[0]).to.be.at.least(0).and.below(1)
              expect(res[1]).to.be.at.least(0).and.below(1)
              expect(res[2]).to.be.at.least(0).and.below(1)
            })
          })
        },
        data: prngNames
      })
    })
  })

  describe('with seed', () => {
    const seed = 'hello.'

    describe('count: 1', () => {
      it('should generate a deterministic number', () => {
        expect(interval({ seed, count: 1 })[0]).to.equal(0.9282578795792454)
      })

      describe('with scaling', () => {
        it('should generate a deterministic number scaled to a range', () => {
          expect(
            interval({
              maximum: -10,
              minimum: -20,
              seed,
              count: 1
            })[0]
          ).to.equal(-10.717421204207545)
        })
      })
    })

    describe('count: 3', () => {
      const count = 3

      describe('prng: alea', () => {
        it('should generate many deterministic numbers', () => {
          const res = interval({ count, seed, prng: 'alea' })
          expect(res[0]).to.equal(0.4783254903741181)
          expect(res[1]).to.equal(0.8297006865032017)
          expect(res[2]).to.equal(0.46924330526962876)
        })
      })

      describe('prng: arc4', () => {
        it('should generate many deterministic numbers', () => {
          const res = interval({ count, seed, prng: 'arc4' })
          expect(res[0]).to.equal(0.9282578795792454)
          expect(res[1]).to.equal(0.3752569768646784)
          expect(res[2]).to.equal(0.7316977468919549)
        })
      })

      describe('prng: tychei', () => {
        it('should generate many deterministic numbers', () => {
          const res = interval({ count, seed, prng: 'tychei' })
          expect(res[0]).to.equal(0.4676165450364351)
          expect(res[1]).to.equal(0.794256798690185)
          expect(res[2]).to.equal(0.8909397614188492)
        })
      })

      describe('prng: xor128', () => {
        it('should generate many deterministic numbers', () => {
          const res = interval({ count, seed, prng: 'xor128' })
          expect(res[0]).to.equal(0.698391932528466)
          expect(res[1]).to.equal(0.6919899098575115)
          expect(res[2]).to.equal(0.5514540106523782)
        })
      })

      describe('prng: xor4096', () => {
        it('should generate many deterministic numbers', () => {
          const res = interval({ count, seed, prng: 'xor4096' })
          expect(res[0]).to.equal(0.9798525865189731)
          expect(res[1]).to.equal(0.035834695445373654)
          expect(res[2]).to.equal(0.9905578466132283)
        })
      })

      describe('prng: xorshift7', () => {
        it('should generate many deterministic numbers', () => {
          const res = interval({ count, seed, prng: 'xorshift7' })
          expect(res[0]).to.equal(0.7404357127379626)
          expect(res[1]).to.equal(0.017942105419933796)
          expect(res[2]).to.equal(0.1670631943270564)
        })
      })

      describe('prng: xorwow', () => {
        it('should generate many deterministic numbers', () => {
          const res = interval({ count, seed, prng: 'xorwow' })
          expect(res[0]).to.equal(0.14254314289428294)
          expect(res[1]).to.equal(0.5642471052706242)
          expect(res[2]).to.equal(0.8030998287722468)
        })
      })
    })

    describe('generations: 0, 10', () => {
      it('should have distinct values', () => {
        expect(
          interval({
            seed,
            generations: [0]
          })[0]
        ).to.not.equal(
          interval({
            seed,
            generations: [100]
          })[0]
        )
      })
    })

    describe('generations: [0, 3, 10]', () => {
      it('should generate many deterministic numbers', () => {
        const res = interval({
          seed,
          generations: [0, 3, 10],
          labelGenerations: true
        })
        expect(res[0]).to.equal(0.9282578795792454)
        expect(res[3]).to.equal(0.23707962084956113)
        expect(res[10]).to.equal(0.959300020541289)
      })
    })

    describe('generations: [[0, 3], 10]', () => {
      it('should generate many deterministic numbers', () => {
        const res = interval({
          seed,
          generations: [[0, 3], 10],
          labelGenerations: true
        })
        expect(res[0]).to.equal(0.9282578795792454)
        expect(res[1]).to.equal(0.3752569768646784)
        expect(res[2]).to.equal(0.7316977468919549)
        expect(res[10]).to.equal(0.959300020541289)
      })
    })
  })
})
