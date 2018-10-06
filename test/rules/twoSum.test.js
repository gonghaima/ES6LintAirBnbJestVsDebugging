import twoSum from '../../src/rules/twoSum/twoSum';
import { nums, target } from '../mock/twoSumsData';

test('twoSum rule should return the first match', () => {
  const result = twoSum(nums, target);
  expect(result[0]).toBe(0);
  expect(result[1]).toBe(1);
});
