export const BRAND = '__types__/Brand';
export type BrandShape = Record< string, 1 >

export type Branded< T extends BrandShape > = {
  [ BRAND ]: T
};
export type brandOf< B extends Branded< BrandShape > > = B[ typeof BRAND ];
export type mergeBrands< B extends Branded< BrandShape >, T extends BrandShape > = {
  [ key in keyof brandOf< B > | keyof T ]: 1
}

export type NominalHardStr< T extends BrandShape > = string & Branded< T >;
export type NominalHardNum< T extends BrandShape > = number & Branded< T >;
