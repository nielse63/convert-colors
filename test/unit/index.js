
import chai from 'chai';
import asserttype from 'chai-asserttype';
import chaiDeepMatch from 'chai-deep-match';
import IndexSpec from './specs/index.spec';
import UtilsSpec from './specs/utils.spec';
import HexSpec from './specs/hex.spec';
import RGBSpec from './specs/rgb.spec';

chai.use(asserttype);
chai.use(chaiDeepMatch);

global.expect = chai.expect;

IndexSpec();
UtilsSpec();
HexSpec();
RGBSpec();
