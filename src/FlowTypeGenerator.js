// @flow

import _ from 'lodash';
import * as t from '@babel/types';
import generate from '@babel/generator';

import { isValidObjectKey } from './validateIdentifier';

import {
  FlowSchema,
} from './FlowSchema';

type SchemaProcessor = (flowSchema: FlowSchema) => Object;

export const upperCamelCase = (str: string): string => _.upperFirst(_.camelCase(str));

const optional = (astNode) =>
  _.assign(astNode, { optional: true });

const processArraySchema = (flowSchema: FlowSchema, processor: SchemaProcessor): Object =>
  t.genericTypeAnnotation(
    t.identifier('Array'),
    t.typeParameterInstantiation([
      processor(flowSchema.flowType('any')),
    ]),
  );

const processObjectSchema = (flowSchema: FlowSchema, processor: SchemaProcessor): Object => {
  let properties = _.map(
    flowSchema.$properties || {},
    (fieldFlowSchema: FlowSchema, field: string) => {
      const identifier = isValidObjectKey(field)
        ? t.identifier(field)
        : t.stringLiteral(field);

      const ast = t.objectTypeProperty(
        identifier,
        processor(fieldFlowSchema),
      );

      if (fieldFlowSchema.$deprecated) {
        ast.$deprecated = fieldFlowSchema.$deprecated;
      }

      if (_.includes(flowSchema.$required, field)) {
        return ast;
      }

      return optional(ast);
    },
  );
  const deprecatedCommentAnchor = properties.find(p => !p.$deprecated);
  properties = properties.filter((p) => {
    if (p.$deprecated) {
      t.addComment(deprecatedCommentAnchor, 'leading', ` ${generate(p).code}`, true);
      t.addComment(deprecatedCommentAnchor, 'leading', ` DEPRECATED: ${p.$deprecated}`, true);
      return false;
    }
    return true;
  });


  return t.objectTypeAnnotation(
    properties,
    flowSchema.$union ? [
      t.objectTypeIndexer(
        t.identifier('key'),
        t.anyTypeAnnotation(),
        processor(flowSchema.flowType('any')),
      ),
    ] : null,
    null,
    null,
    !!flowSchema.$exact,
  );
};

export const toFlowType = (flowSchema: FlowSchema, prefix: string = ''): Object => {
  if (flowSchema.$flowRef) {
    return t.genericTypeAnnotation(t.identifier(prefix + upperCamelCase(flowSchema.$flowRef)));
  }

  if (flowSchema.$enum) {
    return t.unionTypeAnnotation(
      _.map(
        flowSchema.$enum,
        (value) => t.genericTypeAnnotation(t.identifier(JSON.stringify(value))),
      ),
    );
  }

  if (flowSchema.$flowType === 'Array') {
    return processArraySchema(flowSchema, schema => toFlowType(schema, prefix));
  }

  if (flowSchema.$flowType === 'Object') {
    return processObjectSchema(flowSchema, schema => toFlowType(schema, prefix));
  }

  if (flowSchema.$union) {
    return t.unionTypeAnnotation(_.map(flowSchema.$union, schema => toFlowType(schema, prefix)));
  }

  if (flowSchema.$intersection) {
    return t.intersectionTypeAnnotation(_.map(flowSchema.$intersection, schema => toFlowType(schema, prefix)));
  }


  if (flowSchema.$flowType === 'any') {
    return t.anyTypeAnnotation();
  }

  if (flowSchema.$flowType === 'null') {
    return t.nullLiteralTypeAnnotation();
  }

  return t.createTypeAnnotationBasedOnTypeof(flowSchema.$flowType);
};
