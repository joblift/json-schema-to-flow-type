// @flow

import test from 'ava';
import fse from 'fs-extra';
import schemaJSON from './fixtures/schema.json';
import swaggerJSON from './fixtures/swagger.json';

import {
  parseSchema,
} from '../index';


test('convert schema json', (t) => {
  const result = parseSchema({
    ...schemaJSON,
    id: 'Schema',
  });
  const savedResult = fse.readFileSync('./definitions/Schema.js', 'utf8');
  t.is(result, savedResult);
  fse.outputFileSync('./definitions/Schema.js', result);
  t.pass('coverts json schema');
});

test('convert schema json with prefix', (t) => {
  const result = parseSchema({
    ...schemaJSON,
    id: 'Schema',
  }, undefined, 'prefix$');

  const savedResult = fse.readFileSync('./definitions/SchemaWithPrefix.js', 'utf8');
  t.is(result, savedResult);
  fse.outputFileSync('./definitions/SchemaWithPrefix.js', result);
  t.pass('coverts json schema with prefix');
});

test('convert swagger json', (t) => {
  const result = parseSchema({
    ...swaggerJSON,
    id: 'Swagger',
  }, {
    './fixtures/schema.json': schemaJSON,
  });

  fse.outputFileSync('./definitions/Swagger.js', result);
  t.pass('coverts swagger schema');
});
