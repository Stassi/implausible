import { describe, it } from 'mocha'
import { expect } from 'chai'
import { map } from 'neida'
import scale from '../src/utilities/scale'

const scaleMany = ({ intervals, ...props }) => map({
  data: intervals,
  transform: interval => scale({
    interval,
    ...props
  })
})

describe('#scale', () => {
  const intervals = [0, 0.25, 0.5, 0.75]

  describe('minimum: -1', () => {
    const minimum = -1

    describe('maximum: -0.5', () => {
      const maximum = -0.5

      it('should scale intervals to a range', () => {
        const res = scaleMany({
          intervals,
          maximum,
          minimum
        })

        expect(res).to.have.ordered.members([
          -1,
          -0.875,
          -0.75,
          -0.625
        ])
      })
    })

    describe('maximum: 0', () => {
      const maximum = 0

      it('should scale intervals to a range', () => {
        const res = scaleMany({
          intervals,
          maximum,
          minimum
        })

        expect(res).to.have.ordered.members([
          -1,
          -0.75,
          -0.5,
          -0.25
        ])
      })
    })

    describe('maximum: 1', () => {
      const maximum = 1

      it('should scale intervals to a range', () => {
        const res = scaleMany({
          intervals,
          maximum,
          minimum
        })

        expect(res).to.have.ordered.members([
          -1,
          -0.5,
          0,
          0.5
        ])
      })
    })
  })

  describe('minimum: 0', () => {
    const minimum = 0

    describe('maximum: 0.5', () => {
      const maximum = 0.5

      it('should scale intervals to a range', () => {
        const res = scaleMany({
          intervals,
          maximum,
          minimum
        })

        expect(res).to.have.ordered.members([
          0,
          0.125,
          0.25,
          0.375
        ])
      })
    })

    describe('maximum: 1', () => {
      const maximum = 1

      it('should scale intervals to a range', () => {
        const res = scaleMany({
          intervals,
          maximum,
          minimum
        })

        expect(res).to.have.ordered.members([
          0,
          0.25,
          0.5,
          0.75
        ])
      })
    })

    describe('maximum: 2', () => {
      const maximum = 2

      it('should scale intervals to a range', () => {
        const res = scaleMany({
          intervals,
          maximum,
          minimum
        })

        expect(res).to.have.ordered.members([
          0,
          0.5,
          1,
          1.5
        ])
      })
    })
  })
})
