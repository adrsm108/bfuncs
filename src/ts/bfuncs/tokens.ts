//@ts-ignore
import {None, Dec, Bin, Hex, Oct} from "./termsParser.terms.js";

export function term(value: string) {
  return /^\d+(_\d+)*$/.test(value)
    ? Dec
    : /^0x[a-fA-F\d]+(_[a-fA-F\d]+)*$/.test(value)
    ? Hex
    : /^0o[0-7]+(_[0-7]+)*$/.test(value)
    ? Oct
    : /^0b[01]+(_[01]+)*$/.test(value)
    ? Bin
    : None;
}
