import type { NominalHardStr } from '../core';


export type ScStyleStr = NominalHardStr< { ScStyleStr: 1 } >;
export const Tstyled = {
  _: ( str: TemplateStringsArray, ...rest: unknown[] ): ScStyleStr => (
    str.reduce( ( acc, it, i ) => acc + it + String( rest[i] || '' ), '' ) as ScStyleStr
  ),
};


export const emptyScStyleStr = Tstyled._``;
