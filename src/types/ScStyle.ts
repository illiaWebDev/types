import type { NominalHardStrT } from '../core';


export type ScStyleStr = NominalHardStrT< 'ScStyleStr' >;
export const Tstyled = {
  _: ( str: TemplateStringsArray, ...rest: unknown[] ): ScStyleStr => (
    str.reduce( ( acc, it, i ) => acc + it + String( rest[i] || '' ), '' ) as ScStyleStr
  ),
};


export const emptyScStyleStr = Tstyled._``;
