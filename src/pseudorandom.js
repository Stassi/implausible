import seedrandom from 'seedrandom'

// TODO: Merge into debugAlpha via conditional assignment to const "generic"
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

// TODO: Rename
const debugAlpha = ({ prngName, seed }) => {
  const generic = new seedrandom[prngName](seed)
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

// TODO: Rename
// TODO: Map object from array
const debugBeta = {
  alea: seed => debugAlpha({ seed, prngName: 'alea' }),
  tychei: seed => debugAlpha({ seed, prngName: 'tychei' })
}

const pseudorandom = {
  arc4,
  ...debugBeta
}

export default pseudorandom
