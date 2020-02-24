import { describe, it } from 'mocha'
import { expect } from 'chai'
import forEach from '../src/utilities/forEach'
import sample from '../src/sample'
import sampleValues from './sampleValues'

describe('#sample', () => {
  describe('without intervals', () => {
    describe('count: 3', () => {
      const count = sampleValues.count

      describe('without seed', () => {
        describe('coin', () => {
          const collection = sampleValues.collections.coin.collection

          describe('without replacement', () => {
            const replacement = false
            const algorithms = sampleValues.collections.coin.withoutReplacement

            forEach({
              callback: ([prngName]) => {
                describe(`prng: ${prngName}`, () => {
                  it('should generate many non-deterministic samples', () => {
                    const res = sample({
                      collection,
                      count,
                      replacement,
                      prng: prngName
                    })
                    expect(res[0]).to.be.oneOf(collection)
                  })
                })
              },
              data: algorithms
            })
          })

          describe('with replacement', () => {
            const replacement = true
            const algorithms = sampleValues.collections.coin.withReplacement

            forEach({
              callback: ([prngName]) => {
                describe(`prng: ${prngName}`, () => {
                  it('should generate many non-deterministic samples', () => {
                    const res = sample({
                      collection,
                      count,
                      replacement,
                      prng: prngName
                    })
                    expect(res[0]).to.be.oneOf(collection)
                  })
                })
              },
              data: algorithms
            })
          })
        })

        describe('weighted coin', () => {
          const collection = sampleValues.collections.weightedCoin.collection

          describe('without replacement', () => {
            const replacement = false
            const algorithms = sampleValues.collections.weightedCoin.withoutReplacement

            forEach({
              callback: ([prngName]) => {
                describe(`prng: ${prngName}`, () => {
                  it('should generate many non-deterministic samples', () => {
                    const res = sample({
                      collection,
                      count,
                      replacement,
                      prng: prngName
                    })
                    expect(res[0]).to.be.oneOf(collection)
                  })
                })
              },
              data: algorithms
            })
          })

          describe('with replacement', () => {
            const replacement = true
            const algorithms = sampleValues.collections.weightedCoin.withReplacement

            forEach({
              callback: ([prngName]) => {
                describe(`prng: ${prngName}`, () => {
                  it('should generate many non-deterministic samples', () => {
                    const res = sample({
                      collection,
                      count,
                      replacement,
                      prng: prngName
                    })
                    expect(res[0]).to.be.oneOf(collection)
                  })
                })
              },
              data: algorithms
            })
          })
        })
      })

      describe('with seed', () => {
        const seed = sampleValues.seed

        describe('coin', () => {
          const collection = sampleValues.collections.coin.collection

          describe('without replacement', () => {
            const replacement = false
            const algorithms = sampleValues.collections.coin.withoutReplacement

            forEach({
              callback: ([prngName]) => {
                describe(`prng: ${prngName}`, () => {
                  it('should generate many deterministic samples', () => {
                    const res = sample({
                      collection,
                      count,
                      replacement,
                      seed,
                      prng: prngName
                    })
                    expect(res[0]).to.be.oneOf(collection)
                  })
                })
              },
              data: algorithms
            })
          })

          describe('with replacement', () => {
            const replacement = true
            const algorithms = sampleValues.collections.coin.withReplacement

            forEach({
              callback: ([prngName]) => {
                describe(`prng: ${prngName}`, () => {
                  it('should generate many deterministic samples', () => {
                    const res = sample({
                      collection,
                      count,
                      replacement,
                      seed,
                      prng: prngName
                    })
                    expect(res[0]).to.be.oneOf(collection)
                  })
                })
              },
              data: algorithms
            })
          })
        })

        describe('weighted coin', () => {
          const collection = sampleValues.collections.weightedCoin.collection

          describe('without replacement', () => {
            const replacement = false
            const algorithms = sampleValues.collections.weightedCoin.withoutReplacement

            forEach({
              callback: ([prngName]) => {
                describe(`prng: ${prngName}`, () => {
                  it('should generate many deterministic samples', () => {
                    const res = sample({
                      collection,
                      count,
                      replacement,
                      seed,
                      prng: prngName
                    })
                    expect(res[0]).to.be.oneOf(collection)
                  })
                })
              },
              data: algorithms
            })
          })

          describe('with replacement', () => {
            const replacement = true
            const algorithms = sampleValues.collections.weightedCoin.withReplacement

            forEach({
              callback: ([prngName]) => {
                describe(`prng: ${prngName}`, () => {
                  it('should generate many deterministic samples', () => {
                    const res = sample({
                      collection,
                      count,
                      replacement,
                      seed,
                      prng: prngName
                    })
                    expect(res[0]).to.be.oneOf(collection)
                  })
                })
              },
              data: algorithms
            })
          })
        })
      })
    })
  })

  describe('with intervals', () => {
    const intervals = [
      0.3,
      0.5,
      0.5,
      0.5,
      0.7
    ]

    describe('6-sided die', () => {
      const collection = [1, 2, 3, 4, 5, 6]

      describe('without replacement', () => {
        const replacement = false

        it('should generate many deterministic samples', () => {
          const res = sample({
            collection,
            intervals,
            replacement
          })

          expect(res).to.have.ordered.members([
            'debug',
            'debug',
            'debug',
            'debug',
            'debug'
          ])
        })
      })

      describe('with replacement', () => {
        const replacement = true

        it('should generate many deterministic samples', () => {
          const res = sample({
            collection,
            intervals,
            replacement
          })

          expect(res).to.have.ordered.members([
            'debug',
            'debug',
            'debug',
            'debug',
            'debug'
          ])
        })
      })
    })

    describe('6-sided weighted die (biased evens)', () => {
      const collection = [
        [1, 1],
        [2, 100],
        [3, 1],
        [4, 100],
        [5, 1],
        [6, 100]
      ]

      describe('without replacement', () => {
        const replacement = false

        it('should generate many deterministic samples', () => {
          const res = sample({
            collection,
            intervals,
            replacement
          })

          expect(res).to.have.ordered.members([
            'debug',
            'debug',
            'debug',
            'debug',
            'debug'
          ])
        })
      })

      describe('with replacement', () => {
        const replacement = true

        it('should generate many deterministic samples', () => {
          const res = sample({
            collection,
            intervals,
            replacement
          })

          expect(res).to.have.ordered.members([
            'debug',
            'debug',
            'debug',
            'debug',
            'debug'
          ])
        })
      })
    })
  })
})
