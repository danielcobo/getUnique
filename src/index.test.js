const getUnique = require('./index.js');

test('Get unique number values', function () {
  expect(getUnique([1, 1, 2, 3])).toStrictEqual([1, 2, 3]);
});

test('Get unique string values', function () {
  expect(getUnique(['one', 'two', 'two', 'three'])).toStrictEqual([
    'one',
    'two',
    'three',
  ]);
});

test('Get unique boolean values', function () {
  expect(getUnique([true, true, false])).toStrictEqual([true, false]);
});

test('Get unique symbol values', function () {
  const sym2 = Symbol('foo');
  const sym3 = Symbol('foo');
  const foo = sym2;
  expect(getUnique([sym2, sym3, foo])).toStrictEqual([sym2, sym3]);
});

test('Get unique bigint values', function () {
  const bi1 = 9007299254740991n;
  const bi2 = 9007299254740992n;
  const bi3 = bi2;
  expect(getUnique([bi1, bi2, bi2, bi3])).toStrictEqual([bi1, bi2]);
});

test('Get unique undefined values', function () {
  const und = undefined;
  expect(getUnique([undefined, und])).toStrictEqual([undefined]);
});

test('Get unique null values', function () {
  const nill = null;
  expect(getUnique([nill, null])).toStrictEqual([null]);
});
