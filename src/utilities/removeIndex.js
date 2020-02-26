const removeIndex = ({ collection, index }) => {
  collection.splice(index, 1)
  return collection
}

export default removeIndex
