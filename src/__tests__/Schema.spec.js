// @flow

import test from 'ava';
import _ from 'lodash';
import schemaJSON from './fixtures/schema.json';
import swaggerJSON from './fixtures/swagger.json';

import {
  simplifySchema,
} from '../Schema';

test('should simplify schema', (t) => {
  const result = simplifySchema(schemaJSON);
  t.true(_.isObject(result));
});

test('should simplify schema with imports', (t) => {
  const result = simplifySchema(swaggerJSON, {
    './fixtures/schema.json': schemaJSON,
  });

  t.true(_.isObject(result));
});
