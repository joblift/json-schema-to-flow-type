// @flow

import _ from 'lodash';
import test from 'ava';
import * as t from '@babel/types';
import generate from '@babel/generator';
import codeFrame from '@babel/code-frame';
import * as babylon from 'babylon';

import {
  FlowSchema,
} from '../FlowSchema';

import {
  toFlowType, upperCamelCase,
} from '../FlowTypeGenerator';

const flowSchemaFromObject = (obj: Object): FlowSchema =>
  // $FlowIgnore: this code is correct, but flow complains because of how _.cloneDeepWith is documented
  _.cloneDeepWith(obj, (item) => {
    if (_.isPlainObject(item)) return new FlowSchema(item);
  });

const codeFromFlowSchema = (flowSchemaLike) =>
  generate(
    t.typeAlias(
      t.identifier(upperCamelCase(flowSchemaLike.$id)),
      null,
      toFlowType(flowSchemaFromObject(flowSchemaLike)),
    )
  ).code;

const parseCode = (code) => {
  try {
    return babylon.parse(code, {
      sourceType: 'module',
      plugins: [
        'flow',
      ]
    });
  } catch(err) {
    if (!(err instanceof SyntaxError)) {
      throw err;
    }

    const posData = err.message.match(/ \((\d+):(\d+)\)$/);

    if (posData !== null) {
      err.message += `\n${codeFrame(code, ...posData.slice(1, 3))}`;
    }

    throw err;
  }
};

test('produces syntactically valid output', (t) => {
  const code = codeFromFlowSchema({
    $id: 'Type',
    $flowType: 'Object',
    $properties: {
      valid: {
        $flowType: 'string'
      },
      'in-valid': {
        $flowType: 'string'
      },
    },
    $required: []
  });

  t.notThrows(() => parseCode(code));
});
