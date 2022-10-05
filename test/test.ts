import { describe, it } from "mocha";
import { strict as assert } from "assert";
import { PgStore } from "../src/";

let store: PgStore;

describe("PgStore", () => {
  before(() => {
    const [connectionString, tableName] = ["posgtres://...", "tableName"];
    store = new PgStore(connectionString, tableName);

    // @ts-expect-error
    globalThis.electronade = {
      pgstore: {
        get: async (connectionString: string, tableName: string, id: string) =>
          await Promise.resolve({ _id: id }),
        getAll: async (connectionString: string, tableName: string) =>
          await Promise.resolve([{ _id: "a" }, { _id: "b" }]),
        save: async (
          connectionString: string,
          tableName: string,
          item: object
        ) => await Promise.resolve(item),
        remove: async (
          connectionString: string,
          tableName: string,
          id: string
        ) => await Promise.resolve(true),
      },
    };
  });

  it("get()", async () => {
    assert.equal(
      await store.get("test").then(({ _id }: { _id: string }) => _id),
      "test"
    );
  });

  it("getAll()", async () => {
    assert.equal(
      await store
        .getAll()
        .then((items: Array<{ _id: string }>) =>
          items.map(({ _id }) => _id).join("")
        ),
      "ab"
    );
  });

  it("save()", async () => {
    assert.equal(
      await store
        .save({ name: "test" })
        .then(({ name }: { name: string }) => name),
      "test"
    );
  });

  it("remove()", async () => {
    assert.equal(await store.remove("test"), true);
  });
});
