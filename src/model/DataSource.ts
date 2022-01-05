import { CollectionReference } from "@google-cloud/firestore";

import { firestore } from "../lib/db";

export class DataSource {
  private ref: CollectionReference;

  constructor(collection: string) {
    this.ref = firestore.collection(collection);
  }

  async getAll() {
    const documents = await this.ref.get();

    return documents;
  }

  async getById(id: string) {
    const document = await this.ref.doc(id).get();

    return document;
  }
}
