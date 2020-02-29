import { describe, it } from 'mocha'
import { expect } from 'chai'
import { entries, forEach } from 'neida'
import pseudorandom from '../src/pseudorandom'
import prngValues from './prngValues'

describe('#pseudorandom', () => {
  const { algorithms, seed } = prngValues

  describe('with seed', () => {
    const prngs = pseudorandom(seed)

    forEach({
      callback: ([, [prngName, prngValues]]) => {
        describe(`prng: ${prngName}`, () => {
          const prng = prngs[prngName]

          forEach({
            callback: ([generation, prngValue]) => {
              describe(`generation: ${generation}`, () => {
                it('should generate a deterministic number', () => {
                  expect(prng()).to.equal(prngValue)
                })
              })
            },
            collection: prngValues
          })
        })
      },
      collection: entries(algorithms)
    })
  })

  describe('without seed', () => {
    const prngs = pseudorandom()

    forEach({
      callback: ([, [prngName, prngValues]]) => {
        describe(`prng: ${prngName}`, () => {
          const prng = prngs[prngName]

          forEach({
            callback: ([generation]) => {
              describe(`generation: ${generation}`, () => {
                it('should generate a non-deterministic number', () => {
                  expect(prng()).to.be.a('number')
                })
              })
            },
            collection: prngValues
          })
        })
      },
      collection: entries(algorithms)
    })
  })
})
