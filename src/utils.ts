export const deleteUndefined = <T>(arr: T[]): Exclude<T, undefined>[] => {
  return arr.filter(
    (ar): ar is Exclude<typeof ar, undefined> => ar !== undefined
  );
};

/**
 * ユニオン型から{ type: K }を持つ型を抜き出す
 */
export type ExtractHasProp_Type<T, K> = T extends { type: K } ? T : never;
