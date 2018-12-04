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
  upperCamelCase,
} from './FlowTypeGenerator';

export {
  simplifySchema,
  convertSchema,
  toFlowType,
};

export const toFlow = (flowSchema: FlowSchema, prefix: string = ''): Object =>
  t.exportNamedDeclaration(
    t.typeAlias(
      t.identifier(prefix + upperCamelCase(flowSchema.$id)),
      null,
      toFlowType(flowSchema, prefix),
    ),
    [],
  );

export const schemaToFlow = (flowSchema: FlowSchema, prefix: string = ''): string =>
  _.map(
    [
      ...(_.map(flowSchema.$definitions, schema => toFlow(schema, prefix))),
      toFlow(flowSchema, prefix),
    ],
    (ast: Object): string => generate(ast).code,
  ).join('\n\n');

export const parseSchema = (schema: Schema, imports: ?{ [key: string]: Schema }, prefix: string = ''): string =>
  _.flow(
    (s: Schema) => simplifySchema(s, imports),
    convertSchema,
    s => schemaToFlow(s, prefix),
  )(schema);
