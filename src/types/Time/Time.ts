import type { NominalHardStr, NominalHardNum, MergeBrands } from '../../core';
import type { Millisecond } from './Millisecond';


/**
 * corresponds to amount of milliseconds since Unix Epoch
 */
export type EpochMillisecond = NominalHardNum< MergeBrands< Millisecond, { '__types__/EpochMillisecond': 1 } > >;


export type Second = NominalHardNum< { '__types__/Second(-s)': 1 } >;


/**
 * @example 'MM/dd/yyyy'
 * @see https://date-fns.org/v2.16.1/docs/format
 */
export type TimeFormatString = NominalHardStr< { '__types__/TimeFormatString': 1 } >;
