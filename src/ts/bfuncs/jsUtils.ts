type BooleanFunctionValue = boolean | null;
export type BooleanFunctionSpec =
  | ((args: boolean[]) => BooleanFunctionValue)
  | {on: number[]; unspecified: number[]};

export function functionBytes(f: BooleanFunctionSpec, arity: number): Int8Array {
  const n = 1 << arity;
  // const fv = new Int8Array(new SharedArrayBuffer(n));
  const fv = new Int8Array(n);
  if (typeof f === "function") {
    const td = new Array(arity);
    let tv;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < arity; j++) {
        td[j] = (i & (1 << (arity - j - 1))) != 0;
      }
      tv = f(td);
      // console.log(i, td.toString(), tv);
      if (tv === true) {
        fv[i] = 1;
      } else if (tv == null) {
        fv[i] = -1;
      }
    }
  } else {
    for (const i of f.on) fv[i] = 1;
    for (const i of f.unspecified) fv[i] = -1;
  }

  return fv;
}

export function bytesToBigInt(bitBytes: Int8Array, lsbFirst: boolean = false): bigint | null {
  if (!bitBytes || bitBytes.length === 0) return null;
  let s = "0b";
  let bit;
  if (lsbFirst) {
    for (let i = bitBytes.length - 1; i >= 0; i--) {
      bit = bitBytes[i];
      if (bit !== 0 && bit !== 1) return null;
      // if (!(bit & (bit ^ 1))) {
      //   console.log("failed for i = " + i + ", value", bit );
      //   return null;
      // }
      s += bit;
    }
  } else {
    for (let i = 0; i < bitBytes.length; i++) {
      bit = bitBytes[i];
      if (bit !== 0 && bit !== 1) return null;
      // if (!(bit & (bit ^ 1))) {
      //   console.log("failed for i = " + i + ", value", bit);
      //   return null;
      // }
      s += bitBytes[i];
    }
  }
  return BigInt(s);
}

export function functionProperties(
  valueBytes: Int8Array,
  arity: number,
  compmuteIndex: boolean = arity <= 5
): {
  arity: number;
  "fully-specified": boolean;
  "term-counts": [on: number, off: number, unspecified: number];
  "digit-string": string | null;
  index?: bigint;
} {
  const nBytes = valueBytes.length;
  let s: string | null = "";
  let on = 0,
    unspec = 0,
    i = 0;
  while (i < nBytes) {
    switch (valueBytes[i++]) {
      case 0:
        s += "0";
        continue;
      case 1:
        s += "1";
        on++;
        continue;
      default:
        // f not fully specified: s becomes null, counting continues
        unspec++;
        s = null;
        while (i < nBytes) {
          switch (valueBytes[i++]) {
            case 0:
              break;
            case 1:
              on++;
              break;
            default:
              unspec++;
              break;
          }
        }
    }
  }

  return {
    arity,
    "digit-string": s,
    "fully-specified": s !== null,
    "term-counts": [on, nBytes - (on + unspec), unspec],
    index: compmuteIndex && s ? BigInt("0b" + [...s].reverse().join("")) : undefined,
  };
}

// zCoeffs = BigInt("0b" + digitString);
// for (let n = BigInt(arity) - 1n, blockLength = 1n; n >= 0; n--, blockLength <<= 1n) {
//   zCoeffs |= (zCoeffs & mask(n, blockLength << 1n)) << blockLength;
// }
// const mask = (n: bigint, blockLength: bigint) => {
//   let shift = blockLength << 1n;
//   let x = blockLength << ((1n << blockLength) - 1n);
//   for (let i = n; i > 0; i--) {
//     shift <<= 1n;
//     x |= x << shift;
//   }
//   return x;
// };
