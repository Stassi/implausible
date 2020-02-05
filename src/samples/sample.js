import { head, pipe } from 'ramda'
import samples from './samples'

const sample = pipe(samples, head)

export default sample
