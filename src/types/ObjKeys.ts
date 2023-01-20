export const ObjKeys = <
  T extends Record< string, unknown >,
  K extends keyof T = keyof T,
>( obj: T ): K[] => Object.keys( obj ) as K[];
