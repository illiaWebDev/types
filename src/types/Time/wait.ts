import type { Millisecond } from './Millisecond';

export const wait = ( ms: Millisecond ): Promise< void > => (
  ms < 13
    ? Promise.resolve()
    : new Promise( ( r ) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setTimeout(
        r,
        ms,
      );
    } )
);
