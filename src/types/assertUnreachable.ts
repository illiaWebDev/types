/* eslint-disable @typescript-eslint/no-unused-vars */

export const getUnreachable = ( _: never ): Error => new Error( 'assertUnreachable | 0CGGzjrDAt' );
export function assertUnreachable( _: never ): never {
  throw getUnreachable( null as never );
}
