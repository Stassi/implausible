import { length } from 'neida'
import properties from './properties'

const propertiesLength = x => length(
  properties(x)
)

export default propertiesLength
