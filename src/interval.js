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

const interval = ({
  toPairs,
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

  const res = until({
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

  console.log({ intervalOutput: res })

  // TODO: Implement toPairs

  return res
}

export default interval
