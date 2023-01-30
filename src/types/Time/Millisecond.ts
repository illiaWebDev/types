import type { NominalHardNumT } from '../../core';


/**
 * used primarly to set up contract in code, like with setTimeout, so that consumer knows\
 * at any point what time measurment they deal with
 * @example 1000
 */
export type Millisecond = NominalHardNumT< '__types__/Millisecond(-s)' >;
