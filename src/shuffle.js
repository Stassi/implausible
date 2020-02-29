import { length } from 'neida'
import chunk from './utilities/chunk'
import multiply from './utilities/multiply'
import sample from './sample'

const shuffle = ({
  collection,
  count,
  prng,
  replacement,
  seed
}) => {
  const collectionLength = length(collection)

  return chunk({
    collection: sample({
      collection,
      prng,
      replacement,
      seed,
      count: multiply(
        collectionLength,
        count
      )
    }),
    length: collectionLength
  })
}

export default shuffle
