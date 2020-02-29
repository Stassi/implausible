import { map, reduce } from 'neida'

const zip = (headerArray, ...otherArrays) => map({
  collection: headerArray,
  transform: (headerElement, headerIndex) => reduce({
    collection: otherArrays,
    initialValue: [headerElement],
    reducer: (accumulator, currentArray) => [
      ...accumulator,
      currentArray[headerIndex]
    ]
  })
})

export default zip
