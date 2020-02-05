import { applySpec } from 'ramda'
import divideBySumOfValues from './divideBySumOfValues'
import namesByDescendingWeight from './namesByDescendingWeight'

const toDivideBySumOfValuesAndNamesByDescendingWeight = applySpec({
  divideBySumOfValues,
  namesByDescendingWeight
})

export default toDivideBySumOfValuesAndNamesByDescendingWeight
