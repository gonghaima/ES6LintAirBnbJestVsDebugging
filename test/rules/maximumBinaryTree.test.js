import constructMaximumBinaryTree from '../../src/rules/maximumBinaryTree';
import { arrCase1 } from '../mock/maximumBinaryTreeData';

test('maximumBinaryTree should return the sorted tree', () => {
  const result = constructMaximumBinaryTree(arrCase1);
  expect(result.left.val).toBe(3);
  expect(result.right.val).toBe(5);
  expect(result.right.left.val).toBe(0);
});
