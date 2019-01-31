import { expect } from 'chai';
import { weighted } from '../src';

describe('weighted pseudorandom number generator', () => {
  it('should have tests', () => {
    expect(weighted()).to.be.false;
  });
});
