export type Identity< T > = ( arg: T ) => T;
export const identity = < T >( arg: Parameters< Identity< T > >[ 0 ] ): ReturnType< Identity< T > > => arg;
