import { pipe, prop } from 'ramda'
import findCeilingGreaterThanGenerated from './findCeilingGreaterThanGenerated'
import prng from '../prng'

const toGenerated = ({
  name,
  seed,
  ...props
}) => ({
  ...props,
  generated: prng({ name, seed })
})

const toFindCeilingGreaterThanGenerated = ({ generated, ...props }) => ({
  ...props,
  findCeilingGreaterThanGenerated: findCeilingGreaterThanGenerated(generated)
})

const applyCeilings = ({
  ceilings,
  // TODO: Resolve variable name conflict with upper scope
  // eslint-disable-next-line no-shadow
  findCeilingGreaterThanGenerated
}) => findCeilingGreaterThanGenerated(ceilings)

const nameProp = prop('name')

const one = pipe(
  toGenerated,
  toFindCeilingGreaterThanGenerated,
  applyCeilings,
  nameProp
)

export default one
