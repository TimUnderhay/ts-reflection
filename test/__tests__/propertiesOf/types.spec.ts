import 'jest';

import { expectPropertiesMatch } from '../utils';

// @ts-ignore
import { propertiesOf } from '@timunderhay/ts-reflection';

describe('propertiesOf', () => {
  describe('types', () => {
    it('should return an empty array for any', () => {
      expectPropertiesMatch(propertiesOf<any>(), []);
    });

    it('should return an empty array for unknown', () => {
      expectPropertiesMatch(propertiesOf<unknown>(), []);
    });

    it('should return correct properties of bigint', () => {
      const expectedProperties = ['toString', 'toLocaleString', 'valueOf', Symbol.toStringTag];

      expectPropertiesMatch(propertiesOf<bigint>(), expectedProperties);
      expectPropertiesMatch(propertiesOf<BigInt>(), expectedProperties);
    });

    it('should return correct properties of boolean', () => {
      const expectedProperties = ['valueOf'];

      expectPropertiesMatch(propertiesOf<boolean>(), expectedProperties);
      expectPropertiesMatch(propertiesOf<Boolean>(), expectedProperties);
    });

    it('should return correct properties of number', () => {
      const expectedProperties = ['toString', 'toFixed', 'toExponential', 'toPrecision', 'valueOf', 'toLocaleString'];

      expectPropertiesMatch(propertiesOf<number>(), expectedProperties);
      expectPropertiesMatch(propertiesOf<Number>(), expectedProperties);
    });

    it('should return correct properties of symbol', () => {
      const expectedProperties = ['toString', 'valueOf', 'description', Symbol.toStringTag, Symbol.toPrimitive];

      expectPropertiesMatch(propertiesOf<symbol>(), expectedProperties);
      expectPropertiesMatch(propertiesOf<Symbol>(), expectedProperties);
    });

    it('should return correct properties of object', () => {
      expectPropertiesMatch(propertiesOf<object>(), []);
    });

    it('should return correct properties of Object', () => {
      expectPropertiesMatch(propertiesOf<Object>(), [
        'constructor',
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
      ]);
    });

    it('should return correct properties of Date', () => {
      const expectedProperties = [
        'toString',
        'toDateString',
        'toTimeString',
        'toLocaleString',
        'toLocaleDateString',
        'toLocaleTimeString',
        'valueOf',
        'getTime',
        'getFullYear',
        'getUTCFullYear',
        'getMonth',
        'getUTCMonth',
        'getDate',
        'getUTCDate',
        'getDay',
        'getUTCDay',
        'getHours',
        'getUTCHours',
        'getMinutes',
        'getUTCMinutes',
        'getSeconds',
        'getUTCSeconds',
        'getMilliseconds',
        'getUTCMilliseconds',
        'getTimezoneOffset',
        'setTime',
        'setMilliseconds',
        'setUTCMilliseconds',
        'setSeconds',
        'setUTCSeconds',
        'setMinutes',
        'setUTCMinutes',
        'setHours',
        'setUTCHours',
        'setDate',
        'setUTCDate',
        'setMonth',
        'setUTCMonth',
        'setFullYear',
        'setUTCFullYear',
        'toUTCString',
        'toISOString',
        'toJSON',
        Symbol.toPrimitive,
      ];

      expectPropertiesMatch(propertiesOf<Date>(), expectedProperties);
    });

    it('should return correct properties of Promise', () => {
      const expectProperties = ['then', 'catch', Symbol.toStringTag, 'finally'];

      expectPropertiesMatch(propertiesOf<Promise<unknown>>(), expectProperties);
    });

    it('should return correct properties of Function', () => {
      const expectProperties = [
        'apply',
        'call',
        'bind',
        'toString',
        'prototype',
        'length',
        'arguments',
        'caller',
        'name',
        Symbol.hasInstance,
      ];

      expectPropertiesMatch(propertiesOf<Function>(), expectProperties);
      expectPropertiesMatch(propertiesOf<() => unknown>(), expectProperties);
    });

    it('should return correct properties of string', () => {
      const expectedProperties = [
        'toString',
        'charAt',
        'charCodeAt',
        'concat',
        'indexOf',
        'lastIndexOf',
        'localeCompare',
        'match',
        'replace',
        'search',
        'slice',
        'split',
        'substring',
        'toLowerCase',
        'toLocaleLowerCase',
        'toUpperCase',
        'toLocaleUpperCase',
        'trim',
        'length',
        'substr',
        'valueOf',
        'codePointAt',
        'includes',
        'endsWith',
        'normalize',
        'repeat',
        'startsWith',
        'anchor',
        'big',
        'blink',
        'bold',
        'fixed',
        'fontcolor',
        'fontsize',
        'italics',
        'link',
        'small',
        'strike',
        'sub',
        'sup',
        Symbol.iterator,
        'padStart',
        'padEnd',
        'trimLeft',
        'trimRight',
        'trimStart',
        'trimEnd',
        'matchAll',
        'at',
      ];

      expectPropertiesMatch(propertiesOf<string>(), expectedProperties);
      expectPropertiesMatch(propertiesOf<String>(), expectedProperties);
    });

    it('should return correct properties of Array or an empty tuple', () => {
      const expectedProperties = [
        'length',
        'toString',
        'toLocaleString',
        'pop',
        'push',
        'concat',
        'join',
        'reverse',
        'shift',
        'slice',
        'sort',
        'splice',
        'unshift',
        'indexOf',
        'lastIndexOf',
        'every',
        'some',
        'forEach',
        'map',
        'filter',
        'reduce',
        'reduceRight',
        'find',
        'findIndex',
        'fill',
        'copyWithin',
        Symbol.iterator,
        'entries',
        'keys',
        'values',
        Symbol.unscopables,
        'includes',
        'flatMap',
        'flat',
        'at',
      ];

      expectPropertiesMatch(propertiesOf<unknown[]>(), expectedProperties);
      expectPropertiesMatch(propertiesOf<Array<unknown>>(), expectedProperties);
      expectPropertiesMatch(propertiesOf<[]>(), expectedProperties);
    });

    it('should return correct properties for non-empty tuple', () => {
      const expectedProperties = [
        'length',
        'toString',
        'toLocaleString',
        'pop',
        'push',
        'concat',
        'join',
        'reverse',
        'shift',
        'slice',
        'sort',
        'splice',
        'unshift',
        'indexOf',
        'lastIndexOf',
        'every',
        'some',
        'forEach',
        'map',
        'filter',
        'reduce',
        'reduceRight',
        'find',
        'findIndex',
        'fill',
        'copyWithin',
        Symbol.iterator,
        'entries',
        'keys',
        'values',
        Symbol.unscopables,
        'includes',
        '0',
        '1',
        '2',
        'flatMap',
        'flat',
        'at',
      ];

      expectPropertiesMatch(propertiesOf<[number, boolean, string]>(), expectedProperties);
    });

    it('should return correct properties of ReadonlyArray', () => {
      const expectedProperties = [
        'length',
        'toString',
        'toLocaleString',
        'concat',
        'join',
        'slice',
        'indexOf',
        'lastIndexOf',
        'every',
        'some',
        'forEach',
        'map',
        'filter',
        'reduce',
        'reduceRight',
        'find',
        'findIndex',
        Symbol.iterator,
        'entries',
        'keys',
        'values',
        'includes',
        'flatMap',
        'flat',
      ];

      expectPropertiesMatch(propertiesOf<ReadonlyArray<unknown>>(), expectedProperties);
    });
  });
});
