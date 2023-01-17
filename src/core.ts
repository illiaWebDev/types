export const BRAND = '__types__/Brand';
export type BrandShape = Record< string, true >

export type Branded< T extends BrandShape > = {
  [ BRAND ]: T
};
export type brandOf< B extends Branded< BrandShape > > = B[ typeof BRAND ];
export type mergeBrands< B extends BrandShape, T extends BrandShape > = {
  [ key in keyof B | keyof T ]: true
}

export type NominalHardStr< T extends BrandShape > = string & Branded< T >;
export type NominalHardNum< T extends BrandShape > = number & Branded< T >;

// type UUID = NominalHardStr< { uuid: true } >;
// type MongoId = NominalHardStr< { mongoId: true } >;
// type UserId = NominalHardStr< mergeBrands< brandOf< MongoId >, { userId: true } > >;
// type AdminId = NominalHardStr< mergeBrands< brandOf< UserId >, { adminId: true } > >;


// let uuid = '' as UUID;
// let mongoId = '' as MongoId;
// let userId = '' as UserId;
// mongoId = userId;
// uuid = mongoId;