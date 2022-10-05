export class PgStore {
  protected connectionString: string;
  protected tableName: string;
  protected exposedName: string;
  constructor(
    connectionString: string,
    tableName: string,
    exposedName?: string
  ) {
    this.connectionString = connectionString;
    this.tableName = tableName;
    this.exposedName = exposedName ?? "electronade";
  }

  public async getAll(): Promise<any> {
    // @ts-expect-error
    return globalThis[this.exposedName].pgstore.getAll(
      this.connectionString,
      this.tableName
    );
  }

  public async get(id: string): Promise<any> {
    // @ts-expect-error
    return globalThis[this.exposedName].pgstore.get(
      this.connectionString,
      this.tableName,
      id
    );
  }

  public async save(item: object): Promise<any> {
    // @ts-expect-error
    return globalThis[this.exposedName].pgstore.save(
      this.connectionString,
      this.tableName,
      item
    );
  }

  public async remove(id: string): Promise<boolean> {
    // @ts-expect-error
    return globalThis[this.exposedName].pgstore.remove(
      this.connectionString,
      this.tableName,
      id
    );
  }
}
