// @flow

import _ from 'lodash';

import type {
  Schema,
} from '../definitions/Schema';

type Imports = { [key: string]: Schema };

const resolveRef = (imports: Imports = {}) =>
  (value: any): any => {
    if (!_.isArray(value) && _.isObject(value)) {
      const ref = _.get(value, '$ref');

      if (_.isString(ref)) {
        const [
          importRef,
          keyPath,
        ] = _.split(ref, '#');

        const keyPathArr = _.drop(_.split(keyPath, '/'));

        if (_.isEmpty(importRef)) {
          if (_.isEmpty(keyPathArr)) {
            return {
              deprecated: value.deprecated,
              $ref: (imports['~'] || {}).id,
            };
          }

          if (imports['#']) {
            return _.cloneDeep(_.get(imports['#'], keyPathArr));
          }

          if (keyPathArr.length === 2 && _.first(keyPathArr) === 'definitions') {
            return ({
              deprecated: value.deprecated,
              $ref: _.last(keyPathArr),
            });
          }

          return _.cloneDeep(_.get(imports['~'], keyPathArr));
        }

        if (!_.has(imports, importRef)) {
          throw new Error(`missing import ${importRef}`);
        }

        return _.cloneDeepWith({
          ..._.get(imports[importRef], keyPathArr),
          deprecated: value.deprecated
        }, resolveRef({
          '#': imports[importRef],
        }));
      }
    }
    return undefined;
  };


export const simplifySchema = (
  schema: Schema, imports: ?Imports,
): Schema => _.cloneDeepWith(schema, resolveRef({
  ...(imports || {}),
  '~': schema,
}));
