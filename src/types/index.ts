export interface FireStoreReference<T extends string> {
  id: string;
  kind: T;
  path: [T, string];
}
