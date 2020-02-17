import seedrandom from 'seedrandom'

const arc4 = seed => {
  const generic = seedrandom(seed)
  const {
    double,
    int32,
    quick
  } = generic

  return {
    double,
    generic,
    int32,
    quick
  }
}

export default arc4
