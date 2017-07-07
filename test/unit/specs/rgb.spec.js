
import { rgbToHex, rgbToHSL } from '../../../src/rgb';
import { minifyHex } from '../../../src/utils';
import { colors, expandHex } from '../utils';

export default function RGBSpec() {
  describe('rgb', () => {
    describe('sanity', () => {
      it('rgbToHex should be a function', () => {
        expect(rgbToHex).to.be.a.function;
      });

      it('rgbToHSL should be a function', () => {
        expect(rgbToHSL).to.be.a.function;
      });
    });

    describe('#rgbToHex', () => {
      context('happy path', () => {
        colors.forEach((color) => {
          const expected = `#${minifyHex(color.hex)}`
          it(`should convert ${JSON.stringify(color.rgb)} to ${expected}`, () => {
            expect(
              rgbToHex(color.rgb)
            ).to.equal(expected);
          });
        });
      });
    });

    describe('#rgbToHSL', () => {
      context('happy path', () => {
        colors.forEach((color) => {
          it(`should convert ${JSON.stringify(color.rgb)} to ${JSON.stringify(color.hsl)}`, () => {
            expect(
              rgbToHSL(color.rgb)
            ).to.deep.match(color.hsl);
          });
        });
      });
    });
  });
}
