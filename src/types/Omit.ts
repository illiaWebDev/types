export type SafeOmit< O, K extends keyof O > = Omit< O, K >;
export type DistributiveOmit< T, K extends keyof T > = T extends unknown
  ? Omit<T, K>
  : never;
