import { CollectionReference } from "@google-cloud/firestore";

import { firestore } from "../lib/db";

export class DataSource {
  private ref: CollectionReference;

  constructor(collection: string) {
    this.ref = firestore.collection(collection);
  }

  async getAll() {
    const snapshot = await this.ref.get();

    return snapshot.docs.map((doc) => doc.data());
  }

  async getById(id: string) {
    const snapshot = await this.ref.doc(id).get();

    return snapshot.data();
  }
}
