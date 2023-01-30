/* eslint-disable camelcase */
import type { NominalHardStrT, ExtNominalHardStrT } from '../../core';

/**
 * ISO String **ZERO** timezone (because UTC, duh)
 * @example '2011-10-05T14:48:21.100Z'
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
 */
export type Full = NominalHardStrT< '__types__/ISO8601/UTC/Full' >;
export const getFull = (): Full => new Date().toISOString() as Full;

/**
 * UTC ISO String but with milliseconds part equal to 0
 * @example '2011-10-05T14:48:12.000Z'
 */
export type SecondOfDay = ExtNominalHardStrT< Full, 'SecondOfDay'>;

/**
 * SecondOfDay but with seconds parts equal to 0
 * @example '2011-10-05T14:48:00.000Z'
 */
export type MinuteOfDay = ExtNominalHardStrT< SecondOfDay, 'MinuteOfDay' >;
