import type { NominalHardStrT, NominalHardNumT, ExtNominalHardNumT } from '../../core';
import type { Millisecond } from './Millisecond';


/**
 * corresponds to amount of milliseconds since Unix Epoch
 */
export type EpochMillisecond = ExtNominalHardNumT< Millisecond, '__types__/EpochMillisecond' >;


export type Second = NominalHardNumT< '__types__/Second(-s)' >;


/**
 * @example 'MM/dd/yyyy'
 * @see https://date-fns.org/v2.16.1/docs/format
 */
export type TimeFormatString = NominalHardStrT< '__types__/TimeFormatString' >;
