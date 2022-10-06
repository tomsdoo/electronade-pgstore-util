# electronade-pgstore-util

It's a package that provides some utilities for [electronade-pgstore](https://electronade-pgstore.netlify.app/).

It's an optional module for `electronade-pgstore` so `electronade-pgstore` should be installed before using `electronade-pgstore-util`.

![npm](https://img.shields.io/npm/v/electronade-pgstore-util)
![NPM](https://img.shields.io/npm/l/electronade-pgstore-util)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/electronade-pgstore-util)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/electronade-pgstore-util)
![Maintenance](https://img.shields.io/maintenance/yes/2022)

[![](https://nodei.co/npm/electronade-pgstore-util.svg?mini=true)](https://www.npmjs.com/package/electronade-pgstore-util)

## Installation
``` shell
npm install electronade-pgstore-util
```

## Interfaces

``` mermaid
classDiagram

class PgStore {
  +constructor(connectionString: string, tableName: string, exposedName?: string)
  +getAll() Promise~any~
  +get(id: string) Promise~any~
  +save(item: object) Promise~object~
  +remove(id: string) Promise~boolean~
}
```

``` typescript
class PgStore {
  constructor(
    connectionString: string,
    tableName: string,
    exposedName?: string
  );
  public getAll() => Promise<any>;
  public get(id: string) => Promise<any>;
  public save(item: object) => Promise<object>;
  public remove(id: string) => Promise<boolean>;
}
```

## Usage

import and use PgStore class in Renderer process.

``` typescript
import { PgStore } from "electronade-pgstore-util";

const store = new PgStore(
  "postgres://...",
  "tableName"
);

const item = await store.save({ name: "test" });

console.log(item); // { _id: "xxx", name: "test" }

console.log(
  await store.get(item.id)
); // { _id: "xxx", name: "test" }


console.log(
  await store.getAll()
); // [{ _id: "xxx", name: "test" }]

console.log(
  await store.remove(item._id)
); // true
```
