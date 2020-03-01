import {
  add,
  conditional,
  divide,
  empty,
  findIndex,
  head,
  lessThan,
  map,
  reduce,
  sum,
  tail,
  typeIs,
  until,
  withoutHead,
  withoutIndex,
  withoutTail,
  zip
} from 'neida'
import interval from './interval'

const mapHead = collection => map({ collection, transform: head })
const mapTail = collection => map({ collection, transform: tail })

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
    transform: value => conditional({
      ifFalse: () => [value, 1],
      ifTrue: () => value,
      predicate: () => typeIs({ value, type: 'array' })
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
    predicate: ({ intervals }) => empty(intervals),
    transform: ({
      intervals,
      results,
      unitWeightPairs: depletedUnitWeightPairs
    }) => {
      const unitWeightPairs = conditional({
        ifFalse: () => depletedUnitWeightPairs,
        ifTrue: () => initialUnitWeightPairs,
        predicate: () => empty(depletedUnitWeightPairs)
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
          ifFalse: () => withoutIndex({
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
