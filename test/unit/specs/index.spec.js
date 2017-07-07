
import pkg from '../../../';

export default function IndexSpec() {
  describe('sanity', () => {
    it('should be a function', () => {
      expect(pkg).to.be.a.function;
    });
  });

  describe('happy path', () => {
    const input = 'howdy';
    expect(pkg(input)).to.equal(input);
  });

  describe('sad path', () => {
  });

  describe('bad path', () => {
  });
}
