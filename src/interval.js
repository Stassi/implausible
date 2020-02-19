import {
  addOne,
  conditional,
  map,
  range,
  until
} from 'neida'
import flatten from './utilities/flatten'
import includedIn from './utilities/includedIn'
import isNumber from './utilities/isNumber'
import propertiesLengthsAreEqual from './utilities/propertiesLengthsAreEqual'
import toSet from './utilities/toSet'
import pseudorandom from './pseudorandom'
import values from './utilities/values'

const interval = ({
  labelGenerations,
  count = 0,
  generations: generationsInput = [],
  prng: prngName = 'arc4',
  seed: seedInput
} = {}) => {
  const generations = toSet(
    flatten(
      map({
        data: [
          [0, count],
          ...generationsInput
        ],
        transform: x => conditional({
          ifFalse: () => range({
            maximum: x[1],
            minimum: x[0]
          }),
          ifTrue: () => x,
          predicate: () => isNumber(x)
        })
      })
    )
  )

  const labeledResults = until({
    initialValue: {
      accumulator: {},
      generation: 0,
      prng: pseudorandom(
        seedInput || pseudorandom().arc4()
      )[prngName]
    },
    predicate: ({ accumulator }) => propertiesLengthsAreEqual(
      accumulator,
      generations
    ),
    transform: ({
      accumulator,
      generation,
      prng
    }) => ({
      prng,
      accumulator: {
        ...accumulator,
        ...conditional({
          ifFalse: () => ({}),
          ifTrue: () => ({ [generation]: prng() }),
          predicate: () => includedIn({
            collection: generations,
            element: generation
          })
        })
      },
      generation: addOne(generation)
    })
  }).accumulator

  return conditional({
    ifFalse: () => values(labeledResults),
    ifTrue: () => labeledResults,
    predicate: () => labelGenerations
  })
}

export default interval
