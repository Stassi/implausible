import {
  add,
  conditional,
  divide,
  findIndex,
  head,
  lessThan,
  map,
  reduce,
  sum,
  tail,
  until,
  withoutTail
} from 'neida'
import isArray from './utilities/isArray'
import mapHead from './utilities/mapHead'
import mapTail from './utilities/mapTail'
import removeIndex from './utilities/removeIndex'
import withoutHead from './utilities/withoutHead'
import zeroLength from './utilities/zeroLength'
import zip from './utilities/zip'
import interval from './interval'

const trimWeights = weights => withoutHead([
  ...withoutTail(weights),
  1
])

const sample = ({
  replacement,
  collection: collectionInput,
  intervals: intervalsInput,
  ...intervalOptions
}) => {
  const initialUnitWeightPairs = map({
    collection: collectionInput,
    transform: x => conditional({
      ifFalse: () => [x, 1],
      ifTrue: () => x,
      predicate: () => isArray(x)
    })
  })

  return until({
    initialValue: {
      intervals: conditional({
        ifFalse: () => interval(intervalOptions),
        ifTrue: () => intervalsInput,
        predicate: () => intervalsInput
      }),
      results: [],
      unitWeightPairs: initialUnitWeightPairs
    },
    predicate: ({ intervals }) => zeroLength(intervals),
    transform: ({
      intervals,
      results,
      unitWeightPairs: depletedUnitWeightPairs
    }) => {
      const unitWeightPairs = conditional({
        ifFalse: () => depletedUnitWeightPairs,
        ifTrue: () => initialUnitWeightPairs,
        predicate: () => zeroLength(depletedUnitWeightPairs)
      })

      const units = mapHead(unitWeightPairs)

      const chosenUnitIndex = findIndex({
        collection: zip(
          units,
          trimWeights(
            reduce({
              collection: map({
                collection: unitWeightPairs,
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
}

export default sample
