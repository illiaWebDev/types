export type MapContents< T > = T extends Map< infer Key, infer Value >
  ? { keys: Key, values: Value }
  : never;
