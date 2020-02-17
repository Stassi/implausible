import { strictlyEquals } from 'neida'

const isNumber = x => strictlyEquals(
  'number',
  typeof x
)

export default isNumber
