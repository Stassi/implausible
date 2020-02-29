import { strictEqual } from 'neida'
import propertiesLength from './propertiesLength'

const propertiesLengthsAreEqual = (x, y) => strictEqual(
  propertiesLength(x),
  propertiesLength(y)
)

export default propertiesLengthsAreEqual
