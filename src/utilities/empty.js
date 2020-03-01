import { length, strictEqual } from 'neida'

const empty = x => strictEqual(
  length(x),
  0
)

export default empty
