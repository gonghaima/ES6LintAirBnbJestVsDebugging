import { l1Two, l2Five } from '../mock/addTwoNumbersData';

import addTwoNumbers from '../../src/rules/addTwoNumbers/addTwoNumbers';

test('addTwoNumbers rule should return total of the two linked list join', () => {
  const result = addTwoNumbers(l1Two, l2Five);
  expect(result[0]).toBe(7);
  expect(result[1]).toBe(0);
  expect(result[2]).toBe(8);
});
