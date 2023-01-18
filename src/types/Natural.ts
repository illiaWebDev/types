/* eslint-disable camelcase */
import type { NominalHardNum, brandOf, mergeBrands } from '../core';

/**
 * integer numbers **greater then or equal** to 0
 * @example 0, 1, 2, 3, ...
 */
export type Natural = NominalHardNum< { '__types__/Natural': 1 } >;
export const isNatural = ( n: number ): n is Natural => Number.isInteger( n ) && n >= 0;

export type NaturalGreaterThan0 = NominalHardNum< mergeBrands< Natural, { NaturalGreaterThan0: 1 } > >;
export const isNaturalGreaterThan0 = ( n: number ): n is NaturalGreaterThan0 => (
  isNatural( n ) && n > 0
);

export type NaturalGreaterThan1 = NominalHardNum< mergeBrands< NaturalGreaterThan0, { NaturalGreaterThan1: 1 } > >;
export const isNaturalGreaterThan1 = ( n: number ): n is NaturalGreaterThan1 => (
  isNaturalGreaterThan0( n ) && n > 1
);
