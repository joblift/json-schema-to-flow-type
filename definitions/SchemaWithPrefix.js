export type prefix$SchemaArray = Array<prefix$Schema>;

export type prefix$Inheritance = {
  key1?: string,
  key2?: string,
  key3?: string,
} | {
  key1?: string,
  key2?: string,
  key4?: string,
};

export type prefix$Exact = {|
  key1?: string,
  key2?: string,
|};

export type prefix$PositiveInteger = number;

export type prefix$PositiveIntegerDefault0 = prefix$PositiveInteger;

export type prefix$SimpleTypes = "array" | "boolean" | "integer" | "null" | "number" | "object" | "string";

export type prefix$StringArray = Array<string>;

export type prefix$Schema = {
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
  maxLength?: prefix$PositiveInteger,
  minLength?: prefix$PositiveIntegerDefault0,
  pattern?: string,
  additionalItems?: boolean | prefix$Schema,
  items?: prefix$Schema | prefix$SchemaArray,
  maxItems?: prefix$PositiveInteger,
  minItems?: prefix$PositiveIntegerDefault0,
  uniqueItems?: boolean,
  maxProperties?: prefix$PositiveInteger,
  minProperties?: prefix$PositiveIntegerDefault0,
  required?: prefix$StringArray,
  additionalProperties?: boolean | prefix$Schema,
  definitions?: {
    [key: any]: prefix$Schema
  },
  properties?: {
    [key: any]: prefix$Schema
  },
  patternProperties?: {
    [key: any]: prefix$Schema
  },
  dependencies?: {
    [key: any]: (prefix$Schema | prefix$StringArray)
  },
  enum?: Array<any>,
  type?: prefix$SimpleTypes | Array<prefix$SimpleTypes>,
  allOf?: prefix$SchemaArray,
  anyOf?: prefix$SchemaArray,
  oneOf?: prefix$SchemaArray,
  not?: prefix$Schema,
};