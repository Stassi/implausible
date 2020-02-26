import { map } from 'neida'
import head from './head'

const mapHead = data => map({ data, transform: head })

export default mapHead
