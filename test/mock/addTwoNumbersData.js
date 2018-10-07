import ListNode from '../../src/rules/addTwoNumbers/model/listNode';

const l1Three = new ListNode(3);
const l1Four = new ListNode(4);
l1Four.next = l1Three;
const l1Two = new ListNode(2);
l1Two.next = l1Four;

const l2Four = new ListNode(4);
const l2Six = new ListNode(6);
l2Six.next = l2Four;
const l2Five = new ListNode(5);
l2Five.next = l2Six;

export { l1Two, l2Five };
