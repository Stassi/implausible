const removeIndex = ({ collection, index }) => {
  const mutableCollection = [...collection]
  mutableCollection.splice(index, 1)
  return mutableCollection
}

export default removeIndex