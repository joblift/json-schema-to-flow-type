declare type Prefix = string;

declare type Prefix$SchemaArray = Array<Prefix$Schema>;

declare type Prefix$Inheritance = {
  key1?: string,
  key2?: string,
  key3?: string,
} | {
  key1?: string,
  key2?: string,
  key4?: string,
};

declare type Prefix$Exact = {|
  key1?: string,
  key2?: string,
|};

declare type Prefix$PositiveInteger = number;

declare type Prefix$PositiveIntegerDefault0 = Prefix$PositiveInteger;

declare type Prefix$SimpleTypes = "array" | "boolean" | "integer" | "null" | "number" | "object" | "string";

declare type Prefix$StringArray = Array<string>;

declare type Prefix$Schema = {
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
  maxLength?: Prefix$PositiveInteger,
  minLength?: Prefix$PositiveIntegerDefault0,
  pattern?: string,
  additionalItems?: boolean | Prefix$Schema,
  items?: Prefix$Schema | Prefix$SchemaArray,
  maxItems?: Prefix$PositiveInteger,
  minItems?: Prefix$PositiveIntegerDefault0,
  uniqueItems?: boolean,
  maxProperties?: Prefix$PositiveInteger,
  minProperties?: Prefix$PositiveIntegerDefault0,
  required?: Prefix$StringArray,
  additionalProperties?: boolean | Prefix$Schema,
  definitions?: {
    [key: any]: Prefix$Schema
  },
  properties?: {
    [key: any]: Prefix$Schema
  },
  patternProperties?: {
    [key: any]: Prefix$Schema
  },
  dependencies?: {
    [key: any]: (Prefix$Schema | Prefix$StringArray)
  },
  enum?: Array<any>,
  type?: Prefix$SimpleTypes | Array<Prefix$SimpleTypes>,
  allOf?: Prefix$SchemaArray,
  anyOf?: Prefix$SchemaArray,
  oneOf?: Prefix$SchemaArray,
  not?: Prefix$Schema,
};