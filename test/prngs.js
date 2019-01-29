import { expect } from 'chai';
import {
  alea,
  arc4,
  tychei,
  xor128,
  xor4096,
  xorshift7,
  xorwow,
} from '../src';

describe('pseudorandom number generator', () => {
  describe('seeded', () => {
    const seed = 'hello.';

    describe('alea', () => {
      it('should have deterministic output', () => {
        expect(alea(seed)).to.equal(0.4783254903741181);
      });
    });

    describe('arc4', () => {
      it('should have deterministic output', () => {
        expect(arc4(seed)).to.equal(0.9282578795792454);
      });
    });

    describe('tychei', () => {
      it('should have deterministic output', () => {
        expect(tychei(seed)).to.equal(0.4676165450364351);
      });
    });

    describe('xor128', () => {
      it('should have deterministic output', () => {
        expect(xor128(seed)).to.equal(0.698391932528466);
      });
    });

    describe('xor4096', () => {
      it('should have deterministic output', () => {
        expect(xor4096(seed)).to.equal(0.9798525865189731);
      });
    });

    describe('xorshift7', () => {
      it('should have deterministic output', () => {
        expect(xorshift7(seed)).to.equal(0.7404357127379626);
      });
    });

    describe('xorwow', () => {
      it('should have deterministic output', () => {
        expect(xorwow(seed)).to.equal(0.14254314289428294);
      });
    });
  });

  describe('unseeded', () => {
    describe('alea', () => {
      it('should have stochastic output', () => {
        expect(alea()).to.be.within(0, 1);
      });
    });

    describe('arc4', () => {
      it('should have stochastic output', () => {
        expect(arc4()).to.be.within(0, 1);
      });
    });

    describe('tychei', () => {
      it('should have stochastic output', () => {
        expect(tychei()).to.be.within(0, 1);
      });
    });

    describe('xor128', () => {
      it('should have stochastic output', () => {
        expect(xor128()).to.be.within(0, 1);
      });
    });

    describe('xor4096', () => {
      it('should have stochastic output', () => {
        expect(xor4096()).to.be.within(0, 1);
      });
    });

    describe('xorshift7', () => {
      it('should have stochastic output', () => {
        expect(xorshift7()).to.be.within(0, 1);
      });
    });

    describe('xorwow', () => {
      it('should have stochastic output', () => {
        expect(xorwow()).to.be.within(0, 1);
      });
    });
  });
});
