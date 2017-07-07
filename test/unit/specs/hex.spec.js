
import { hexToRGB, hexToHSL } from '../../../src/hex';
import { minifyHex } from '../../../src/utils';
import { colors } from '../utils';

export default function HexSpec() {
  describe('hex', () => {
    describe('sanity', () => {
      it('hexToRGB should be a function', () => {
        expect(hexToRGB).to.be.a.function;
      });
    });

    describe('#hexToRGB', () => {
      context('happy path', () => {
        colors.forEach((color) => {

          if(color.shorthex) {
            it(`should convert ${color.shorthex} to ${JSON.stringify(color.rgb)}`, () => {
              expect(
                hexToRGB(color.shorthex)
              ).to.deep.match(color.rgb);
            });
          } else {
            it(`should convert ${color.hex} to ${JSON.stringify(color.rgb)}`, () => {
              expect(
                hexToRGB(color.hex)
              ).to.deep.match(color.rgb);
            });
          }

          it(`should convert ${color.hex} without the #`, () => {
            expect(
              hexToRGB(color.hex.replace(/#/, ''))
            ).to.deep.match(color.rgb);
          });
        });
      });

      context('sad path', () => {
        it(`should throw on invalid hex code`, () => {
          expect(
            hexToRGB.bind(null, false)
          ).to.throw();
        });
      });
    });

    describe('#hexToHSL', () => {
      context('happy path', () => {
        colors.forEach((color) => {
          it(`should convert ${color.hex} to ${JSON.stringify(color.hsl)}`, () => {
            expect(
              hexToHSL(color.hex)
            ).to.deep.match(color.hsl);
          });
        });
      });
    });
  });
}
