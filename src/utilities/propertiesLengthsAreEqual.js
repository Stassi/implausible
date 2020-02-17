import { strictlyEquals } from 'neida'
import propertiesLength from './propertiesLength'

const propertiesLengthsAreEqual = (x, y) => strictlyEquals(
  propertiesLength(x),
  propertiesLength(y)
)

export default propertiesLengthsAreEqual
