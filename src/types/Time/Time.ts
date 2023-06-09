import type { NominalHardStrT, NominalHardNumT, ExtNominalHardNumT } from '../../core';
import type { Millisecond } from './Millisecond';


/**
 * corresponds to amount of milliseconds since Unix Epoch
 */
export type EpochMillisecond = ExtNominalHardNumT< Millisecond, '__types__/EpochMillisecond' >;


export type Second = NominalHardNumT< '__types__/Second(-s)' >;
/**
 * corresponds to amount of seconds since Unix Epoch\
 * typically used in JWT tokens
 */
export type EpochSecond = NominalHardNumT< '__types__/Second(-s)' | '__types__/EpochSecond' >;


/**
 * @example 'MM/dd/yyyy'
 * @see https://date-fns.org/v2.16.1/docs/format
 */
export type TimeFormatString = NominalHardStrT< '__types__/TimeFormatString' >;
