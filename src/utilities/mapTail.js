import { map, tail } from 'neida'

const mapTail = data => map({ data, transform: tail })

export default mapTail
