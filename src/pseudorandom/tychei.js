import seedrandom from 'seedrandom'

const algorithmName = 'tychei'

const alea = seed => {
  const generic = new seedrandom[algorithmName](seed)
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

export default alea
