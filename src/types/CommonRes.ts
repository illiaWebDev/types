/**
 * these are named with T to avoid collisions (as\
 * SuccessRes, FailureRes are pretty useful to be\
 * used on their own), but also - to denote that \
 * these are generics
 */
export type TSuccessRes< Data = never > = [Data] extends [never]
  ? { success: true }
  : { success: true; data: Data };
export const tSuccessRes: TSuccessRes = { success: true };
export type ExcludeTSuccess< T > = Exclude< T, TSuccessRes >;

export type TFailureRes< Err > = {
  success: false;
  error: Err;
};
export type ExcludeTFailure< T > = Exclude< T, TFailureRes< unknown > >;
