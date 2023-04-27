export const isStringArr = ( arr: unknown ): arr is string[] => (
  Array.isArray( arr ) && arr.every( e => typeof e === 'string' )
);
