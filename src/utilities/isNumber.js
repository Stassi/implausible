import { strictEqual } from 'neida'

const isNumber = x => strictEqual(
  'number',
  typeof x
)

export default isNumber
