import {ExternalTokenizer} from "lezer";
// @ts-ignore
import {Or, Nor, NegOr, NegNor} from "./bexprParser.terms.js";

const bang = 33;

export const negatedOperator = new ExternalTokenizer((input, token, stack) => {
  let pos = token.start, next = input.get(pos);
  if (next === bang) {

  }

})



