import { length, strictEqual } from 'neida'

const zeroLength = x => strictEqual(
  length(x),
  0
)

export default zeroLength
