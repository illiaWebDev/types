import type { NominalHardStrT } from '../core';

/**
 * style string for styled-components, main idea is\
 * that by using Tstyled we get syntax highlighting\
 * in VSCode (and also we are able to differentiate\
 * between just some string and "styled-components \
 * css string")
 */
export type ScStyleStr = NominalHardStrT< 'ScStyleStr' >;
export const Tstyled = {
  _: ( str: TemplateStringsArray, ...rest: unknown[] ): ScStyleStr => (
    str.reduce( ( acc, it, i ) => acc + it + String( rest[ i ] || '' ), '' ) as ScStyleStr
  ),
};


export const emptyScStyleStr = Tstyled._``;
export type WithOverrideCss = { $overrideCss?: string };
