import { map, tail } from 'neida'

const mapTail = collection => map({ collection, transform: tail })

export default mapTail
