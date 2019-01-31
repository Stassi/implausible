import { expect } from 'chai';
import { weighted } from '../src';

describe('weighted pseudorandom number generator', () => {
  // TODO: Rename
  it('should have tests', () => {
    expect(weighted({
      distribution: {
        x: 4,
        y: 1,
        z: 2,
      },
      seed: 'hello.',
    })).to.equal('y');
  });
});
