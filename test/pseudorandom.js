import { describe, it } from 'mocha'
import { expect } from 'chai'
import entries from '../src/utilities/entries'
import forEach from '../src/utilities/forEach'
import properties from '../src/utilities/properties'
import pseudorandom from '../src/pseudorandom/pseudorandom'
import prngValues from './prngValues'

describe('#pseudorandom', () => {
  const { algorithms, seed } = prngValues

  forEach({
    callback: ([, prngName]) => {
      describe(`prng: ${prngName}`, () => {
        describe('without seed', () => {
          const prng = pseudorandom[prngName]()

          describe('variant: int32', () => {
            it('should generate a non-deterministic number', () => {
              expect(prng.int32()).to.be.a('number')
            })
          })

          forEach({
            callback: ([, name]) => {
              describe(`variant: ${name}`, () => {
                it('should generate a non-deterministic interval', () => {
                  expect(prng[name]()).to.be.at.least(0).and.below(1)
                })
              })
            },
            data: [
              'double',
              'generic',
              'quick'
            ]
          })
        })

        describe('with seed', () => {
          const prng = pseudorandom[prngName](seed)

          forEach({
            callback: ([, [generation, values]]) => {
              describe(`generation: ${generation}`, () => {
                forEach({
                  callback: ([name, value]) => {
                    describe(`variant: ${name}`, () => {
                      it('should generate a deterministic number', () => {
                        expect(prng[name]()).to.equal(value)
                      })
                    })
                  },
                  data: values
                })
              })
            },
            data: entries(
              algorithms[prngName]
            )
          })
        })
      })
    },
    data: properties(pseudorandom)
  })
})
