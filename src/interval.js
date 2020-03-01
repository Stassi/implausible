import {
  addOne,
  conditional,
  flatten,
  includes,
  map,
  range,
  scale,
  typeIs,
  until,
} from 'neida'
import equalLengths from './utilities/equalLengths'
import toSet from './utilities/toSet'
import values from './utilities/values'
import pseudorandom from './pseudorandom'

const interval = ({
  labelGenerations,
  maximum = 1,
  minimum = 0,
  count = 0,
  generations: generationsInput = [],
  prng: prngName = 'arc4',
  seed: seedInput
} = {}) => {
  const generations = toSet(
    flatten(
      map({
        collection: [
          [0, count],
          ...generationsInput
        ],
        transform: value => conditional({
          ifFalse: () => range({
            maximum: value[1],
            minimum: value[0]
          }),
          ifTrue: () => value,
          predicate: () => typeIs({ value, type: 'number' })
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
    predicate: ({ accumulator }) => equalLengths(
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
          ifFalse: () => {
            prng()
            return {}
          },
          ifTrue: () => ({
            [generation]: scale({
              maximum,
              minimum,
              interval: prng()
            })
          }),
          predicate: () => includes({
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
