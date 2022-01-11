import { CollectionReference, DocumentData } from "@google-cloud/firestore";

import { firestore } from "../lib/db";

export class DataSource<T = DocumentData> {
  private ref: CollectionReference<T>;

  constructor(collection: string) {
    this.ref = firestore.collection(collection) as CollectionReference<T>;
  }

  async getAll() {
    const snapshot = await this.ref.get();

    // return snapshot.docs.map((doc) => doc.data());
    // @todo: REMOVE THIS
    return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  }

  async getById(id: string) {
    const snapshot = await this.ref.doc(id).get();

    return snapshot.data();
  }
}
