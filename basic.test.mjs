import { makeSchema } from './lib';

test('basic test', () => {
  expect(makeSchema).toNotBe(null);
});
