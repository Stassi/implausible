import { describe, it } from 'mocha'
import { expect } from 'chai'
import chunk from '../src/utilities/chunk'

describe('#chunk', () => {
  describe('collection: {a...f}', () => {
    const collection = ['a', 'b', 'c', 'd', 'e', 'f']

    describe('length: 2', () => {
      const length = 2

      it('needs a name', () => {
        expect(
          chunk({ collection, length })
        ).to.have.deep.ordered.members([
          ['a', 'b'],
          ['c', 'd'],
          ['e', 'f']
        ])
      })
    })

    describe('length: 3', () => {
      const length = 3

      it('needs a name', () => {
        expect(
          chunk({ collection, length })
        ).to.have.deep.ordered.members([
          ['a', 'b', 'c'],
          ['d', 'e', 'f']
        ])
      })
    })
  })
})
