const findNext = (linkedList, resultArray) => {
  resultArray.push(linkedList.val);
  if (linkedList.next) {
    return findNext(linkedList.next, resultArray);
  }
  return resultArray;
};

const addTwoNumbers = (singlyLinkedListParam1, singlyLinkedListParam2) => {
  const combinedArr = [];

  const param1Array = [];
  const param1ArrayResult = findNext(singlyLinkedListParam1, param1Array);

  const param2Array = [];
  const param2ArrayResult = findNext(singlyLinkedListParam2, param2Array);

  /** Swap the make sure param1Result is the longer one */
  let param1Result;
  let param2Result;
  if ([...param1ArrayResult].length > [...param2ArrayResult].length) {
    param1Result = [...param1ArrayResult];
    param2Result = [...param2ArrayResult];
  } else {
    param1Result = [...param2ArrayResult];
    param2Result = [...param1ArrayResult];
  }

  let next = 0;
  for (let i = 0; i < param1Result.length; i += 1) {
    const element1 = param1Result[i];
    if (param2Result[i]) {
      const total = element1 + param2Result[i] + next;
      const totalArr = total.toString().split('');
      if (totalArr.length > 1) {
        next = parseInt(totalArr[0], 10);
        combinedArr.push(parseInt(totalArr[1], 10));
      } else {
        combinedArr.push(parseInt(totalArr[0], 10));
        next = 0;
      }
    } else {
      const totalV1 = element1 + next;
      const totalArrV1 = totalV1.toString().split('');
      if (totalArrV1.length > 1) {
        next = parseInt(totalArrV1[0], 10);
        combinedArr.push(parseInt(totalArrV1[1], 10));
      } else {
        combinedArr.push(parseInt(totalArrV1[0], 10));
        next = 0;
      }
    }
  }

  if (next > 0) {
    combinedArr.push(next);
  }

  return combinedArr;
};

module.exports = addTwoNumbers;
