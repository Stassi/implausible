import { add, negate } from 'neida'
import multiply from './multiply'

const scale = ({
  interval,
  maximum,
  minimum
}) => add(
  minimum,
  multiply(
    interval,
    add(
      maximum,
      negate(minimum)
    )
  )
)

export default scale
