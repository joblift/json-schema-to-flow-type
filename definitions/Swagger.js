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

declare type Info = {|
  title: string,
  version: string,
  description?: string,
  termsOfService?: string,
  contact?: Contact,
  license?: License,
  [key: any]: VendorExtension,
|};

declare type Contact = {|
  name?: string,
  url?: string,
  email?: string,
  [key: any]: VendorExtension,
|};

declare type License = {|
  name: string,
  url?: string,
  [key: any]: VendorExtension,
|};

declare type Paths = {|
  [key: any]: VendorExtension | PathItem
|};

declare type Definitions = {
  [key: any]: Schema
};

declare type ParameterDefinitions = {
  [key: any]: Parameter
};

declare type ResponseDefinitions = {
  [key: any]: Response
};

declare type ExternalDocs = {|
  description?: string,
  url: string,
  [key: any]: VendorExtension,
|};

declare type Examples = {
  [key: any]: any
};

declare type MimeType = string;

declare type Operation = {|
  tags?: Array<string>,
  summary?: string,
  description?: string,
  externalDocs?: ExternalDocs,
  operationId?: string,
  produces?: MediaTypeList,
  consumes?: MediaTypeList,
  parameters?: ParametersList,
  responses: Responses,
  schemes?: SchemesList,
  deprecated?: boolean,
  security?: Security,
  [key: any]: VendorExtension,
|};

declare type PathItem = {|
  $ref?: string,
  get?: Operation,
  put?: Operation,
  post?: Operation,
  delete?: Operation,
  options?: Operation,
  head?: Operation,
  patch?: Operation,
  parameters?: ParametersList,
  [key: any]: VendorExtension,
|};

declare type Responses = {|
  [key: any]: ResponseValue | VendorExtension
|};

declare type ResponseValue = Response | JsonReference;

declare type Response = {|
  description: string,
  schema?: Schema | FileSchema,
  headers?: Headers,
  examples?: Examples,
  [key: any]: VendorExtension,
|};

declare type Headers = {
  [key: any]: Header
};

declare type Header = {|
  type: "string" | "number" | "integer" | "boolean" | "array",
  format?: string,
  items?: PrimitivesItems,
  collectionFormat?: CollectionFormat,
  default?: Default,
  maximum?: Maximum,
  exclusiveMaximum?: ExclusiveMaximum,
  minimum?: Minimum,
  exclusiveMinimum?: ExclusiveMinimum,
  maxLength?: MaxLength,
  minLength?: MinLength,
  pattern?: Pattern,
  maxItems?: MaxItems,
  minItems?: MinItems,
  uniqueItems?: UniqueItems,
  enum?: Enum,
  multipleOf?: MultipleOf,
  description?: string,
  [key: any]: VendorExtension,
|};

declare type VendorExtension = any;

declare type BodyParameter = {|
  description?: string,
  name: string,
  in: "body",
  required?: boolean,
  schema: Schema,
  [key: any]: VendorExtension,
|};

declare type HeaderParameterSubSchema = {|
  required?: boolean,
  in?: "header",
  description?: string,
  name?: string,
  type?: "string" | "number" | "boolean" | "integer" | "array",
  format?: string,
  items?: PrimitivesItems,
  collectionFormat?: CollectionFormat,
  default?: Default,
  maximum?: Maximum,
  exclusiveMaximum?: ExclusiveMaximum,
  minimum?: Minimum,
  exclusiveMinimum?: ExclusiveMinimum,
  maxLength?: MaxLength,
  minLength?: MinLength,
  pattern?: Pattern,
  maxItems?: MaxItems,
  minItems?: MinItems,
  uniqueItems?: UniqueItems,
  enum?: Enum,
  multipleOf?: MultipleOf,
  [key: any]: VendorExtension,
|};

declare type QueryParameterSubSchema = {|
  required?: boolean,
  in?: "query",
  description?: string,
  name?: string,
  allowEmptyValue?: boolean,
  type?: "string" | "number" | "boolean" | "integer" | "array",
  format?: string,
  items?: PrimitivesItems,
  collectionFormat?: CollectionFormatWithMulti,
  default?: Default,
  maximum?: Maximum,
  exclusiveMaximum?: ExclusiveMaximum,
  minimum?: Minimum,
  exclusiveMinimum?: ExclusiveMinimum,
  maxLength?: MaxLength,
  minLength?: MinLength,
  pattern?: Pattern,
  maxItems?: MaxItems,
  minItems?: MinItems,
  uniqueItems?: UniqueItems,
  enum?: Enum,
  multipleOf?: MultipleOf,
  [key: any]: VendorExtension,
|};

declare type FormDataParameterSubSchema = {|
  required?: boolean,
  in?: "formData",
  description?: string,
  name?: string,
  allowEmptyValue?: boolean,
  type?: "string" | "number" | "boolean" | "integer" | "array" | "file",
  format?: string,
  items?: PrimitivesItems,
  collectionFormat?: CollectionFormatWithMulti,
  default?: Default,
  maximum?: Maximum,
  exclusiveMaximum?: ExclusiveMaximum,
  minimum?: Minimum,
  exclusiveMinimum?: ExclusiveMinimum,
  maxLength?: MaxLength,
  minLength?: MinLength,
  pattern?: Pattern,
  maxItems?: MaxItems,
  minItems?: MinItems,
  uniqueItems?: UniqueItems,
  enum?: Enum,
  multipleOf?: MultipleOf,
  [key: any]: VendorExtension,
|};

declare type PathParameterSubSchema = {|
  required: true,
  in?: "path",
  description?: string,
  name?: string,
  type?: "string" | "number" | "boolean" | "integer" | "array",
  format?: string,
  items?: PrimitivesItems,
  collectionFormat?: CollectionFormat,
  default?: Default,
  maximum?: Maximum,
  exclusiveMaximum?: ExclusiveMaximum,
  minimum?: Minimum,
  exclusiveMinimum?: ExclusiveMinimum,
  maxLength?: MaxLength,
  minLength?: MinLength,
  pattern?: Pattern,
  maxItems?: MaxItems,
  minItems?: MinItems,
  uniqueItems?: UniqueItems,
  enum?: Enum,
  multipleOf?: MultipleOf,
  [key: any]: VendorExtension,
|};

declare type NonBodyParameter = HeaderParameterSubSchema | FormDataParameterSubSchema | QueryParameterSubSchema | PathParameterSubSchema;

declare type Parameter = BodyParameter | NonBodyParameter;

declare type Schema = {|
  $ref?: string,
  format?: string,
  title?: string,
  description?: string,
  default?: any,
  multipleOf?: number,
  maximum?: number,
  exclusiveMaximum?: boolean,
  minimum?: number,
  exclusiveMinimum?: boolean,
  maxLength?: number,
  minLength?: number,
  pattern?: string,
  maxItems?: number,
  minItems?: number,
  uniqueItems?: boolean,
  maxProperties?: number,
  minProperties?: number,
  required?: Array<string>,
  enum?: Array<any>,
  additionalProperties?: Schema | boolean,
  type?: ("array" | "boolean" | "integer" | "null" | "number" | "object" | "string") | Array<("array" | "boolean" | "integer" | "null" | "number" | "object" | "string")>,
  items?: Schema | Array<Schema>,
  allOf?: Array<Schema>,
  properties?: {
    [key: any]: Schema
  },
  discriminator?: string,
  readOnly?: boolean,
  xml?: Xml,
  externalDocs?: ExternalDocs,
  example?: any,
  [key: any]: VendorExtension,
|};

declare type FileSchema = {|
  format?: string,
  title?: string,
  description?: string,
  default?: any,
  required?: Array<string>,
  type: "file",
  readOnly?: boolean,
  externalDocs?: ExternalDocs,
  example?: any,
  [key: any]: VendorExtension,
|};

declare type PrimitivesItems = {|
  type?: "string" | "number" | "integer" | "boolean" | "array",
  format?: string,
  items?: PrimitivesItems,
  collectionFormat?: CollectionFormat,
  default?: Default,
  maximum?: Maximum,
  exclusiveMaximum?: ExclusiveMaximum,
  minimum?: Minimum,
  exclusiveMinimum?: ExclusiveMinimum,
  maxLength?: MaxLength,
  minLength?: MinLength,
  pattern?: Pattern,
  maxItems?: MaxItems,
  minItems?: MinItems,
  uniqueItems?: UniqueItems,
  enum?: Enum,
  multipleOf?: MultipleOf,
  [key: any]: VendorExtension,
|};

declare type Security = Array<SecurityRequirement>;

declare type SecurityRequirement = {
  [key: any]: Array<string>
};

declare type Xml = {|
  name?: string,
  namespace?: string,
  prefix?: string,
  attribute?: boolean,
  wrapped?: boolean,
  [key: any]: VendorExtension,
|};

declare type Tag = {|
  name: string,
  description?: string,
  externalDocs?: ExternalDocs,
  [key: any]: VendorExtension,
|};

declare type SecurityDefinitions = {
  [key: any]: (BasicAuthenticationSecurity | ApiKeySecurity | Oauth2ImplicitSecurity | Oauth2PasswordSecurity | Oauth2ApplicationSecurity | Oauth2AccessCodeSecurity)
};

declare type BasicAuthenticationSecurity = {|
  type: "basic",
  description?: string,
  [key: any]: VendorExtension,
|};

declare type ApiKeySecurity = {|
  type: "apiKey",
  name: string,
  in: "header" | "query",
  description?: string,
  [key: any]: VendorExtension,
|};

declare type Oauth2ImplicitSecurity = {|
  type: "oauth2",
  flow: "implicit",
  scopes?: Oauth2Scopes,
  authorizationUrl: string,
  description?: string,
  [key: any]: VendorExtension,
|};

declare type Oauth2PasswordSecurity = {|
  type: "oauth2",
  flow: "password",
  scopes?: Oauth2Scopes,
  tokenUrl: string,
  description?: string,
  [key: any]: VendorExtension,
|};

declare type Oauth2ApplicationSecurity = {|
  type: "oauth2",
  flow: "application",
  scopes?: Oauth2Scopes,
  tokenUrl: string,
  description?: string,
  [key: any]: VendorExtension,
|};

declare type Oauth2AccessCodeSecurity = {|
  type: "oauth2",
  flow: "accessCode",
  scopes?: Oauth2Scopes,
  authorizationUrl: string,
  tokenUrl: string,
  description?: string,
  [key: any]: VendorExtension,
|};

declare type Oauth2Scopes = {
  [key: any]: string
};

declare type MediaTypeList = Array<MimeType>;

declare type ParametersList = Array<(Parameter | JsonReference)>;

declare type SchemesList = Array<("http" | "https" | "ws" | "wss")>;

declare type CollectionFormat = "csv" | "ssv" | "tsv" | "pipes";

declare type CollectionFormatWithMulti = "csv" | "ssv" | "tsv" | "pipes" | "multi";

declare type Title = string;

declare type Description = string;

declare type Default = any;

declare type MultipleOf = number;

declare type Maximum = number;

declare type ExclusiveMaximum = boolean;

declare type Minimum = number;

declare type ExclusiveMinimum = boolean;

declare type MaxLength = number;

declare type MinLength = number;

declare type Pattern = string;

declare type MaxItems = number;

declare type MinItems = number;

declare type UniqueItems = boolean;

declare type Enum = Array<any>;

declare type JsonReference = {|
  $ref: string
|};

declare type Swagger = {|
  swagger: "2.0",
  info: Info,
  host?: string,
  basePath?: string,
  schemes?: SchemesList,
  consumes?: MediaTypeList,
  produces?: MediaTypeList,
  paths: Paths,
  definitions?: Definitions,
  parameters?: ParameterDefinitions,
  responses?: ResponseDefinitions,
  security?: Security,
  securityDefinitions?: SecurityDefinitions,
  tags?: Array<Tag>,
  externalDocs?: ExternalDocs,
  [key: any]: VendorExtension,
|};