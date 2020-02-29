import { head, map } from 'neida'

const mapHead = collection => map({ collection, transform: head })

export default mapHead
