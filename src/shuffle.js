import {
  chunk,
  length,
  multiply
} from 'neida'
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
