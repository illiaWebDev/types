export type GenRtrn< T > = T extends ( ...args: unknown[] ) => Generator< unknown, infer Rtrn, unknown > ? Rtrn : never;
