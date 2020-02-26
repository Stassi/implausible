import {
  add,
  conditional,
  lessThan,
  map,
  reduce,
  sum,
  tail,
  until,
  withoutTail
} from 'neida'
import divide from './utilities/divide'
import findIndex from './utilities/findIndex'
import head from './utilities/head'
import isArray from './utilities/isArray'
import mapHead from './utilities/mapHead'
import mapTail from './utilities/mapTail'
import removeIndex from './utilities/removeIndex'
import withoutHead from './utilities/withoutHead'
import zip from './utilities/zip'
import zeroLength from './utilities/zeroLength'

const trimWeights = weights => withoutHead([
  ...withoutTail(weights),
  1
])

const sample = ({
  replacement,
  collection: collectionInput,
  intervals: intervalsInput
}) => until({
  initialValue: {
    intervals: intervalsInput,
    results: [],
    unitWeightPairs: map({
      data: collectionInput,
      transform: x => conditional({
        ifFalse: () => [x, 1],
        ifTrue: () => x,
        predicate: () => isArray(x)
      })
    })
  },
  predicate: ({ intervals }) => zeroLength(intervals),
  transform: ({
    intervals,
    results,
    unitWeightPairs
  }) => {
    const units = mapHead(unitWeightPairs)

    const chosenUnitIndex = findIndex({
      collection: zip(
        units,
        trimWeights(
          reduce({
            data: map({
              data: unitWeightPairs,
              transform: ([, weight]) => divide({
                dividend: weight,
                divisor: sum(
                  ...mapTail(unitWeightPairs)
                )
              })
            }),
            initialValue: [0],
            reducer: (sumOfPreviousWeights, weight) => [
              ...sumOfPreviousWeights,
              add(
                weight,
                tail(sumOfPreviousWeights)
              )
            ]
          })
        )
      ),
      predicate: ([, weight]) => lessThan({
        highest: weight,
        value: head(intervals)
      })
    })

    return {
      intervals: withoutHead(intervals),
      results: [
        ...results,
        units[chosenUnitIndex]
      ],
      unitWeightPairs: conditional({
        ifFalse: () => removeIndex({
          collection: unitWeightPairs,
          index: chosenUnitIndex
        }),
        ifTrue: () => unitWeightPairs,
        predicate: () => replacement
      })
    }
  }
}).results

export default sample
