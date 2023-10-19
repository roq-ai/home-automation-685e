/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model device
 *
 */
export type device = $Result.DefaultSelection<Prisma.$devicePayload>;
/**
 * Model home
 *
 */
export type home = $Result.DefaultSelection<Prisma.$homePayload>;
/**
 * Model home_device
 *
 */
export type home_device = $Result.DefaultSelection<Prisma.$home_devicePayload>;
/**
 * Model service
 *
 */
export type service = $Result.DefaultSelection<Prisma.$servicePayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **device** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Devices
   * const devices = await prisma.device.findMany()
   * ```
   */
  get device(): Prisma.deviceDelegate<ExtArgs>;

  /**
   * `prisma.home`: Exposes CRUD operations for the **home** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Homes
   * const homes = await prisma.home.findMany()
   * ```
   */
  get home(): Prisma.homeDelegate<ExtArgs>;

  /**
   * `prisma.home_device`: Exposes CRUD operations for the **home_device** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Home_devices
   * const home_devices = await prisma.home_device.findMany()
   * ```
   */
  get home_device(): Prisma.home_deviceDelegate<ExtArgs>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **service** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Services
   * const services = await prisma.service.findMany()
   * ```
   */
  get service(): Prisma.serviceDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    company: 'company';
    device: 'device';
    home: 'home';
    home_device: 'home_device';
    service: 'service';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'company' | 'device' | 'home' | 'home_device' | 'service' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      device: {
        payload: Prisma.$devicePayload<ExtArgs>;
        fields: Prisma.deviceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.deviceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$devicePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.deviceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$devicePayload>;
          };
          findFirst: {
            args: Prisma.deviceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$devicePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.deviceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$devicePayload>;
          };
          findMany: {
            args: Prisma.deviceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$devicePayload>[];
          };
          create: {
            args: Prisma.deviceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$devicePayload>;
          };
          createMany: {
            args: Prisma.deviceCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.deviceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$devicePayload>;
          };
          update: {
            args: Prisma.deviceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$devicePayload>;
          };
          deleteMany: {
            args: Prisma.deviceDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.deviceUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.deviceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$devicePayload>;
          };
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateDevice>;
          };
          groupBy: {
            args: Prisma.deviceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<DeviceGroupByOutputType>[];
          };
          count: {
            args: Prisma.deviceCountArgs<ExtArgs>;
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number;
          };
        };
      };
      home: {
        payload: Prisma.$homePayload<ExtArgs>;
        fields: Prisma.homeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.homeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$homePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.homeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$homePayload>;
          };
          findFirst: {
            args: Prisma.homeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$homePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.homeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$homePayload>;
          };
          findMany: {
            args: Prisma.homeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$homePayload>[];
          };
          create: {
            args: Prisma.homeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$homePayload>;
          };
          createMany: {
            args: Prisma.homeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.homeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$homePayload>;
          };
          update: {
            args: Prisma.homeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$homePayload>;
          };
          deleteMany: {
            args: Prisma.homeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.homeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.homeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$homePayload>;
          };
          aggregate: {
            args: Prisma.HomeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateHome>;
          };
          groupBy: {
            args: Prisma.homeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<HomeGroupByOutputType>[];
          };
          count: {
            args: Prisma.homeCountArgs<ExtArgs>;
            result: $Utils.Optional<HomeCountAggregateOutputType> | number;
          };
        };
      };
      home_device: {
        payload: Prisma.$home_devicePayload<ExtArgs>;
        fields: Prisma.home_deviceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.home_deviceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$home_devicePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.home_deviceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$home_devicePayload>;
          };
          findFirst: {
            args: Prisma.home_deviceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$home_devicePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.home_deviceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$home_devicePayload>;
          };
          findMany: {
            args: Prisma.home_deviceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$home_devicePayload>[];
          };
          create: {
            args: Prisma.home_deviceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$home_devicePayload>;
          };
          createMany: {
            args: Prisma.home_deviceCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.home_deviceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$home_devicePayload>;
          };
          update: {
            args: Prisma.home_deviceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$home_devicePayload>;
          };
          deleteMany: {
            args: Prisma.home_deviceDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.home_deviceUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.home_deviceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$home_devicePayload>;
          };
          aggregate: {
            args: Prisma.Home_deviceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateHome_device>;
          };
          groupBy: {
            args: Prisma.home_deviceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Home_deviceGroupByOutputType>[];
          };
          count: {
            args: Prisma.home_deviceCountArgs<ExtArgs>;
            result: $Utils.Optional<Home_deviceCountAggregateOutputType> | number;
          };
        };
      };
      service: {
        payload: Prisma.$servicePayload<ExtArgs>;
        fields: Prisma.serviceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.serviceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$servicePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.serviceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$servicePayload>;
          };
          findFirst: {
            args: Prisma.serviceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$servicePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.serviceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$servicePayload>;
          };
          findMany: {
            args: Prisma.serviceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$servicePayload>[];
          };
          create: {
            args: Prisma.serviceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$servicePayload>;
          };
          createMany: {
            args: Prisma.serviceCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.serviceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$servicePayload>;
          };
          update: {
            args: Prisma.serviceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$servicePayload>;
          };
          deleteMany: {
            args: Prisma.serviceDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.serviceUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.serviceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$servicePayload>;
          };
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateService>;
          };
          groupBy: {
            args: Prisma.serviceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ServiceGroupByOutputType>[];
          };
          count: {
            args: Prisma.serviceCountArgs<ExtArgs>;
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    home_device: number;
  };

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    home_device?: boolean | DeviceCountOutputTypeCountHome_deviceArgs;
  };

  // Custom InputTypes

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountHome_deviceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: home_deviceWhereInput;
  };

  /**
   * Count Type HomeCountOutputType
   */

  export type HomeCountOutputType = {
    home_device: number;
  };

  export type HomeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    home_device?: boolean | HomeCountOutputTypeCountHome_deviceArgs;
  };

  // Custom InputTypes

  /**
   * HomeCountOutputType without action
   */
  export type HomeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HomeCountOutputType
     */
    select?: HomeCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * HomeCountOutputType without action
   */
  export type HomeCountOutputTypeCountHome_deviceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: home_deviceWhereInput;
  };

  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    home_device: number;
  };

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    home_device?: boolean | ServiceCountOutputTypeCountHome_deviceArgs;
  };

  // Custom InputTypes

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountHome_deviceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: home_deviceWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    company: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null;
    _min: DeviceMinAggregateOutputType | null;
    _max: DeviceMaxAggregateOutputType | null;
  };

  export type DeviceMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    model: string | null;
    manufacturer: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DeviceMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    model: string | null;
    manufacturer: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type DeviceCountAggregateOutputType = {
    id: number;
    name: number;
    model: number;
    manufacturer: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type DeviceMinAggregateInputType = {
    id?: true;
    name?: true;
    model?: true;
    manufacturer?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DeviceMaxAggregateInputType = {
    id?: true;
    name?: true;
    model?: true;
    manufacturer?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type DeviceCountAggregateInputType = {
    id?: true;
    name?: true;
    model?: true;
    manufacturer?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which device to aggregate.
     */
    where?: deviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: deviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` devices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned devices
     **/
    _count?: true | DeviceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: DeviceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: DeviceMaxAggregateInputType;
  };

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
    [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>;
  };

  export type deviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deviceWhereInput;
    orderBy?: deviceOrderByWithAggregationInput | deviceOrderByWithAggregationInput[];
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum;
    having?: deviceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DeviceCountAggregateInputType | true;
    _min?: DeviceMinAggregateInputType;
    _max?: DeviceMaxAggregateInputType;
  };

  export type DeviceGroupByOutputType = {
    id: string;
    name: string;
    model: string;
    manufacturer: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    _count: DeviceCountAggregateOutputType | null;
    _min: DeviceMinAggregateOutputType | null;
    _max: DeviceMaxAggregateOutputType | null;
  };

  type GetDeviceGroupByPayload<T extends deviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> & {
        [P in keyof T & keyof DeviceGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
          : GetScalarType<T[P], DeviceGroupByOutputType[P]>;
      }
    >
  >;

  export type deviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      model?: boolean;
      manufacturer?: boolean;
      status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      home_device?: boolean | device$home_deviceArgs<ExtArgs>;
      _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['device']
  >;

  export type deviceSelectScalar = {
    id?: boolean;
    name?: boolean;
    model?: boolean;
    manufacturer?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type deviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    home_device?: boolean | device$home_deviceArgs<ExtArgs>;
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $devicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'device';
    objects: {
      home_device: Prisma.$home_devicePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        model: string;
        manufacturer: string;
        status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['device']
    >;
    composites: {};
  };

  type deviceGetPayload<S extends boolean | null | undefined | deviceDefaultArgs> = $Result.GetResult<
    Prisma.$devicePayload,
    S
  >;

  type deviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    deviceFindManyArgs,
    'select' | 'include'
  > & {
    select?: DeviceCountAggregateInputType | true;
  };

  export interface deviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['device']; meta: { name: 'device' } };
    /**
     * Find zero or one Device that matches the filter.
     * @param {deviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends deviceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, deviceFindUniqueArgs<ExtArgs>>,
    ): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Device that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {deviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends deviceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, deviceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends deviceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, deviceFindFirstArgs<ExtArgs>>,
    ): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends deviceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, deviceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     *
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends deviceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, deviceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Device.
     * @param {deviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     *
     **/
    create<T extends deviceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, deviceCreateArgs<ExtArgs>>,
    ): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Devices.
     *     @param {deviceCreateManyArgs} args - Arguments to create many Devices.
     *     @example
     *     // Create many Devices
     *     const device = await prisma.device.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends deviceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, deviceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Device.
     * @param {deviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     *
     **/
    delete<T extends deviceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, deviceDeleteArgs<ExtArgs>>,
    ): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Device.
     * @param {deviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends deviceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, deviceUpdateArgs<ExtArgs>>,
    ): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Devices.
     * @param {deviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends deviceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, deviceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends deviceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, deviceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Device.
     * @param {deviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     **/
    upsert<T extends deviceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, deviceUpsertArgs<ExtArgs>>,
    ): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
     **/
    count<T extends deviceCountArgs>(
      args?: Subset<T, deviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends DeviceAggregateArgs>(
      args: Subset<T, DeviceAggregateArgs>,
    ): Prisma.PrismaPromise<GetDeviceAggregateType<T>>;

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends deviceGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: deviceGroupByArgs['orderBy'] }
        : { orderBy?: deviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, deviceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the device model
     */
    readonly fields: deviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__deviceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    home_device<T extends device$home_deviceArgs<ExtArgs> = {}>(
      args?: Subset<T, device$home_deviceArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$home_devicePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the device model
   */
  interface deviceFieldRefs {
    readonly id: FieldRef<'device', 'String'>;
    readonly name: FieldRef<'device', 'String'>;
    readonly model: FieldRef<'device', 'String'>;
    readonly manufacturer: FieldRef<'device', 'String'>;
    readonly status: FieldRef<'device', 'String'>;
    readonly created_at: FieldRef<'device', 'DateTime'>;
    readonly updated_at: FieldRef<'device', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * device findUnique
   */
  export type deviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deviceInclude<ExtArgs> | null;
    /**
     * Filter, which device to fetch.
     */
    where: deviceWhereUniqueInput;
  };

  /**
   * device findUniqueOrThrow
   */
  export type deviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deviceInclude<ExtArgs> | null;
    /**
     * Filter, which device to fetch.
     */
    where: deviceWhereUniqueInput;
  };

  /**
   * device findFirst
   */
  export type deviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deviceInclude<ExtArgs> | null;
    /**
     * Filter, which device to fetch.
     */
    where?: deviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for devices.
     */
    cursor?: deviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` devices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[];
  };

  /**
   * device findFirstOrThrow
   */
  export type deviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deviceInclude<ExtArgs> | null;
    /**
     * Filter, which device to fetch.
     */
    where?: deviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for devices.
     */
    cursor?: deviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` devices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[];
  };

  /**
   * device findMany
   */
  export type deviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deviceInclude<ExtArgs> | null;
    /**
     * Filter, which devices to fetch.
     */
    where?: deviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing devices.
     */
    cursor?: deviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` devices.
     */
    skip?: number;
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[];
  };

  /**
   * device create
   */
  export type deviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deviceInclude<ExtArgs> | null;
    /**
     * The data needed to create a device.
     */
    data: XOR<deviceCreateInput, deviceUncheckedCreateInput>;
  };

  /**
   * device createMany
   */
  export type deviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many devices.
     */
    data: deviceCreateManyInput | deviceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * device update
   */
  export type deviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deviceInclude<ExtArgs> | null;
    /**
     * The data needed to update a device.
     */
    data: XOR<deviceUpdateInput, deviceUncheckedUpdateInput>;
    /**
     * Choose, which device to update.
     */
    where: deviceWhereUniqueInput;
  };

  /**
   * device updateMany
   */
  export type deviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update devices.
     */
    data: XOR<deviceUpdateManyMutationInput, deviceUncheckedUpdateManyInput>;
    /**
     * Filter which devices to update
     */
    where?: deviceWhereInput;
  };

  /**
   * device upsert
   */
  export type deviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deviceInclude<ExtArgs> | null;
    /**
     * The filter to search for the device to update in case it exists.
     */
    where: deviceWhereUniqueInput;
    /**
     * In case the device found by the `where` argument doesn't exist, create a new device with this data.
     */
    create: XOR<deviceCreateInput, deviceUncheckedCreateInput>;
    /**
     * In case the device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<deviceUpdateInput, deviceUncheckedUpdateInput>;
  };

  /**
   * device delete
   */
  export type deviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deviceInclude<ExtArgs> | null;
    /**
     * Filter which device to delete.
     */
    where: deviceWhereUniqueInput;
  };

  /**
   * device deleteMany
   */
  export type deviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which devices to delete
     */
    where?: deviceWhereInput;
  };

  /**
   * device.home_device
   */
  export type device$home_deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home_device
     */
    select?: home_deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: home_deviceInclude<ExtArgs> | null;
    where?: home_deviceWhereInput;
    orderBy?: home_deviceOrderByWithRelationInput | home_deviceOrderByWithRelationInput[];
    cursor?: home_deviceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Home_deviceScalarFieldEnum | Home_deviceScalarFieldEnum[];
  };

  /**
   * device without action
   */
  export type deviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: deviceInclude<ExtArgs> | null;
  };

  /**
   * Model home
   */

  export type AggregateHome = {
    _count: HomeCountAggregateOutputType | null;
    _avg: HomeAvgAggregateOutputType | null;
    _sum: HomeSumAggregateOutputType | null;
    _min: HomeMinAggregateOutputType | null;
    _max: HomeMaxAggregateOutputType | null;
  };

  export type HomeAvgAggregateOutputType = {
    zip_code: number | null;
  };

  export type HomeSumAggregateOutputType = {
    zip_code: number | null;
  };

  export type HomeMinAggregateOutputType = {
    id: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: number | null;
    country: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type HomeMaxAggregateOutputType = {
    id: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: number | null;
    country: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type HomeCountAggregateOutputType = {
    id: number;
    address: number;
    city: number;
    state: number;
    zip_code: number;
    country: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type HomeAvgAggregateInputType = {
    zip_code?: true;
  };

  export type HomeSumAggregateInputType = {
    zip_code?: true;
  };

  export type HomeMinAggregateInputType = {
    id?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    country?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type HomeMaxAggregateInputType = {
    id?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    country?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type HomeCountAggregateInputType = {
    id?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    country?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type HomeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which home to aggregate.
     */
    where?: homeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of homes to fetch.
     */
    orderBy?: homeOrderByWithRelationInput | homeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: homeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` homes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` homes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned homes
     **/
    _count?: true | HomeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: HomeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: HomeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: HomeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: HomeMaxAggregateInputType;
  };

  export type GetHomeAggregateType<T extends HomeAggregateArgs> = {
    [P in keyof T & keyof AggregateHome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHome[P]>
      : GetScalarType<T[P], AggregateHome[P]>;
  };

  export type homeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: homeWhereInput;
    orderBy?: homeOrderByWithAggregationInput | homeOrderByWithAggregationInput[];
    by: HomeScalarFieldEnum[] | HomeScalarFieldEnum;
    having?: homeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HomeCountAggregateInputType | true;
    _avg?: HomeAvgAggregateInputType;
    _sum?: HomeSumAggregateInputType;
    _min?: HomeMinAggregateInputType;
    _max?: HomeMaxAggregateInputType;
  };

  export type HomeGroupByOutputType = {
    id: string;
    address: string;
    city: string;
    state: string;
    zip_code: number;
    country: string;
    created_at: Date;
    updated_at: Date;
    _count: HomeCountAggregateOutputType | null;
    _avg: HomeAvgAggregateOutputType | null;
    _sum: HomeSumAggregateOutputType | null;
    _min: HomeMinAggregateOutputType | null;
    _max: HomeMaxAggregateOutputType | null;
  };

  type GetHomeGroupByPayload<T extends homeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof HomeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], HomeGroupByOutputType[P]>
          : GetScalarType<T[P], HomeGroupByOutputType[P]>;
      }
    >
  >;

  export type homeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      address?: boolean;
      city?: boolean;
      state?: boolean;
      zip_code?: boolean;
      country?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      home_device?: boolean | home$home_deviceArgs<ExtArgs>;
      _count?: boolean | HomeCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['home']
  >;

  export type homeSelectScalar = {
    id?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    country?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type homeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    home_device?: boolean | home$home_deviceArgs<ExtArgs>;
    _count?: boolean | HomeCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $homePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'home';
    objects: {
      home_device: Prisma.$home_devicePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        address: string;
        city: string;
        state: string;
        zip_code: number;
        country: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['home']
    >;
    composites: {};
  };

  type homeGetPayload<S extends boolean | null | undefined | homeDefaultArgs> = $Result.GetResult<
    Prisma.$homePayload,
    S
  >;

  type homeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    homeFindManyArgs,
    'select' | 'include'
  > & {
    select?: HomeCountAggregateInputType | true;
  };

  export interface homeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['home']; meta: { name: 'home' } };
    /**
     * Find zero or one Home that matches the filter.
     * @param {homeFindUniqueArgs} args - Arguments to find a Home
     * @example
     * // Get one Home
     * const home = await prisma.home.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends homeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, homeFindUniqueArgs<ExtArgs>>,
    ): Prisma__homeClient<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Home that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {homeFindUniqueOrThrowArgs} args - Arguments to find a Home
     * @example
     * // Get one Home
     * const home = await prisma.home.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends homeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, homeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__homeClient<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Home that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homeFindFirstArgs} args - Arguments to find a Home
     * @example
     * // Get one Home
     * const home = await prisma.home.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends homeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, homeFindFirstArgs<ExtArgs>>,
    ): Prisma__homeClient<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Home that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homeFindFirstOrThrowArgs} args - Arguments to find a Home
     * @example
     * // Get one Home
     * const home = await prisma.home.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends homeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, homeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__homeClient<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Homes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Homes
     * const homes = await prisma.home.findMany()
     *
     * // Get first 10 Homes
     * const homes = await prisma.home.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const homeWithIdOnly = await prisma.home.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends homeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, homeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Home.
     * @param {homeCreateArgs} args - Arguments to create a Home.
     * @example
     * // Create one Home
     * const Home = await prisma.home.create({
     *   data: {
     *     // ... data to create a Home
     *   }
     * })
     *
     **/
    create<T extends homeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, homeCreateArgs<ExtArgs>>,
    ): Prisma__homeClient<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Homes.
     *     @param {homeCreateManyArgs} args - Arguments to create many Homes.
     *     @example
     *     // Create many Homes
     *     const home = await prisma.home.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends homeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, homeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Home.
     * @param {homeDeleteArgs} args - Arguments to delete one Home.
     * @example
     * // Delete one Home
     * const Home = await prisma.home.delete({
     *   where: {
     *     // ... filter to delete one Home
     *   }
     * })
     *
     **/
    delete<T extends homeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, homeDeleteArgs<ExtArgs>>,
    ): Prisma__homeClient<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Home.
     * @param {homeUpdateArgs} args - Arguments to update one Home.
     * @example
     * // Update one Home
     * const home = await prisma.home.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends homeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, homeUpdateArgs<ExtArgs>>,
    ): Prisma__homeClient<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Homes.
     * @param {homeDeleteManyArgs} args - Arguments to filter Homes to delete.
     * @example
     * // Delete a few Homes
     * const { count } = await prisma.home.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends homeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, homeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Homes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Homes
     * const home = await prisma.home.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends homeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, homeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Home.
     * @param {homeUpsertArgs} args - Arguments to update or create a Home.
     * @example
     * // Update or create a Home
     * const home = await prisma.home.upsert({
     *   create: {
     *     // ... data to create a Home
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Home we want to update
     *   }
     * })
     **/
    upsert<T extends homeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, homeUpsertArgs<ExtArgs>>,
    ): Prisma__homeClient<$Result.GetResult<Prisma.$homePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Homes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homeCountArgs} args - Arguments to filter Homes to count.
     * @example
     * // Count the number of Homes
     * const count = await prisma.home.count({
     *   where: {
     *     // ... the filter for the Homes we want to count
     *   }
     * })
     **/
    count<T extends homeCountArgs>(
      args?: Subset<T, homeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Home.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends HomeAggregateArgs>(
      args: Subset<T, HomeAggregateArgs>,
    ): Prisma.PrismaPromise<GetHomeAggregateType<T>>;

    /**
     * Group by Home.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends homeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: homeGroupByArgs['orderBy'] }
        : { orderBy?: homeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, homeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetHomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the home model
     */
    readonly fields: homeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for home.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__homeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    home_device<T extends home$home_deviceArgs<ExtArgs> = {}>(
      args?: Subset<T, home$home_deviceArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$home_devicePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the home model
   */
  interface homeFieldRefs {
    readonly id: FieldRef<'home', 'String'>;
    readonly address: FieldRef<'home', 'String'>;
    readonly city: FieldRef<'home', 'String'>;
    readonly state: FieldRef<'home', 'String'>;
    readonly zip_code: FieldRef<'home', 'Int'>;
    readonly country: FieldRef<'home', 'String'>;
    readonly created_at: FieldRef<'home', 'DateTime'>;
    readonly updated_at: FieldRef<'home', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * home findUnique
   */
  export type homeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: homeInclude<ExtArgs> | null;
    /**
     * Filter, which home to fetch.
     */
    where: homeWhereUniqueInput;
  };

  /**
   * home findUniqueOrThrow
   */
  export type homeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: homeInclude<ExtArgs> | null;
    /**
     * Filter, which home to fetch.
     */
    where: homeWhereUniqueInput;
  };

  /**
   * home findFirst
   */
  export type homeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: homeInclude<ExtArgs> | null;
    /**
     * Filter, which home to fetch.
     */
    where?: homeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of homes to fetch.
     */
    orderBy?: homeOrderByWithRelationInput | homeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for homes.
     */
    cursor?: homeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` homes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` homes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of homes.
     */
    distinct?: HomeScalarFieldEnum | HomeScalarFieldEnum[];
  };

  /**
   * home findFirstOrThrow
   */
  export type homeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: homeInclude<ExtArgs> | null;
    /**
     * Filter, which home to fetch.
     */
    where?: homeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of homes to fetch.
     */
    orderBy?: homeOrderByWithRelationInput | homeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for homes.
     */
    cursor?: homeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` homes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` homes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of homes.
     */
    distinct?: HomeScalarFieldEnum | HomeScalarFieldEnum[];
  };

  /**
   * home findMany
   */
  export type homeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: homeInclude<ExtArgs> | null;
    /**
     * Filter, which homes to fetch.
     */
    where?: homeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of homes to fetch.
     */
    orderBy?: homeOrderByWithRelationInput | homeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing homes.
     */
    cursor?: homeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` homes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` homes.
     */
    skip?: number;
    distinct?: HomeScalarFieldEnum | HomeScalarFieldEnum[];
  };

  /**
   * home create
   */
  export type homeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: homeInclude<ExtArgs> | null;
    /**
     * The data needed to create a home.
     */
    data: XOR<homeCreateInput, homeUncheckedCreateInput>;
  };

  /**
   * home createMany
   */
  export type homeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many homes.
     */
    data: homeCreateManyInput | homeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * home update
   */
  export type homeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: homeInclude<ExtArgs> | null;
    /**
     * The data needed to update a home.
     */
    data: XOR<homeUpdateInput, homeUncheckedUpdateInput>;
    /**
     * Choose, which home to update.
     */
    where: homeWhereUniqueInput;
  };

  /**
   * home updateMany
   */
  export type homeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update homes.
     */
    data: XOR<homeUpdateManyMutationInput, homeUncheckedUpdateManyInput>;
    /**
     * Filter which homes to update
     */
    where?: homeWhereInput;
  };

  /**
   * home upsert
   */
  export type homeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: homeInclude<ExtArgs> | null;
    /**
     * The filter to search for the home to update in case it exists.
     */
    where: homeWhereUniqueInput;
    /**
     * In case the home found by the `where` argument doesn't exist, create a new home with this data.
     */
    create: XOR<homeCreateInput, homeUncheckedCreateInput>;
    /**
     * In case the home was found with the provided `where` argument, update it with this data.
     */
    update: XOR<homeUpdateInput, homeUncheckedUpdateInput>;
  };

  /**
   * home delete
   */
  export type homeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: homeInclude<ExtArgs> | null;
    /**
     * Filter which home to delete.
     */
    where: homeWhereUniqueInput;
  };

  /**
   * home deleteMany
   */
  export type homeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which homes to delete
     */
    where?: homeWhereInput;
  };

  /**
   * home.home_device
   */
  export type home$home_deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home_device
     */
    select?: home_deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: home_deviceInclude<ExtArgs> | null;
    where?: home_deviceWhereInput;
    orderBy?: home_deviceOrderByWithRelationInput | home_deviceOrderByWithRelationInput[];
    cursor?: home_deviceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Home_deviceScalarFieldEnum | Home_deviceScalarFieldEnum[];
  };

  /**
   * home without action
   */
  export type homeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home
     */
    select?: homeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: homeInclude<ExtArgs> | null;
  };

  /**
   * Model home_device
   */

  export type AggregateHome_device = {
    _count: Home_deviceCountAggregateOutputType | null;
    _min: Home_deviceMinAggregateOutputType | null;
    _max: Home_deviceMaxAggregateOutputType | null;
  };

  export type Home_deviceMinAggregateOutputType = {
    id: string | null;
    home_id: string | null;
    device_id: string | null;
    installation_date: Date | null;
    warranty_expiry: Date | null;
    service_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Home_deviceMaxAggregateOutputType = {
    id: string | null;
    home_id: string | null;
    device_id: string | null;
    installation_date: Date | null;
    warranty_expiry: Date | null;
    service_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Home_deviceCountAggregateOutputType = {
    id: number;
    home_id: number;
    device_id: number;
    installation_date: number;
    warranty_expiry: number;
    service_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Home_deviceMinAggregateInputType = {
    id?: true;
    home_id?: true;
    device_id?: true;
    installation_date?: true;
    warranty_expiry?: true;
    service_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Home_deviceMaxAggregateInputType = {
    id?: true;
    home_id?: true;
    device_id?: true;
    installation_date?: true;
    warranty_expiry?: true;
    service_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Home_deviceCountAggregateInputType = {
    id?: true;
    home_id?: true;
    device_id?: true;
    installation_date?: true;
    warranty_expiry?: true;
    service_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Home_deviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which home_device to aggregate.
     */
    where?: home_deviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of home_devices to fetch.
     */
    orderBy?: home_deviceOrderByWithRelationInput | home_deviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: home_deviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` home_devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` home_devices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned home_devices
     **/
    _count?: true | Home_deviceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Home_deviceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Home_deviceMaxAggregateInputType;
  };

  export type GetHome_deviceAggregateType<T extends Home_deviceAggregateArgs> = {
    [P in keyof T & keyof AggregateHome_device]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHome_device[P]>
      : GetScalarType<T[P], AggregateHome_device[P]>;
  };

  export type home_deviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: home_deviceWhereInput;
    orderBy?: home_deviceOrderByWithAggregationInput | home_deviceOrderByWithAggregationInput[];
    by: Home_deviceScalarFieldEnum[] | Home_deviceScalarFieldEnum;
    having?: home_deviceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Home_deviceCountAggregateInputType | true;
    _min?: Home_deviceMinAggregateInputType;
    _max?: Home_deviceMaxAggregateInputType;
  };

  export type Home_deviceGroupByOutputType = {
    id: string;
    home_id: string;
    device_id: string;
    installation_date: Date | null;
    warranty_expiry: Date | null;
    service_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Home_deviceCountAggregateOutputType | null;
    _min: Home_deviceMinAggregateOutputType | null;
    _max: Home_deviceMaxAggregateOutputType | null;
  };

  type GetHome_deviceGroupByPayload<T extends home_deviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Home_deviceGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Home_deviceGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Home_deviceGroupByOutputType[P]>
          : GetScalarType<T[P], Home_deviceGroupByOutputType[P]>;
      }
    >
  >;

  export type home_deviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        home_id?: boolean;
        device_id?: boolean;
        installation_date?: boolean;
        warranty_expiry?: boolean;
        service_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        device?: boolean | deviceDefaultArgs<ExtArgs>;
        home?: boolean | homeDefaultArgs<ExtArgs>;
        service?: boolean | serviceDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['home_device']
    >;

  export type home_deviceSelectScalar = {
    id?: boolean;
    home_id?: boolean;
    device_id?: boolean;
    installation_date?: boolean;
    warranty_expiry?: boolean;
    service_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type home_deviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | deviceDefaultArgs<ExtArgs>;
    home?: boolean | homeDefaultArgs<ExtArgs>;
    service?: boolean | serviceDefaultArgs<ExtArgs>;
  };

  export type $home_devicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'home_device';
    objects: {
      device: Prisma.$devicePayload<ExtArgs>;
      home: Prisma.$homePayload<ExtArgs>;
      service: Prisma.$servicePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        home_id: string;
        device_id: string;
        installation_date: Date | null;
        warranty_expiry: Date | null;
        service_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['home_device']
    >;
    composites: {};
  };

  type home_deviceGetPayload<S extends boolean | null | undefined | home_deviceDefaultArgs> = $Result.GetResult<
    Prisma.$home_devicePayload,
    S
  >;

  type home_deviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    home_deviceFindManyArgs,
    'select' | 'include'
  > & {
    select?: Home_deviceCountAggregateInputType | true;
  };

  export interface home_deviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['home_device']; meta: { name: 'home_device' } };
    /**
     * Find zero or one Home_device that matches the filter.
     * @param {home_deviceFindUniqueArgs} args - Arguments to find a Home_device
     * @example
     * // Get one Home_device
     * const home_device = await prisma.home_device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends home_deviceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, home_deviceFindUniqueArgs<ExtArgs>>,
    ): Prisma__home_deviceClient<
      $Result.GetResult<Prisma.$home_devicePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Home_device that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {home_deviceFindUniqueOrThrowArgs} args - Arguments to find a Home_device
     * @example
     * // Get one Home_device
     * const home_device = await prisma.home_device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends home_deviceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, home_deviceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__home_deviceClient<
      $Result.GetResult<Prisma.$home_devicePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Home_device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {home_deviceFindFirstArgs} args - Arguments to find a Home_device
     * @example
     * // Get one Home_device
     * const home_device = await prisma.home_device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends home_deviceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, home_deviceFindFirstArgs<ExtArgs>>,
    ): Prisma__home_deviceClient<
      $Result.GetResult<Prisma.$home_devicePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Home_device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {home_deviceFindFirstOrThrowArgs} args - Arguments to find a Home_device
     * @example
     * // Get one Home_device
     * const home_device = await prisma.home_device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends home_deviceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, home_deviceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__home_deviceClient<
      $Result.GetResult<Prisma.$home_devicePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Home_devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {home_deviceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Home_devices
     * const home_devices = await prisma.home_device.findMany()
     *
     * // Get first 10 Home_devices
     * const home_devices = await prisma.home_device.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const home_deviceWithIdOnly = await prisma.home_device.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends home_deviceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, home_deviceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$home_devicePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Home_device.
     * @param {home_deviceCreateArgs} args - Arguments to create a Home_device.
     * @example
     * // Create one Home_device
     * const Home_device = await prisma.home_device.create({
     *   data: {
     *     // ... data to create a Home_device
     *   }
     * })
     *
     **/
    create<T extends home_deviceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, home_deviceCreateArgs<ExtArgs>>,
    ): Prisma__home_deviceClient<$Result.GetResult<Prisma.$home_devicePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Home_devices.
     *     @param {home_deviceCreateManyArgs} args - Arguments to create many Home_devices.
     *     @example
     *     // Create many Home_devices
     *     const home_device = await prisma.home_device.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends home_deviceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, home_deviceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Home_device.
     * @param {home_deviceDeleteArgs} args - Arguments to delete one Home_device.
     * @example
     * // Delete one Home_device
     * const Home_device = await prisma.home_device.delete({
     *   where: {
     *     // ... filter to delete one Home_device
     *   }
     * })
     *
     **/
    delete<T extends home_deviceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, home_deviceDeleteArgs<ExtArgs>>,
    ): Prisma__home_deviceClient<$Result.GetResult<Prisma.$home_devicePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Home_device.
     * @param {home_deviceUpdateArgs} args - Arguments to update one Home_device.
     * @example
     * // Update one Home_device
     * const home_device = await prisma.home_device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends home_deviceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, home_deviceUpdateArgs<ExtArgs>>,
    ): Prisma__home_deviceClient<$Result.GetResult<Prisma.$home_devicePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Home_devices.
     * @param {home_deviceDeleteManyArgs} args - Arguments to filter Home_devices to delete.
     * @example
     * // Delete a few Home_devices
     * const { count } = await prisma.home_device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends home_deviceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, home_deviceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Home_devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {home_deviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Home_devices
     * const home_device = await prisma.home_device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends home_deviceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, home_deviceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Home_device.
     * @param {home_deviceUpsertArgs} args - Arguments to update or create a Home_device.
     * @example
     * // Update or create a Home_device
     * const home_device = await prisma.home_device.upsert({
     *   create: {
     *     // ... data to create a Home_device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Home_device we want to update
     *   }
     * })
     **/
    upsert<T extends home_deviceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, home_deviceUpsertArgs<ExtArgs>>,
    ): Prisma__home_deviceClient<$Result.GetResult<Prisma.$home_devicePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Home_devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {home_deviceCountArgs} args - Arguments to filter Home_devices to count.
     * @example
     * // Count the number of Home_devices
     * const count = await prisma.home_device.count({
     *   where: {
     *     // ... the filter for the Home_devices we want to count
     *   }
     * })
     **/
    count<T extends home_deviceCountArgs>(
      args?: Subset<T, home_deviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Home_deviceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Home_device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Home_deviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Home_deviceAggregateArgs>(
      args: Subset<T, Home_deviceAggregateArgs>,
    ): Prisma.PrismaPromise<GetHome_deviceAggregateType<T>>;

    /**
     * Group by Home_device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {home_deviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends home_deviceGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: home_deviceGroupByArgs['orderBy'] }
        : { orderBy?: home_deviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, home_deviceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetHome_deviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the home_device model
     */
    readonly fields: home_deviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for home_device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__home_deviceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    device<T extends deviceDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, deviceDefaultArgs<ExtArgs>>,
    ): Prisma__deviceClient<
      $Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    home<T extends homeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, homeDefaultArgs<ExtArgs>>,
    ): Prisma__homeClient<
      $Result.GetResult<Prisma.$homePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    service<T extends serviceDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, serviceDefaultArgs<ExtArgs>>,
    ): Prisma__serviceClient<
      $Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the home_device model
   */
  interface home_deviceFieldRefs {
    readonly id: FieldRef<'home_device', 'String'>;
    readonly home_id: FieldRef<'home_device', 'String'>;
    readonly device_id: FieldRef<'home_device', 'String'>;
    readonly installation_date: FieldRef<'home_device', 'DateTime'>;
    readonly warranty_expiry: FieldRef<'home_device', 'DateTime'>;
    readonly service_id: FieldRef<'home_device', 'String'>;
    readonly created_at: FieldRef<'home_device', 'DateTime'>;
    readonly updated_at: FieldRef<'home_device', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * home_device findUnique
   */
  export type home_deviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home_device
     */
    select?: home_deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: home_deviceInclude<ExtArgs> | null;
    /**
     * Filter, which home_device to fetch.
     */
    where: home_deviceWhereUniqueInput;
  };

  /**
   * home_device findUniqueOrThrow
   */
  export type home_deviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home_device
     */
    select?: home_deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: home_deviceInclude<ExtArgs> | null;
    /**
     * Filter, which home_device to fetch.
     */
    where: home_deviceWhereUniqueInput;
  };

  /**
   * home_device findFirst
   */
  export type home_deviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home_device
     */
    select?: home_deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: home_deviceInclude<ExtArgs> | null;
    /**
     * Filter, which home_device to fetch.
     */
    where?: home_deviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of home_devices to fetch.
     */
    orderBy?: home_deviceOrderByWithRelationInput | home_deviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for home_devices.
     */
    cursor?: home_deviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` home_devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` home_devices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of home_devices.
     */
    distinct?: Home_deviceScalarFieldEnum | Home_deviceScalarFieldEnum[];
  };

  /**
   * home_device findFirstOrThrow
   */
  export type home_deviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home_device
     */
    select?: home_deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: home_deviceInclude<ExtArgs> | null;
    /**
     * Filter, which home_device to fetch.
     */
    where?: home_deviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of home_devices to fetch.
     */
    orderBy?: home_deviceOrderByWithRelationInput | home_deviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for home_devices.
     */
    cursor?: home_deviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` home_devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` home_devices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of home_devices.
     */
    distinct?: Home_deviceScalarFieldEnum | Home_deviceScalarFieldEnum[];
  };

  /**
   * home_device findMany
   */
  export type home_deviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home_device
     */
    select?: home_deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: home_deviceInclude<ExtArgs> | null;
    /**
     * Filter, which home_devices to fetch.
     */
    where?: home_deviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of home_devices to fetch.
     */
    orderBy?: home_deviceOrderByWithRelationInput | home_deviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing home_devices.
     */
    cursor?: home_deviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` home_devices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` home_devices.
     */
    skip?: number;
    distinct?: Home_deviceScalarFieldEnum | Home_deviceScalarFieldEnum[];
  };

  /**
   * home_device create
   */
  export type home_deviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home_device
     */
    select?: home_deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: home_deviceInclude<ExtArgs> | null;
    /**
     * The data needed to create a home_device.
     */
    data: XOR<home_deviceCreateInput, home_deviceUncheckedCreateInput>;
  };

  /**
   * home_device createMany
   */
  export type home_deviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many home_devices.
     */
    data: home_deviceCreateManyInput | home_deviceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * home_device update
   */
  export type home_deviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home_device
     */
    select?: home_deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: home_deviceInclude<ExtArgs> | null;
    /**
     * The data needed to update a home_device.
     */
    data: XOR<home_deviceUpdateInput, home_deviceUncheckedUpdateInput>;
    /**
     * Choose, which home_device to update.
     */
    where: home_deviceWhereUniqueInput;
  };

  /**
   * home_device updateMany
   */
  export type home_deviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update home_devices.
     */
    data: XOR<home_deviceUpdateManyMutationInput, home_deviceUncheckedUpdateManyInput>;
    /**
     * Filter which home_devices to update
     */
    where?: home_deviceWhereInput;
  };

  /**
   * home_device upsert
   */
  export type home_deviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home_device
     */
    select?: home_deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: home_deviceInclude<ExtArgs> | null;
    /**
     * The filter to search for the home_device to update in case it exists.
     */
    where: home_deviceWhereUniqueInput;
    /**
     * In case the home_device found by the `where` argument doesn't exist, create a new home_device with this data.
     */
    create: XOR<home_deviceCreateInput, home_deviceUncheckedCreateInput>;
    /**
     * In case the home_device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<home_deviceUpdateInput, home_deviceUncheckedUpdateInput>;
  };

  /**
   * home_device delete
   */
  export type home_deviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home_device
     */
    select?: home_deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: home_deviceInclude<ExtArgs> | null;
    /**
     * Filter which home_device to delete.
     */
    where: home_deviceWhereUniqueInput;
  };

  /**
   * home_device deleteMany
   */
  export type home_deviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which home_devices to delete
     */
    where?: home_deviceWhereInput;
  };

  /**
   * home_device without action
   */
  export type home_deviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home_device
     */
    select?: home_deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: home_deviceInclude<ExtArgs> | null;
  };

  /**
   * Model service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null;
    _avg: ServiceAvgAggregateOutputType | null;
    _sum: ServiceSumAggregateOutputType | null;
    _min: ServiceMinAggregateOutputType | null;
    _max: ServiceMaxAggregateOutputType | null;
  };

  export type ServiceAvgAggregateOutputType = {
    cost: number | null;
    duration: number | null;
  };

  export type ServiceSumAggregateOutputType = {
    cost: number | null;
    duration: number | null;
  };

  export type ServiceMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    cost: number | null;
    duration: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ServiceMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    cost: number | null;
    duration: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ServiceCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    cost: number;
    duration: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ServiceAvgAggregateInputType = {
    cost?: true;
    duration?: true;
  };

  export type ServiceSumAggregateInputType = {
    cost?: true;
    duration?: true;
  };

  export type ServiceMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    cost?: true;
    duration?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ServiceMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    cost?: true;
    duration?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ServiceCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    cost?: true;
    duration?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which service to aggregate.
     */
    where?: serviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: serviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned services
     **/
    _count?: true | ServiceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ServiceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ServiceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ServiceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ServiceMaxAggregateInputType;
  };

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
    [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>;
  };

  export type serviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: serviceWhereInput;
    orderBy?: serviceOrderByWithAggregationInput | serviceOrderByWithAggregationInput[];
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum;
    having?: serviceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServiceCountAggregateInputType | true;
    _avg?: ServiceAvgAggregateInputType;
    _sum?: ServiceSumAggregateInputType;
    _min?: ServiceMinAggregateInputType;
    _max?: ServiceMaxAggregateInputType;
  };

  export type ServiceGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    cost: number;
    duration: number;
    created_at: Date;
    updated_at: Date;
    _count: ServiceCountAggregateOutputType | null;
    _avg: ServiceAvgAggregateOutputType | null;
    _sum: ServiceSumAggregateOutputType | null;
    _min: ServiceMinAggregateOutputType | null;
    _max: ServiceMaxAggregateOutputType | null;
  };

  type GetServiceGroupByPayload<T extends serviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ServiceGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
          : GetScalarType<T[P], ServiceGroupByOutputType[P]>;
      }
    >
  >;

  export type serviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      cost?: boolean;
      duration?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      home_device?: boolean | service$home_deviceArgs<ExtArgs>;
      _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['service']
  >;

  export type serviceSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    cost?: boolean;
    duration?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type serviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    home_device?: boolean | service$home_deviceArgs<ExtArgs>;
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $servicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'service';
    objects: {
      home_device: Prisma.$home_devicePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        cost: number;
        duration: number;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['service']
    >;
    composites: {};
  };

  type serviceGetPayload<S extends boolean | null | undefined | serviceDefaultArgs> = $Result.GetResult<
    Prisma.$servicePayload,
    S
  >;

  type serviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    serviceFindManyArgs,
    'select' | 'include'
  > & {
    select?: ServiceCountAggregateInputType | true;
  };

  export interface serviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['service']; meta: { name: 'service' } };
    /**
     * Find zero or one Service that matches the filter.
     * @param {serviceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends serviceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, serviceFindUniqueArgs<ExtArgs>>,
    ): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Service that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {serviceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends serviceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, serviceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__serviceClient<
      $Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends serviceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, serviceFindFirstArgs<ExtArgs>>,
    ): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends serviceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, serviceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     *
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends serviceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, serviceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Service.
     * @param {serviceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     *
     **/
    create<T extends serviceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, serviceCreateArgs<ExtArgs>>,
    ): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Services.
     *     @param {serviceCreateManyArgs} args - Arguments to create many Services.
     *     @example
     *     // Create many Services
     *     const service = await prisma.service.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends serviceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, serviceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Service.
     * @param {serviceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     *
     **/
    delete<T extends serviceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, serviceDeleteArgs<ExtArgs>>,
    ): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Service.
     * @param {serviceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends serviceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, serviceUpdateArgs<ExtArgs>>,
    ): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Services.
     * @param {serviceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends serviceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, serviceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends serviceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, serviceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Service.
     * @param {serviceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     **/
    upsert<T extends serviceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, serviceUpsertArgs<ExtArgs>>,
    ): Prisma__serviceClient<$Result.GetResult<Prisma.$servicePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
     **/
    count<T extends serviceCountArgs>(
      args?: Subset<T, serviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ServiceAggregateArgs>(
      args: Subset<T, ServiceAggregateArgs>,
    ): Prisma.PrismaPromise<GetServiceAggregateType<T>>;

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends serviceGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: serviceGroupByArgs['orderBy'] }
        : { orderBy?: serviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, serviceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the service model
     */
    readonly fields: serviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__serviceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    home_device<T extends service$home_deviceArgs<ExtArgs> = {}>(
      args?: Subset<T, service$home_deviceArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$home_devicePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the service model
   */
  interface serviceFieldRefs {
    readonly id: FieldRef<'service', 'String'>;
    readonly name: FieldRef<'service', 'String'>;
    readonly description: FieldRef<'service', 'String'>;
    readonly cost: FieldRef<'service', 'Int'>;
    readonly duration: FieldRef<'service', 'Int'>;
    readonly created_at: FieldRef<'service', 'DateTime'>;
    readonly updated_at: FieldRef<'service', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * service findUnique
   */
  export type serviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    /**
     * Filter, which service to fetch.
     */
    where: serviceWhereUniqueInput;
  };

  /**
   * service findUniqueOrThrow
   */
  export type serviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    /**
     * Filter, which service to fetch.
     */
    where: serviceWhereUniqueInput;
  };

  /**
   * service findFirst
   */
  export type serviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    /**
     * Filter, which service to fetch.
     */
    where?: serviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for services.
     */
    cursor?: serviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * service findFirstOrThrow
   */
  export type serviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    /**
     * Filter, which service to fetch.
     */
    where?: serviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for services.
     */
    cursor?: serviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * service findMany
   */
  export type serviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    /**
     * Filter, which services to fetch.
     */
    where?: serviceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of services to fetch.
     */
    orderBy?: serviceOrderByWithRelationInput | serviceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing services.
     */
    cursor?: serviceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` services.
     */
    skip?: number;
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * service create
   */
  export type serviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    /**
     * The data needed to create a service.
     */
    data: XOR<serviceCreateInput, serviceUncheckedCreateInput>;
  };

  /**
   * service createMany
   */
  export type serviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many services.
     */
    data: serviceCreateManyInput | serviceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * service update
   */
  export type serviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    /**
     * The data needed to update a service.
     */
    data: XOR<serviceUpdateInput, serviceUncheckedUpdateInput>;
    /**
     * Choose, which service to update.
     */
    where: serviceWhereUniqueInput;
  };

  /**
   * service updateMany
   */
  export type serviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update services.
     */
    data: XOR<serviceUpdateManyMutationInput, serviceUncheckedUpdateManyInput>;
    /**
     * Filter which services to update
     */
    where?: serviceWhereInput;
  };

  /**
   * service upsert
   */
  export type serviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    /**
     * The filter to search for the service to update in case it exists.
     */
    where: serviceWhereUniqueInput;
    /**
     * In case the service found by the `where` argument doesn't exist, create a new service with this data.
     */
    create: XOR<serviceCreateInput, serviceUncheckedCreateInput>;
    /**
     * In case the service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<serviceUpdateInput, serviceUncheckedUpdateInput>;
  };

  /**
   * service delete
   */
  export type serviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
    /**
     * Filter which service to delete.
     */
    where: serviceWhereUniqueInput;
  };

  /**
   * service deleteMany
   */
  export type serviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which services to delete
     */
    where?: serviceWhereInput;
  };

  /**
   * service.home_device
   */
  export type service$home_deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the home_device
     */
    select?: home_deviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: home_deviceInclude<ExtArgs> | null;
    where?: home_deviceWhereInput;
    orderBy?: home_deviceOrderByWithRelationInput | home_deviceOrderByWithRelationInput[];
    cursor?: home_deviceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Home_deviceScalarFieldEnum | Home_deviceScalarFieldEnum[];
  };

  /**
   * service without action
   */
  export type serviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the service
     */
    select?: serviceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serviceInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      company?: boolean | user$companyArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | user$companyArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const DeviceScalarFieldEnum: {
    id: 'id';
    name: 'name';
    model: 'model';
    manufacturer: 'manufacturer';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum];

  export const HomeScalarFieldEnum: {
    id: 'id';
    address: 'address';
    city: 'city';
    state: 'state';
    zip_code: 'zip_code';
    country: 'country';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type HomeScalarFieldEnum = (typeof HomeScalarFieldEnum)[keyof typeof HomeScalarFieldEnum];

  export const Home_deviceScalarFieldEnum: {
    id: 'id';
    home_id: 'home_id';
    device_id: 'device_id';
    installation_date: 'installation_date';
    warranty_expiry: 'warranty_expiry';
    service_id: 'service_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Home_deviceScalarFieldEnum = (typeof Home_deviceScalarFieldEnum)[keyof typeof Home_deviceScalarFieldEnum];

  export const ServiceScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    cost: 'cost';
    duration: 'duration';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type deviceWhereInput = {
    AND?: deviceWhereInput | deviceWhereInput[];
    OR?: deviceWhereInput[];
    NOT?: deviceWhereInput | deviceWhereInput[];
    id?: UuidFilter<'device'> | string;
    name?: StringFilter<'device'> | string;
    model?: StringFilter<'device'> | string;
    manufacturer?: StringFilter<'device'> | string;
    status?: StringFilter<'device'> | string;
    created_at?: DateTimeFilter<'device'> | Date | string;
    updated_at?: DateTimeFilter<'device'> | Date | string;
    home_device?: Home_deviceListRelationFilter;
  };

  export type deviceOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    model?: SortOrder;
    manufacturer?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    home_device?: home_deviceOrderByRelationAggregateInput;
  };

  export type deviceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: deviceWhereInput | deviceWhereInput[];
      OR?: deviceWhereInput[];
      NOT?: deviceWhereInput | deviceWhereInput[];
      name?: StringFilter<'device'> | string;
      model?: StringFilter<'device'> | string;
      manufacturer?: StringFilter<'device'> | string;
      status?: StringFilter<'device'> | string;
      created_at?: DateTimeFilter<'device'> | Date | string;
      updated_at?: DateTimeFilter<'device'> | Date | string;
      home_device?: Home_deviceListRelationFilter;
    },
    'id'
  >;

  export type deviceOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    model?: SortOrder;
    manufacturer?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: deviceCountOrderByAggregateInput;
    _max?: deviceMaxOrderByAggregateInput;
    _min?: deviceMinOrderByAggregateInput;
  };

  export type deviceScalarWhereWithAggregatesInput = {
    AND?: deviceScalarWhereWithAggregatesInput | deviceScalarWhereWithAggregatesInput[];
    OR?: deviceScalarWhereWithAggregatesInput[];
    NOT?: deviceScalarWhereWithAggregatesInput | deviceScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'device'> | string;
    name?: StringWithAggregatesFilter<'device'> | string;
    model?: StringWithAggregatesFilter<'device'> | string;
    manufacturer?: StringWithAggregatesFilter<'device'> | string;
    status?: StringWithAggregatesFilter<'device'> | string;
    created_at?: DateTimeWithAggregatesFilter<'device'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'device'> | Date | string;
  };

  export type homeWhereInput = {
    AND?: homeWhereInput | homeWhereInput[];
    OR?: homeWhereInput[];
    NOT?: homeWhereInput | homeWhereInput[];
    id?: UuidFilter<'home'> | string;
    address?: StringFilter<'home'> | string;
    city?: StringFilter<'home'> | string;
    state?: StringFilter<'home'> | string;
    zip_code?: IntFilter<'home'> | number;
    country?: StringFilter<'home'> | string;
    created_at?: DateTimeFilter<'home'> | Date | string;
    updated_at?: DateTimeFilter<'home'> | Date | string;
    home_device?: Home_deviceListRelationFilter;
  };

  export type homeOrderByWithRelationInput = {
    id?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    country?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    home_device?: home_deviceOrderByRelationAggregateInput;
  };

  export type homeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: homeWhereInput | homeWhereInput[];
      OR?: homeWhereInput[];
      NOT?: homeWhereInput | homeWhereInput[];
      address?: StringFilter<'home'> | string;
      city?: StringFilter<'home'> | string;
      state?: StringFilter<'home'> | string;
      zip_code?: IntFilter<'home'> | number;
      country?: StringFilter<'home'> | string;
      created_at?: DateTimeFilter<'home'> | Date | string;
      updated_at?: DateTimeFilter<'home'> | Date | string;
      home_device?: Home_deviceListRelationFilter;
    },
    'id'
  >;

  export type homeOrderByWithAggregationInput = {
    id?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    country?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: homeCountOrderByAggregateInput;
    _avg?: homeAvgOrderByAggregateInput;
    _max?: homeMaxOrderByAggregateInput;
    _min?: homeMinOrderByAggregateInput;
    _sum?: homeSumOrderByAggregateInput;
  };

  export type homeScalarWhereWithAggregatesInput = {
    AND?: homeScalarWhereWithAggregatesInput | homeScalarWhereWithAggregatesInput[];
    OR?: homeScalarWhereWithAggregatesInput[];
    NOT?: homeScalarWhereWithAggregatesInput | homeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'home'> | string;
    address?: StringWithAggregatesFilter<'home'> | string;
    city?: StringWithAggregatesFilter<'home'> | string;
    state?: StringWithAggregatesFilter<'home'> | string;
    zip_code?: IntWithAggregatesFilter<'home'> | number;
    country?: StringWithAggregatesFilter<'home'> | string;
    created_at?: DateTimeWithAggregatesFilter<'home'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'home'> | Date | string;
  };

  export type home_deviceWhereInput = {
    AND?: home_deviceWhereInput | home_deviceWhereInput[];
    OR?: home_deviceWhereInput[];
    NOT?: home_deviceWhereInput | home_deviceWhereInput[];
    id?: UuidFilter<'home_device'> | string;
    home_id?: UuidFilter<'home_device'> | string;
    device_id?: UuidFilter<'home_device'> | string;
    installation_date?: DateTimeNullableFilter<'home_device'> | Date | string | null;
    warranty_expiry?: DateTimeNullableFilter<'home_device'> | Date | string | null;
    service_id?: UuidFilter<'home_device'> | string;
    created_at?: DateTimeFilter<'home_device'> | Date | string;
    updated_at?: DateTimeFilter<'home_device'> | Date | string;
    device?: XOR<DeviceRelationFilter, deviceWhereInput>;
    home?: XOR<HomeRelationFilter, homeWhereInput>;
    service?: XOR<ServiceRelationFilter, serviceWhereInput>;
  };

  export type home_deviceOrderByWithRelationInput = {
    id?: SortOrder;
    home_id?: SortOrder;
    device_id?: SortOrder;
    installation_date?: SortOrderInput | SortOrder;
    warranty_expiry?: SortOrderInput | SortOrder;
    service_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    device?: deviceOrderByWithRelationInput;
    home?: homeOrderByWithRelationInput;
    service?: serviceOrderByWithRelationInput;
  };

  export type home_deviceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: home_deviceWhereInput | home_deviceWhereInput[];
      OR?: home_deviceWhereInput[];
      NOT?: home_deviceWhereInput | home_deviceWhereInput[];
      home_id?: UuidFilter<'home_device'> | string;
      device_id?: UuidFilter<'home_device'> | string;
      installation_date?: DateTimeNullableFilter<'home_device'> | Date | string | null;
      warranty_expiry?: DateTimeNullableFilter<'home_device'> | Date | string | null;
      service_id?: UuidFilter<'home_device'> | string;
      created_at?: DateTimeFilter<'home_device'> | Date | string;
      updated_at?: DateTimeFilter<'home_device'> | Date | string;
      device?: XOR<DeviceRelationFilter, deviceWhereInput>;
      home?: XOR<HomeRelationFilter, homeWhereInput>;
      service?: XOR<ServiceRelationFilter, serviceWhereInput>;
    },
    'id'
  >;

  export type home_deviceOrderByWithAggregationInput = {
    id?: SortOrder;
    home_id?: SortOrder;
    device_id?: SortOrder;
    installation_date?: SortOrderInput | SortOrder;
    warranty_expiry?: SortOrderInput | SortOrder;
    service_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: home_deviceCountOrderByAggregateInput;
    _max?: home_deviceMaxOrderByAggregateInput;
    _min?: home_deviceMinOrderByAggregateInput;
  };

  export type home_deviceScalarWhereWithAggregatesInput = {
    AND?: home_deviceScalarWhereWithAggregatesInput | home_deviceScalarWhereWithAggregatesInput[];
    OR?: home_deviceScalarWhereWithAggregatesInput[];
    NOT?: home_deviceScalarWhereWithAggregatesInput | home_deviceScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'home_device'> | string;
    home_id?: UuidWithAggregatesFilter<'home_device'> | string;
    device_id?: UuidWithAggregatesFilter<'home_device'> | string;
    installation_date?: DateTimeNullableWithAggregatesFilter<'home_device'> | Date | string | null;
    warranty_expiry?: DateTimeNullableWithAggregatesFilter<'home_device'> | Date | string | null;
    service_id?: UuidWithAggregatesFilter<'home_device'> | string;
    created_at?: DateTimeWithAggregatesFilter<'home_device'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'home_device'> | Date | string;
  };

  export type serviceWhereInput = {
    AND?: serviceWhereInput | serviceWhereInput[];
    OR?: serviceWhereInput[];
    NOT?: serviceWhereInput | serviceWhereInput[];
    id?: UuidFilter<'service'> | string;
    name?: StringFilter<'service'> | string;
    description?: StringNullableFilter<'service'> | string | null;
    cost?: IntFilter<'service'> | number;
    duration?: IntFilter<'service'> | number;
    created_at?: DateTimeFilter<'service'> | Date | string;
    updated_at?: DateTimeFilter<'service'> | Date | string;
    home_device?: Home_deviceListRelationFilter;
  };

  export type serviceOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    cost?: SortOrder;
    duration?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    home_device?: home_deviceOrderByRelationAggregateInput;
  };

  export type serviceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: serviceWhereInput | serviceWhereInput[];
      OR?: serviceWhereInput[];
      NOT?: serviceWhereInput | serviceWhereInput[];
      name?: StringFilter<'service'> | string;
      description?: StringNullableFilter<'service'> | string | null;
      cost?: IntFilter<'service'> | number;
      duration?: IntFilter<'service'> | number;
      created_at?: DateTimeFilter<'service'> | Date | string;
      updated_at?: DateTimeFilter<'service'> | Date | string;
      home_device?: Home_deviceListRelationFilter;
    },
    'id'
  >;

  export type serviceOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    cost?: SortOrder;
    duration?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: serviceCountOrderByAggregateInput;
    _avg?: serviceAvgOrderByAggregateInput;
    _max?: serviceMaxOrderByAggregateInput;
    _min?: serviceMinOrderByAggregateInput;
    _sum?: serviceSumOrderByAggregateInput;
  };

  export type serviceScalarWhereWithAggregatesInput = {
    AND?: serviceScalarWhereWithAggregatesInput | serviceScalarWhereWithAggregatesInput[];
    OR?: serviceScalarWhereWithAggregatesInput[];
    NOT?: serviceScalarWhereWithAggregatesInput | serviceScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'service'> | string;
    name?: StringWithAggregatesFilter<'service'> | string;
    description?: StringNullableWithAggregatesFilter<'service'> | string | null;
    cost?: IntWithAggregatesFilter<'service'> | number;
    duration?: IntWithAggregatesFilter<'service'> | number;
    created_at?: DateTimeWithAggregatesFilter<'service'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'service'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    company?: CompanyListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      company?: CompanyListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type deviceCreateInput = {
    id?: string;
    name: string;
    model: string;
    manufacturer: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    home_device?: home_deviceCreateNestedManyWithoutDeviceInput;
  };

  export type deviceUncheckedCreateInput = {
    id?: string;
    name: string;
    model: string;
    manufacturer: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    home_device?: home_deviceUncheckedCreateNestedManyWithoutDeviceInput;
  };

  export type deviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    home_device?: home_deviceUpdateManyWithoutDeviceNestedInput;
  };

  export type deviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    home_device?: home_deviceUncheckedUpdateManyWithoutDeviceNestedInput;
  };

  export type deviceCreateManyInput = {
    id?: string;
    name: string;
    model: string;
    manufacturer: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type deviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type deviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type homeCreateInput = {
    id?: string;
    address: string;
    city: string;
    state: string;
    zip_code: number;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    home_device?: home_deviceCreateNestedManyWithoutHomeInput;
  };

  export type homeUncheckedCreateInput = {
    id?: string;
    address: string;
    city: string;
    state: string;
    zip_code: number;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    home_device?: home_deviceUncheckedCreateNestedManyWithoutHomeInput;
  };

  export type homeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: IntFieldUpdateOperationsInput | number;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    home_device?: home_deviceUpdateManyWithoutHomeNestedInput;
  };

  export type homeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: IntFieldUpdateOperationsInput | number;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    home_device?: home_deviceUncheckedUpdateManyWithoutHomeNestedInput;
  };

  export type homeCreateManyInput = {
    id?: string;
    address: string;
    city: string;
    state: string;
    zip_code: number;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type homeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: IntFieldUpdateOperationsInput | number;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type homeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: IntFieldUpdateOperationsInput | number;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type home_deviceCreateInput = {
    id?: string;
    installation_date?: Date | string | null;
    warranty_expiry?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    device: deviceCreateNestedOneWithoutHome_deviceInput;
    home: homeCreateNestedOneWithoutHome_deviceInput;
    service: serviceCreateNestedOneWithoutHome_deviceInput;
  };

  export type home_deviceUncheckedCreateInput = {
    id?: string;
    home_id: string;
    device_id: string;
    installation_date?: Date | string | null;
    warranty_expiry?: Date | string | null;
    service_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type home_deviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    device?: deviceUpdateOneRequiredWithoutHome_deviceNestedInput;
    home?: homeUpdateOneRequiredWithoutHome_deviceNestedInput;
    service?: serviceUpdateOneRequiredWithoutHome_deviceNestedInput;
  };

  export type home_deviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    home_id?: StringFieldUpdateOperationsInput | string;
    device_id?: StringFieldUpdateOperationsInput | string;
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    service_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type home_deviceCreateManyInput = {
    id?: string;
    home_id: string;
    device_id: string;
    installation_date?: Date | string | null;
    warranty_expiry?: Date | string | null;
    service_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type home_deviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type home_deviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    home_id?: StringFieldUpdateOperationsInput | string;
    device_id?: StringFieldUpdateOperationsInput | string;
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    service_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type serviceCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    cost: number;
    duration: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    home_device?: home_deviceCreateNestedManyWithoutServiceInput;
  };

  export type serviceUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    cost: number;
    duration: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    home_device?: home_deviceUncheckedCreateNestedManyWithoutServiceInput;
  };

  export type serviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    cost?: IntFieldUpdateOperationsInput | number;
    duration?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    home_device?: home_deviceUpdateManyWithoutServiceNestedInput;
  };

  export type serviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    cost?: IntFieldUpdateOperationsInput | number;
    duration?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    home_device?: home_deviceUncheckedUpdateManyWithoutServiceNestedInput;
  };

  export type serviceCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    cost: number;
    duration: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type serviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    cost?: IntFieldUpdateOperationsInput | number;
    duration?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type serviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    cost?: IntFieldUpdateOperationsInput | number;
    duration?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type Home_deviceListRelationFilter = {
    every?: home_deviceWhereInput;
    some?: home_deviceWhereInput;
    none?: home_deviceWhereInput;
  };

  export type home_deviceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type deviceCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    model?: SortOrder;
    manufacturer?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type deviceMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    model?: SortOrder;
    manufacturer?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type deviceMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    model?: SortOrder;
    manufacturer?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type homeCountOrderByAggregateInput = {
    id?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    country?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type homeAvgOrderByAggregateInput = {
    zip_code?: SortOrder;
  };

  export type homeMaxOrderByAggregateInput = {
    id?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    country?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type homeMinOrderByAggregateInput = {
    id?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    country?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type homeSumOrderByAggregateInput = {
    zip_code?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type DeviceRelationFilter = {
    is?: deviceWhereInput;
    isNot?: deviceWhereInput;
  };

  export type HomeRelationFilter = {
    is?: homeWhereInput;
    isNot?: homeWhereInput;
  };

  export type ServiceRelationFilter = {
    is?: serviceWhereInput;
    isNot?: serviceWhereInput;
  };

  export type home_deviceCountOrderByAggregateInput = {
    id?: SortOrder;
    home_id?: SortOrder;
    device_id?: SortOrder;
    installation_date?: SortOrder;
    warranty_expiry?: SortOrder;
    service_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type home_deviceMaxOrderByAggregateInput = {
    id?: SortOrder;
    home_id?: SortOrder;
    device_id?: SortOrder;
    installation_date?: SortOrder;
    warranty_expiry?: SortOrder;
    service_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type home_deviceMinOrderByAggregateInput = {
    id?: SortOrder;
    home_id?: SortOrder;
    device_id?: SortOrder;
    installation_date?: SortOrder;
    warranty_expiry?: SortOrder;
    service_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type serviceCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    cost?: SortOrder;
    duration?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type serviceAvgOrderByAggregateInput = {
    cost?: SortOrder;
    duration?: SortOrder;
  };

  export type serviceMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    cost?: SortOrder;
    duration?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type serviceMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    cost?: SortOrder;
    duration?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type serviceSumOrderByAggregateInput = {
    cost?: SortOrder;
    duration?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type home_deviceCreateNestedManyWithoutDeviceInput = {
    create?:
      | XOR<home_deviceCreateWithoutDeviceInput, home_deviceUncheckedCreateWithoutDeviceInput>
      | home_deviceCreateWithoutDeviceInput[]
      | home_deviceUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?: home_deviceCreateOrConnectWithoutDeviceInput | home_deviceCreateOrConnectWithoutDeviceInput[];
    createMany?: home_deviceCreateManyDeviceInputEnvelope;
    connect?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
  };

  export type home_deviceUncheckedCreateNestedManyWithoutDeviceInput = {
    create?:
      | XOR<home_deviceCreateWithoutDeviceInput, home_deviceUncheckedCreateWithoutDeviceInput>
      | home_deviceCreateWithoutDeviceInput[]
      | home_deviceUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?: home_deviceCreateOrConnectWithoutDeviceInput | home_deviceCreateOrConnectWithoutDeviceInput[];
    createMany?: home_deviceCreateManyDeviceInputEnvelope;
    connect?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
  };

  export type home_deviceUpdateManyWithoutDeviceNestedInput = {
    create?:
      | XOR<home_deviceCreateWithoutDeviceInput, home_deviceUncheckedCreateWithoutDeviceInput>
      | home_deviceCreateWithoutDeviceInput[]
      | home_deviceUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?: home_deviceCreateOrConnectWithoutDeviceInput | home_deviceCreateOrConnectWithoutDeviceInput[];
    upsert?: home_deviceUpsertWithWhereUniqueWithoutDeviceInput | home_deviceUpsertWithWhereUniqueWithoutDeviceInput[];
    createMany?: home_deviceCreateManyDeviceInputEnvelope;
    set?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    disconnect?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    delete?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    connect?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    update?: home_deviceUpdateWithWhereUniqueWithoutDeviceInput | home_deviceUpdateWithWhereUniqueWithoutDeviceInput[];
    updateMany?: home_deviceUpdateManyWithWhereWithoutDeviceInput | home_deviceUpdateManyWithWhereWithoutDeviceInput[];
    deleteMany?: home_deviceScalarWhereInput | home_deviceScalarWhereInput[];
  };

  export type home_deviceUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?:
      | XOR<home_deviceCreateWithoutDeviceInput, home_deviceUncheckedCreateWithoutDeviceInput>
      | home_deviceCreateWithoutDeviceInput[]
      | home_deviceUncheckedCreateWithoutDeviceInput[];
    connectOrCreate?: home_deviceCreateOrConnectWithoutDeviceInput | home_deviceCreateOrConnectWithoutDeviceInput[];
    upsert?: home_deviceUpsertWithWhereUniqueWithoutDeviceInput | home_deviceUpsertWithWhereUniqueWithoutDeviceInput[];
    createMany?: home_deviceCreateManyDeviceInputEnvelope;
    set?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    disconnect?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    delete?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    connect?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    update?: home_deviceUpdateWithWhereUniqueWithoutDeviceInput | home_deviceUpdateWithWhereUniqueWithoutDeviceInput[];
    updateMany?: home_deviceUpdateManyWithWhereWithoutDeviceInput | home_deviceUpdateManyWithWhereWithoutDeviceInput[];
    deleteMany?: home_deviceScalarWhereInput | home_deviceScalarWhereInput[];
  };

  export type home_deviceCreateNestedManyWithoutHomeInput = {
    create?:
      | XOR<home_deviceCreateWithoutHomeInput, home_deviceUncheckedCreateWithoutHomeInput>
      | home_deviceCreateWithoutHomeInput[]
      | home_deviceUncheckedCreateWithoutHomeInput[];
    connectOrCreate?: home_deviceCreateOrConnectWithoutHomeInput | home_deviceCreateOrConnectWithoutHomeInput[];
    createMany?: home_deviceCreateManyHomeInputEnvelope;
    connect?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
  };

  export type home_deviceUncheckedCreateNestedManyWithoutHomeInput = {
    create?:
      | XOR<home_deviceCreateWithoutHomeInput, home_deviceUncheckedCreateWithoutHomeInput>
      | home_deviceCreateWithoutHomeInput[]
      | home_deviceUncheckedCreateWithoutHomeInput[];
    connectOrCreate?: home_deviceCreateOrConnectWithoutHomeInput | home_deviceCreateOrConnectWithoutHomeInput[];
    createMany?: home_deviceCreateManyHomeInputEnvelope;
    connect?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type home_deviceUpdateManyWithoutHomeNestedInput = {
    create?:
      | XOR<home_deviceCreateWithoutHomeInput, home_deviceUncheckedCreateWithoutHomeInput>
      | home_deviceCreateWithoutHomeInput[]
      | home_deviceUncheckedCreateWithoutHomeInput[];
    connectOrCreate?: home_deviceCreateOrConnectWithoutHomeInput | home_deviceCreateOrConnectWithoutHomeInput[];
    upsert?: home_deviceUpsertWithWhereUniqueWithoutHomeInput | home_deviceUpsertWithWhereUniqueWithoutHomeInput[];
    createMany?: home_deviceCreateManyHomeInputEnvelope;
    set?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    disconnect?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    delete?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    connect?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    update?: home_deviceUpdateWithWhereUniqueWithoutHomeInput | home_deviceUpdateWithWhereUniqueWithoutHomeInput[];
    updateMany?: home_deviceUpdateManyWithWhereWithoutHomeInput | home_deviceUpdateManyWithWhereWithoutHomeInput[];
    deleteMany?: home_deviceScalarWhereInput | home_deviceScalarWhereInput[];
  };

  export type home_deviceUncheckedUpdateManyWithoutHomeNestedInput = {
    create?:
      | XOR<home_deviceCreateWithoutHomeInput, home_deviceUncheckedCreateWithoutHomeInput>
      | home_deviceCreateWithoutHomeInput[]
      | home_deviceUncheckedCreateWithoutHomeInput[];
    connectOrCreate?: home_deviceCreateOrConnectWithoutHomeInput | home_deviceCreateOrConnectWithoutHomeInput[];
    upsert?: home_deviceUpsertWithWhereUniqueWithoutHomeInput | home_deviceUpsertWithWhereUniqueWithoutHomeInput[];
    createMany?: home_deviceCreateManyHomeInputEnvelope;
    set?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    disconnect?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    delete?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    connect?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    update?: home_deviceUpdateWithWhereUniqueWithoutHomeInput | home_deviceUpdateWithWhereUniqueWithoutHomeInput[];
    updateMany?: home_deviceUpdateManyWithWhereWithoutHomeInput | home_deviceUpdateManyWithWhereWithoutHomeInput[];
    deleteMany?: home_deviceScalarWhereInput | home_deviceScalarWhereInput[];
  };

  export type deviceCreateNestedOneWithoutHome_deviceInput = {
    create?: XOR<deviceCreateWithoutHome_deviceInput, deviceUncheckedCreateWithoutHome_deviceInput>;
    connectOrCreate?: deviceCreateOrConnectWithoutHome_deviceInput;
    connect?: deviceWhereUniqueInput;
  };

  export type homeCreateNestedOneWithoutHome_deviceInput = {
    create?: XOR<homeCreateWithoutHome_deviceInput, homeUncheckedCreateWithoutHome_deviceInput>;
    connectOrCreate?: homeCreateOrConnectWithoutHome_deviceInput;
    connect?: homeWhereUniqueInput;
  };

  export type serviceCreateNestedOneWithoutHome_deviceInput = {
    create?: XOR<serviceCreateWithoutHome_deviceInput, serviceUncheckedCreateWithoutHome_deviceInput>;
    connectOrCreate?: serviceCreateOrConnectWithoutHome_deviceInput;
    connect?: serviceWhereUniqueInput;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type deviceUpdateOneRequiredWithoutHome_deviceNestedInput = {
    create?: XOR<deviceCreateWithoutHome_deviceInput, deviceUncheckedCreateWithoutHome_deviceInput>;
    connectOrCreate?: deviceCreateOrConnectWithoutHome_deviceInput;
    upsert?: deviceUpsertWithoutHome_deviceInput;
    connect?: deviceWhereUniqueInput;
    update?: XOR<
      XOR<deviceUpdateToOneWithWhereWithoutHome_deviceInput, deviceUpdateWithoutHome_deviceInput>,
      deviceUncheckedUpdateWithoutHome_deviceInput
    >;
  };

  export type homeUpdateOneRequiredWithoutHome_deviceNestedInput = {
    create?: XOR<homeCreateWithoutHome_deviceInput, homeUncheckedCreateWithoutHome_deviceInput>;
    connectOrCreate?: homeCreateOrConnectWithoutHome_deviceInput;
    upsert?: homeUpsertWithoutHome_deviceInput;
    connect?: homeWhereUniqueInput;
    update?: XOR<
      XOR<homeUpdateToOneWithWhereWithoutHome_deviceInput, homeUpdateWithoutHome_deviceInput>,
      homeUncheckedUpdateWithoutHome_deviceInput
    >;
  };

  export type serviceUpdateOneRequiredWithoutHome_deviceNestedInput = {
    create?: XOR<serviceCreateWithoutHome_deviceInput, serviceUncheckedCreateWithoutHome_deviceInput>;
    connectOrCreate?: serviceCreateOrConnectWithoutHome_deviceInput;
    upsert?: serviceUpsertWithoutHome_deviceInput;
    connect?: serviceWhereUniqueInput;
    update?: XOR<
      XOR<serviceUpdateToOneWithWhereWithoutHome_deviceInput, serviceUpdateWithoutHome_deviceInput>,
      serviceUncheckedUpdateWithoutHome_deviceInput
    >;
  };

  export type home_deviceCreateNestedManyWithoutServiceInput = {
    create?:
      | XOR<home_deviceCreateWithoutServiceInput, home_deviceUncheckedCreateWithoutServiceInput>
      | home_deviceCreateWithoutServiceInput[]
      | home_deviceUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: home_deviceCreateOrConnectWithoutServiceInput | home_deviceCreateOrConnectWithoutServiceInput[];
    createMany?: home_deviceCreateManyServiceInputEnvelope;
    connect?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
  };

  export type home_deviceUncheckedCreateNestedManyWithoutServiceInput = {
    create?:
      | XOR<home_deviceCreateWithoutServiceInput, home_deviceUncheckedCreateWithoutServiceInput>
      | home_deviceCreateWithoutServiceInput[]
      | home_deviceUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: home_deviceCreateOrConnectWithoutServiceInput | home_deviceCreateOrConnectWithoutServiceInput[];
    createMany?: home_deviceCreateManyServiceInputEnvelope;
    connect?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
  };

  export type home_deviceUpdateManyWithoutServiceNestedInput = {
    create?:
      | XOR<home_deviceCreateWithoutServiceInput, home_deviceUncheckedCreateWithoutServiceInput>
      | home_deviceCreateWithoutServiceInput[]
      | home_deviceUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: home_deviceCreateOrConnectWithoutServiceInput | home_deviceCreateOrConnectWithoutServiceInput[];
    upsert?:
      | home_deviceUpsertWithWhereUniqueWithoutServiceInput
      | home_deviceUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: home_deviceCreateManyServiceInputEnvelope;
    set?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    disconnect?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    delete?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    connect?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    update?:
      | home_deviceUpdateWithWhereUniqueWithoutServiceInput
      | home_deviceUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?:
      | home_deviceUpdateManyWithWhereWithoutServiceInput
      | home_deviceUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: home_deviceScalarWhereInput | home_deviceScalarWhereInput[];
  };

  export type home_deviceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?:
      | XOR<home_deviceCreateWithoutServiceInput, home_deviceUncheckedCreateWithoutServiceInput>
      | home_deviceCreateWithoutServiceInput[]
      | home_deviceUncheckedCreateWithoutServiceInput[];
    connectOrCreate?: home_deviceCreateOrConnectWithoutServiceInput | home_deviceCreateOrConnectWithoutServiceInput[];
    upsert?:
      | home_deviceUpsertWithWhereUniqueWithoutServiceInput
      | home_deviceUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: home_deviceCreateManyServiceInputEnvelope;
    set?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    disconnect?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    delete?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    connect?: home_deviceWhereUniqueInput | home_deviceWhereUniqueInput[];
    update?:
      | home_deviceUpdateWithWhereUniqueWithoutServiceInput
      | home_deviceUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?:
      | home_deviceUpdateManyWithWhereWithoutServiceInput
      | home_deviceUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: home_deviceScalarWhereInput | home_deviceScalarWhereInput[];
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type home_deviceCreateWithoutDeviceInput = {
    id?: string;
    installation_date?: Date | string | null;
    warranty_expiry?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    home: homeCreateNestedOneWithoutHome_deviceInput;
    service: serviceCreateNestedOneWithoutHome_deviceInput;
  };

  export type home_deviceUncheckedCreateWithoutDeviceInput = {
    id?: string;
    home_id: string;
    installation_date?: Date | string | null;
    warranty_expiry?: Date | string | null;
    service_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type home_deviceCreateOrConnectWithoutDeviceInput = {
    where: home_deviceWhereUniqueInput;
    create: XOR<home_deviceCreateWithoutDeviceInput, home_deviceUncheckedCreateWithoutDeviceInput>;
  };

  export type home_deviceCreateManyDeviceInputEnvelope = {
    data: home_deviceCreateManyDeviceInput | home_deviceCreateManyDeviceInput[];
    skipDuplicates?: boolean;
  };

  export type home_deviceUpsertWithWhereUniqueWithoutDeviceInput = {
    where: home_deviceWhereUniqueInput;
    update: XOR<home_deviceUpdateWithoutDeviceInput, home_deviceUncheckedUpdateWithoutDeviceInput>;
    create: XOR<home_deviceCreateWithoutDeviceInput, home_deviceUncheckedCreateWithoutDeviceInput>;
  };

  export type home_deviceUpdateWithWhereUniqueWithoutDeviceInput = {
    where: home_deviceWhereUniqueInput;
    data: XOR<home_deviceUpdateWithoutDeviceInput, home_deviceUncheckedUpdateWithoutDeviceInput>;
  };

  export type home_deviceUpdateManyWithWhereWithoutDeviceInput = {
    where: home_deviceScalarWhereInput;
    data: XOR<home_deviceUpdateManyMutationInput, home_deviceUncheckedUpdateManyWithoutDeviceInput>;
  };

  export type home_deviceScalarWhereInput = {
    AND?: home_deviceScalarWhereInput | home_deviceScalarWhereInput[];
    OR?: home_deviceScalarWhereInput[];
    NOT?: home_deviceScalarWhereInput | home_deviceScalarWhereInput[];
    id?: UuidFilter<'home_device'> | string;
    home_id?: UuidFilter<'home_device'> | string;
    device_id?: UuidFilter<'home_device'> | string;
    installation_date?: DateTimeNullableFilter<'home_device'> | Date | string | null;
    warranty_expiry?: DateTimeNullableFilter<'home_device'> | Date | string | null;
    service_id?: UuidFilter<'home_device'> | string;
    created_at?: DateTimeFilter<'home_device'> | Date | string;
    updated_at?: DateTimeFilter<'home_device'> | Date | string;
  };

  export type home_deviceCreateWithoutHomeInput = {
    id?: string;
    installation_date?: Date | string | null;
    warranty_expiry?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    device: deviceCreateNestedOneWithoutHome_deviceInput;
    service: serviceCreateNestedOneWithoutHome_deviceInput;
  };

  export type home_deviceUncheckedCreateWithoutHomeInput = {
    id?: string;
    device_id: string;
    installation_date?: Date | string | null;
    warranty_expiry?: Date | string | null;
    service_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type home_deviceCreateOrConnectWithoutHomeInput = {
    where: home_deviceWhereUniqueInput;
    create: XOR<home_deviceCreateWithoutHomeInput, home_deviceUncheckedCreateWithoutHomeInput>;
  };

  export type home_deviceCreateManyHomeInputEnvelope = {
    data: home_deviceCreateManyHomeInput | home_deviceCreateManyHomeInput[];
    skipDuplicates?: boolean;
  };

  export type home_deviceUpsertWithWhereUniqueWithoutHomeInput = {
    where: home_deviceWhereUniqueInput;
    update: XOR<home_deviceUpdateWithoutHomeInput, home_deviceUncheckedUpdateWithoutHomeInput>;
    create: XOR<home_deviceCreateWithoutHomeInput, home_deviceUncheckedCreateWithoutHomeInput>;
  };

  export type home_deviceUpdateWithWhereUniqueWithoutHomeInput = {
    where: home_deviceWhereUniqueInput;
    data: XOR<home_deviceUpdateWithoutHomeInput, home_deviceUncheckedUpdateWithoutHomeInput>;
  };

  export type home_deviceUpdateManyWithWhereWithoutHomeInput = {
    where: home_deviceScalarWhereInput;
    data: XOR<home_deviceUpdateManyMutationInput, home_deviceUncheckedUpdateManyWithoutHomeInput>;
  };

  export type deviceCreateWithoutHome_deviceInput = {
    id?: string;
    name: string;
    model: string;
    manufacturer: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type deviceUncheckedCreateWithoutHome_deviceInput = {
    id?: string;
    name: string;
    model: string;
    manufacturer: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type deviceCreateOrConnectWithoutHome_deviceInput = {
    where: deviceWhereUniqueInput;
    create: XOR<deviceCreateWithoutHome_deviceInput, deviceUncheckedCreateWithoutHome_deviceInput>;
  };

  export type homeCreateWithoutHome_deviceInput = {
    id?: string;
    address: string;
    city: string;
    state: string;
    zip_code: number;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type homeUncheckedCreateWithoutHome_deviceInput = {
    id?: string;
    address: string;
    city: string;
    state: string;
    zip_code: number;
    country: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type homeCreateOrConnectWithoutHome_deviceInput = {
    where: homeWhereUniqueInput;
    create: XOR<homeCreateWithoutHome_deviceInput, homeUncheckedCreateWithoutHome_deviceInput>;
  };

  export type serviceCreateWithoutHome_deviceInput = {
    id?: string;
    name: string;
    description?: string | null;
    cost: number;
    duration: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type serviceUncheckedCreateWithoutHome_deviceInput = {
    id?: string;
    name: string;
    description?: string | null;
    cost: number;
    duration: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type serviceCreateOrConnectWithoutHome_deviceInput = {
    where: serviceWhereUniqueInput;
    create: XOR<serviceCreateWithoutHome_deviceInput, serviceUncheckedCreateWithoutHome_deviceInput>;
  };

  export type deviceUpsertWithoutHome_deviceInput = {
    update: XOR<deviceUpdateWithoutHome_deviceInput, deviceUncheckedUpdateWithoutHome_deviceInput>;
    create: XOR<deviceCreateWithoutHome_deviceInput, deviceUncheckedCreateWithoutHome_deviceInput>;
    where?: deviceWhereInput;
  };

  export type deviceUpdateToOneWithWhereWithoutHome_deviceInput = {
    where?: deviceWhereInput;
    data: XOR<deviceUpdateWithoutHome_deviceInput, deviceUncheckedUpdateWithoutHome_deviceInput>;
  };

  export type deviceUpdateWithoutHome_deviceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type deviceUncheckedUpdateWithoutHome_deviceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    manufacturer?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type homeUpsertWithoutHome_deviceInput = {
    update: XOR<homeUpdateWithoutHome_deviceInput, homeUncheckedUpdateWithoutHome_deviceInput>;
    create: XOR<homeCreateWithoutHome_deviceInput, homeUncheckedCreateWithoutHome_deviceInput>;
    where?: homeWhereInput;
  };

  export type homeUpdateToOneWithWhereWithoutHome_deviceInput = {
    where?: homeWhereInput;
    data: XOR<homeUpdateWithoutHome_deviceInput, homeUncheckedUpdateWithoutHome_deviceInput>;
  };

  export type homeUpdateWithoutHome_deviceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: IntFieldUpdateOperationsInput | number;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type homeUncheckedUpdateWithoutHome_deviceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: IntFieldUpdateOperationsInput | number;
    country?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type serviceUpsertWithoutHome_deviceInput = {
    update: XOR<serviceUpdateWithoutHome_deviceInput, serviceUncheckedUpdateWithoutHome_deviceInput>;
    create: XOR<serviceCreateWithoutHome_deviceInput, serviceUncheckedCreateWithoutHome_deviceInput>;
    where?: serviceWhereInput;
  };

  export type serviceUpdateToOneWithWhereWithoutHome_deviceInput = {
    where?: serviceWhereInput;
    data: XOR<serviceUpdateWithoutHome_deviceInput, serviceUncheckedUpdateWithoutHome_deviceInput>;
  };

  export type serviceUpdateWithoutHome_deviceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    cost?: IntFieldUpdateOperationsInput | number;
    duration?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type serviceUncheckedUpdateWithoutHome_deviceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    cost?: IntFieldUpdateOperationsInput | number;
    duration?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type home_deviceCreateWithoutServiceInput = {
    id?: string;
    installation_date?: Date | string | null;
    warranty_expiry?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    device: deviceCreateNestedOneWithoutHome_deviceInput;
    home: homeCreateNestedOneWithoutHome_deviceInput;
  };

  export type home_deviceUncheckedCreateWithoutServiceInput = {
    id?: string;
    home_id: string;
    device_id: string;
    installation_date?: Date | string | null;
    warranty_expiry?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type home_deviceCreateOrConnectWithoutServiceInput = {
    where: home_deviceWhereUniqueInput;
    create: XOR<home_deviceCreateWithoutServiceInput, home_deviceUncheckedCreateWithoutServiceInput>;
  };

  export type home_deviceCreateManyServiceInputEnvelope = {
    data: home_deviceCreateManyServiceInput | home_deviceCreateManyServiceInput[];
    skipDuplicates?: boolean;
  };

  export type home_deviceUpsertWithWhereUniqueWithoutServiceInput = {
    where: home_deviceWhereUniqueInput;
    update: XOR<home_deviceUpdateWithoutServiceInput, home_deviceUncheckedUpdateWithoutServiceInput>;
    create: XOR<home_deviceCreateWithoutServiceInput, home_deviceUncheckedCreateWithoutServiceInput>;
  };

  export type home_deviceUpdateWithWhereUniqueWithoutServiceInput = {
    where: home_deviceWhereUniqueInput;
    data: XOR<home_deviceUpdateWithoutServiceInput, home_deviceUncheckedUpdateWithoutServiceInput>;
  };

  export type home_deviceUpdateManyWithWhereWithoutServiceInput = {
    where: home_deviceScalarWhereInput;
    data: XOR<home_deviceUpdateManyMutationInput, home_deviceUncheckedUpdateManyWithoutServiceInput>;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type home_deviceCreateManyDeviceInput = {
    id?: string;
    home_id: string;
    installation_date?: Date | string | null;
    warranty_expiry?: Date | string | null;
    service_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type home_deviceUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    home?: homeUpdateOneRequiredWithoutHome_deviceNestedInput;
    service?: serviceUpdateOneRequiredWithoutHome_deviceNestedInput;
  };

  export type home_deviceUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    home_id?: StringFieldUpdateOperationsInput | string;
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    service_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type home_deviceUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    home_id?: StringFieldUpdateOperationsInput | string;
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    service_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type home_deviceCreateManyHomeInput = {
    id?: string;
    device_id: string;
    installation_date?: Date | string | null;
    warranty_expiry?: Date | string | null;
    service_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type home_deviceUpdateWithoutHomeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    device?: deviceUpdateOneRequiredWithoutHome_deviceNestedInput;
    service?: serviceUpdateOneRequiredWithoutHome_deviceNestedInput;
  };

  export type home_deviceUncheckedUpdateWithoutHomeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    device_id?: StringFieldUpdateOperationsInput | string;
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    service_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type home_deviceUncheckedUpdateManyWithoutHomeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    device_id?: StringFieldUpdateOperationsInput | string;
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    service_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type home_deviceCreateManyServiceInput = {
    id?: string;
    home_id: string;
    device_id: string;
    installation_date?: Date | string | null;
    warranty_expiry?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type home_deviceUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    device?: deviceUpdateOneRequiredWithoutHome_deviceNestedInput;
    home?: homeUpdateOneRequiredWithoutHome_deviceNestedInput;
  };

  export type home_deviceUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    home_id?: StringFieldUpdateOperationsInput | string;
    device_id?: StringFieldUpdateOperationsInput | string;
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type home_deviceUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    home_id?: StringFieldUpdateOperationsInput | string;
    device_id?: StringFieldUpdateOperationsInput | string;
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    warranty_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use DeviceCountOutputTypeDefaultArgs instead
   */
  export type DeviceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    DeviceCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use HomeCountOutputTypeDefaultArgs instead
   */
  export type HomeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    HomeCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ServiceCountOutputTypeDefaultArgs instead
   */
  export type ServiceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ServiceCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use deviceDefaultArgs instead
   */
  export type deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    deviceDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use homeDefaultArgs instead
   */
  export type homeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = homeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use home_deviceDefaultArgs instead
   */
  export type home_deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    home_deviceDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use serviceDefaultArgs instead
   */
  export type serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    serviceDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
