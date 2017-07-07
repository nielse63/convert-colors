
import { isObject, isHexCode } from './utils';

export default function convert(input) {
  if (isHexCode(input)) {
    // convert hex code
  } else if (isObject(input)) {
    // convert object
  }
  return input;
}
