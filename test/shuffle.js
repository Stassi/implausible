import { describe, it } from 'mocha'
import { expect } from 'chai'
import shuffle from '../src/shuffle'

describe('#shuffle', () => {
  describe('count: 1', () => {
    const count = 1

    describe('without seed', () => {
      describe('6-sided die', () => {
        const collection = [1, 2, 3, 4, 5, 6]

        it('should generate many non-deterministic shuffled samples', () => {
          const res = shuffle({
            collection,
            count
          })[0]

          expect(res[0]).to.be.oneOf(collection)
          expect(res[1]).to.be.oneOf(collection)
          expect(res[2]).to.be.oneOf(collection)
          expect(res[3]).to.be.oneOf(collection)
          expect(res[4]).to.be.oneOf(collection)
          expect(res[5]).to.be.oneOf(collection)
        })
      })
    })
  })

  describe('count: 3', () => {
    const count = 3

    describe('with seed', () => {
      const seed = 'hello.'

      describe('6-sided die', () => {
        const collection = [1, 2, 3, 4, 5, 6]

        describe('replacement: false', () => {
          const replacement = false

          it('should generate many deterministic shuffled samples', () => {
            const res = shuffle({
              collection,
              count,
              seed,
              replacement
            })

            expect(res).to.have.deep.ordered.members([
              [
                6,
                2,
                4,
                1,
                3,
                5
              ],
              [
                5,
                4,
                6,
                3,
                2,
                1
              ],
              [
                5,
                2,
                3,
                1,
                4,
                6
              ]
            ])
          })
        })

        describe('replacement: true', () => {
          const replacement = true

          it('should generate many deterministic shuffled samples', () => {
            const res = shuffle({
              collection,
              count,
              seed,
              replacement
            })

            expect(res).to.have.deep.ordered.members([
              [
                6,
                3,
                5,
                2,
                1,
                4
              ],
              [
                5,
                5,
                5,
                5,
                6,
                1
              ],
              [
                5,
                2,
                3,
                2,
                1,
                1
              ]
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

        describe('replacement: false', () => {
          const replacement = false

          describe('prng: arc4', () => {
            const prng = 'arc4'

            it('should generate many deterministic shuffled samples', () => {
              const res = shuffle({
                collection,
                count,
                prng,
                replacement,
                seed
              })

              expect(res).to.have.deep.ordered.members([
                [
                  6,
                  2,
                  4,
                  1,
                  3,
                  5
                ],
                [
                  6,
                  4,
                  2,
                  5,
                  3,
                  1
                ],
                [
                  6,
                  2,
                  4,
                  1,
                  3,
                  5
                ]
              ])
            })
          })

          describe('prng: xorwow', () => {
            const prng = 'xorwow'

            it('should generate many deterministic shuffled samples', () => {
              const res = shuffle({
                collection,
                count,
                prng,
                replacement,
                seed
              })

              expect(res).to.have.deep.ordered.members([
                [
                  2,
                  6,
                  4,
                  3,
                  1,
                  5
                ],
                [
                  2,
                  4,
                  6,
                  5,
                  3,
                  1
                ],
                [
                  6,
                  4,
                  2,
                  3,
                  5,
                  1
                ]
              ])
            })
          })
        })

        describe('replacement: true', () => {
          const replacement = true

          it('should generate many deterministic shuffled samples', () => {
            const res = shuffle({
              collection,
              count,
              seed,
              replacement
            })

            expect(res).to.have.deep.ordered.members([
              [
                6,
                4,
                6,
                2,
                2,
                4
              ],
              [
                6,
                6,
                6,
                6,
                6,
                2
              ],
              [
                6,
                2,
                4,
                2,
                2,
                2
              ]
            ])
          })
        })
      })
    })
  })
})
