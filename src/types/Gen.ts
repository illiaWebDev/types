// this is needed (with all any-s) so that we have type for
// saga functions and can use it everywhere
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Gen = Generator< any, any, any >;

export type GenRtrn< T > = T extends ( ...args: unknown[] ) => Generator< unknown, infer Rtrn, unknown > ? Rtrn : never;
