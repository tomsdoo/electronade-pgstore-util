export class PgStore {
  protected connectionString: string;
  protected tableName: string;
  protected exposedName: string;
  constructor(connectionString: string, tableName: string, exposedName?: string){
    this.connectionString = connectionString;
    this.tableName = tableName;
    this.exposedName = exposedName ?? "electronade";
  }
  public getAll(){
    // @ts-ignore
    return globalThis[this.exposedName].pgstore.getAll(
      this.connectionString,
      this.tableName
    );
  }
  public get(id: string){
    // @ts-ignore
    return globalThis[this.exposedName].pgstore.get(
      this.connectionString,
      this.tableName,
      id
    );
  }
  public save(item: object){
    // @ts-ignore
    return globalThis[this.exposedName].pgstore.save(
      this.connectionString,
      this.tableName,
      item
    );
  }
  public remove(id: string){
    // @ts-ignore
    return globalThis[this.exposedName].pgstore.remove(
      this.connectionString,
      this.tableName,
      id
    );
  }
}
