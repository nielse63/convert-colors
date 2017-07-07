
import convert from '../../../src/convert-colors';

export default function IndexSpec() {
  describe('sanity', () => {
    it('should be a function', () => {
      expect(convert).to.be.a.function;
    });
  });

  describe('happy path', () => {
    const input = 'howdy';
    expect(convert(input)).to.equal(input);
  });

  describe('sad path', () => {
  });

  describe('bad path', () => {
  });
}
