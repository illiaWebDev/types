export const BRAND = '__types__/Brand';
export type BrandShape = Record< string, 1 >;


export type Branded< T extends BrandShape > = {
  [ BRAND ]: T
};
export type BrandOf< B extends Branded< BrandShape > > = B[ typeof BRAND ];


// ===================================================================================


export type NominalHardStrCore< T extends string > = string & Branded< { [ key in T ]: 1 } >;
export type NominalHardStr< N extends string | NominalHardStrCore< string >, U = undefined> = (
  N extends Branded< infer B >
    ? U extends string
      ? keyof B extends string
        ? NominalHardStrCore< keyof B | U >
        : never
      : never
    : NominalHardStrCore< N >
);

export type NominalHardStrT< T extends string > = string & Branded< { [ key in T ]: 1 } >;
export type ExtNominalHardStrT< N extends NominalHardStrT< string >, U extends string > = (
  keyof BrandOf< N > extends string ? NominalHardStrT< keyof BrandOf< N > | U > : never
);


// ===================================================================================


export type NominalHardNumCore< T extends string > = number & Branded< { [ key in T ]: 1 } >;
export type NominalHardNum< N extends string | NominalHardNumCore< string >, U = undefined > = (
  N extends Branded< infer B >
    ? U extends string
      ? keyof B extends string
        ? NominalHardNumCore< keyof B | U >
        : never
      : never
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
    : NominalHardNumCore< N >
);

export type NominalHardNumT< T extends string > = number & Branded< { [ key in T ]: 1 } >;
export type ExtNominalHardNumT< N extends NominalHardNumT< string >, U extends string > = (
  keyof BrandOf< N > extends string ? NominalHardNumT< keyof BrandOf< N > | U > : never
);
