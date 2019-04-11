declare type Prefix = string;

declare type SchemaArray = Array<Schema>;

declare type Inheritance = {
  key1?: string,
  key2?: string,
  key3?: string,
} | {
  key1?: string,
  key2?: string,
  key4?: string,
};

declare type Exact = {|
  key1?: string,
  key2?: string,
|};

declare type PositiveInteger = number;

declare type PositiveIntegerDefault0 = PositiveInteger;

declare type SimpleTypes = "array" | "boolean" | "integer" | "null" | "number" | "object" | "string";

declare type StringArray = Array<string>;

declare type Schema = {
  prefix?: Prefix,
  id?: string,
  $ref?: string,
  $schema?: string,
  title?: string,
  description?: string,
  default?: any,
  multipleOf?: number,
  maximum?: number,
  exclusiveMaximum?: boolean,
  minimum?: number,
  exclusiveMinimum?: boolean,
  maxLength?: PositiveInteger,
  minLength?: PositiveIntegerDefault0,
  pattern?: string,
  additionalItems?: boolean | Schema,
  items?: Schema | SchemaArray,
  maxItems?: PositiveInteger,
  minItems?: PositiveIntegerDefault0,
  uniqueItems?: boolean,
  maxProperties?: PositiveInteger,
  minProperties?: PositiveIntegerDefault0,
  required?: StringArray,
  additionalProperties?: boolean | Schema,
  definitions?: {
    [key: any]: Schema
  },
  properties?: {
    [key: any]: Schema
  },
  patternProperties?: {
    [key: any]: Schema
  },
  dependencies?: {
    [key: any]: (Schema | StringArray)
  },
  enum?: Array<any>,
  type?: SimpleTypes | Array<SimpleTypes>,
  allOf?: SchemaArray,
  anyOf?: SchemaArray,
  oneOf?: SchemaArray,
  not?: Schema,
};