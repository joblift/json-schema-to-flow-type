// @flow

import * as t from '@babel/types';
import generate from '@babel/generator';
import _ from 'lodash';

import type {
  Schema,
} from '../definitions/Schema';

import {
  simplifySchema,
} from './Schema';

import {
  convertSchema,
  FlowSchema,
} from './FlowSchema';

import {
  toFlowType,
  prefixed,
  type Options,
} from './FlowTypeGenerator';

export {
  simplifySchema,
  convertSchema,
  toFlowType,
};

export const toFlow = (flowSchema: FlowSchema, options: Options): Object =>
  t.exportNamedDeclaration(
    t.typeAlias(
      t.identifier(prefixed(options.prefix, flowSchema.$id)),
      null,
      toFlowType(flowSchema, options),
    ),
    [],
  );

export const schemaToFlow = (flowSchema: FlowSchema, options: Options): string =>
  _.map(
    [
      ...(_.map(flowSchema.$definitions, schema => toFlow(schema, options))),
      toFlow(flowSchema, options),
    ],
    (ast: Object): string => generate(ast).code,
  ).join('\n\n');

export const parseSchema = (schema: Schema, imports: ?{ [key: string]: Schema }, options: Options = {}): string =>
  _.flow(
    (s: Schema) => simplifySchema(s, imports),
    convertSchema,
    s => schemaToFlow(s, options),
  )(schema);
