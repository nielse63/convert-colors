
import { isString, isObject, isHexCode, minifyHex } from '../../../src/utils';
import { colors } from '../utils';

export default function UtilsSpec() {
  describe('utils', () => {
    describe('sanity', () => {
      it('isString should be a function', () => {
        expect(isString).to.be.a.function;
      });

      it('isObject should be a function', () => {
        expect(isObject).to.be.a.function;
      });

      it('isHexCode should be a function', () => {
        expect(isHexCode).to.be.a.function;
      });

      it('minifyHex should be a function', () => {
        expect(minifyHex).to.be.a.function;
      });
    });

    describe('#isString', () => {
      context('happy path', () => {
        it('should pass', () => {
          expect(
            isString('howdy')
          ).to.be.true;
        });
      });

      context('sad path', () => {
        it('should fail', () => {
          expect(
            isString(1)
          ).to.be.false;
        });
      });
    });

    describe('#isObject', () => {
      context('happy path', () => {
        it('should pass', () => {
          expect(
            isObject({})
          ).to.be.true;
        });
      });

      context('sad path', () => {
        it('should fail', () => {
          expect(
            isObject(1)
          ).to.be.false;
        });

        it('should fail', () => {
          expect(
            isObject([])
          ).to.be.false;
        });

        it('should fail', () => {
          expect(
            isObject('howdy')
          ).to.be.false;
        });
      });
    });

    describe('#isHexCode', () => {
      context('happy path', () => {
        it('should pass', () => {
          expect(
            isHexCode('#333')
          ).to.be.true;
        });

        it('should pass', () => {
          expect(
            isHexCode('#333333')
          ).to.be.true;
        });
      });

      context('sad path', () => {
        it('should fail', () => {
          expect(
            isHexCode('333333')
          ).to.be.false;
        });

        it('should fail', () => {
          expect(
            isHexCode('333')
          ).to.be.false;
        });
      });
    });

    describe('#minifyHex', () => {
      context('happy path', () => {
        colors.forEach(function(color) {
          if(color.shorthex) {
            it('should pass', () => {
              expect(
                minifyHex(color.hex)
              ).to.equal(color.shorthex.replace(/#/, ''));
            });
          }
        })
      });
    });
  });
}
