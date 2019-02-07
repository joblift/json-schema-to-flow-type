// @flow

import test from 'ava';
import fse from 'fs-extra';
import schemaJSON from './fixtures/schema.json';
import schemaWithDeprecationJSON from './fixtures/schemaWithDeprecation.json';
import appConfigJSON from './fixtures/appConfig.json';
import appConfigDependencyCommonJSON from './fixtures/appConfigDependencyCommon.json';
import simpleJSON from './fixtures/simple.json';
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
  // fse.outputFileSync('./definitions/Schema.js', result);
  t.pass('coverts json schema');
});

test('convert schema json with prefix', (t) => {
  const result = parseSchema({
    ...schemaJSON,
    id: 'Schema',
  }, undefined, 'prefix$');

  const savedResult = fse.readFileSync('./definitions/SchemaWithPrefix.js', 'utf8');
  t.is(result, savedResult);
  // fse.outputFileSync('./definitions/SchemaWithPrefix.js', result);
  t.pass('coverts json schema with prefix');
});

test('convert schema json with deprecation', t => {
  const result = parseSchema({
    ...schemaWithDeprecationJSON,
    id: 'Schema',
  });

  const savedResult = fse.readFileSync('./definitions/SchemaWithDeprecation.js', 'utf8');
  t.is(result, savedResult);
  // fse.outputFileSync('./definitions/SchemaWithDeprecation.js', result);
  t.pass('coverts json schema with deprecation');
})

test('convert simple json', t => {
  const result = parseSchema({
    ...simpleJSON,
    id: 'Schema',
  });

  const savedResult = fse.readFileSync('./definitions/simple.js', 'utf8');
  t.is(result, savedResult);
  // fse.outputFileSync('./definitions/simple.js', result);
  t.pass('coverts json schema with deprecation');
})

test('convert appConfig json', t => {
  const result = parseSchema({
    ...appConfigJSON,
    id: 'Schema',
  }, {
    'http://joblift.de/configuration/common': appConfigDependencyCommonJSON,
  });

  const savedResult = fse.readFileSync('./definitions/appConfig.js', 'utf8');
  t.is(result, savedResult);
  // fse.outputFileSync('./definitions/appConfig.js', result);
  t.pass('coverts json schema with deprecation');
})

test('convert swagger json', (t) => {
  const result = parseSchema({
    ...swaggerJSON,
    id: 'Swagger',
  }, {
    './fixtures/schema.json': schemaJSON,
  });

  const savedResult = fse.readFileSync('./definitions/Swagger.js', 'utf8');
  t.is(result, savedResult);
  // fse.outputFileSync('./definitions/Swagger.js', result);
  t.pass('coverts swagger schema');
});
