import {
  add,
  length,
  strictlyEquals,
  until
} from 'neida'
import slice from './slice'

const chunk = ({
  collection,
  length: chunkLength
}) => {
  const addChunkLength = x => add(x, chunkLength)

  const initialStart = 0

  return until({
    initialValue: {
      end: addChunkLength(initialStart),
      results: [],
      start: initialStart
    },
    predicate: ({ start }) => strictlyEquals(
      start,
      length(collection)
    ),
    transform: ({
      end,
      results,
      start
    }) => ({
      end: addChunkLength(end),
      results: [
        ...results,
        slice({
          collection,
          end,
          start
        })
      ],
      start: addChunkLength(start)
    })
  }).results
}

export default chunk
