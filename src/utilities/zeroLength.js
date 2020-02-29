import { length, strictlyEquals } from 'neida'

const zeroLength = x => strictlyEquals(
  length(x),
  0
)

export default zeroLength
