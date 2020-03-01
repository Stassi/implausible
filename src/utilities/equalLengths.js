import {
  length,
  map,
  strictEqual
} from 'neida'

const equalLengths = (...collection) => strictEqual(
  ...map({
    collection,
    transform: length
  })
)

export default equalLengths
