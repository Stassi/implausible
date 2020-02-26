import { map, reduce } from 'neida'

const zip = (headerArray, ...otherArrays) => map({
  data: headerArray,
  transform: (headerElement, headerIndex) => reduce({
    data: otherArrays,
    initialValue: [headerElement],
    reducer: (accumulator, currentArray) => [
      ...accumulator,
      currentArray[headerIndex]
    ]
  })
})

export default zip
