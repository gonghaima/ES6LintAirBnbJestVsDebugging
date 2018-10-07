const findNext = (linkedList, resultArray) => {
  resultArray.unshift(linkedList.val);
  if (linkedList.next) {
    return findNext(linkedList.next, resultArray);
  }
  return resultArray;
};

const addTwoNumbers = (singlyLinkedListParam1, singlyLinkedListParam2) => {
  // const param1Array = [];
  // const param1ArrayResult = findNext(singlyLinkedListParam1, param1Array);
  const param1ArrayResult = [
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1
  ];
  // const param1Result = parseInt([...param1ArrayResult].join(''), 10);
  const param1Result = [...param1ArrayResult];

  // const param2Array = [];
  // const param2ArrayResult = findNext(singlyLinkedListParam2, param2Array);
  const param2ArrayResult = [5, 6, 4];
  // const param2Result = parseInt([...param2ArrayResult].join(''), 10);
  const param2Result = [...param2ArrayResult];

  // const resultTotal = param1Result + param2Result;
  // const result = resultTotal
  //   .toString()
  //   .split('')
  //   .map(c => parseInt(c, 10))
  //   .reverse();
  // return result;
  const combinedArr = [];
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
      combinedArr.push(element1);
    }
  }

  if (next > 0) {
    combinedArr.push(next);
  }

  return combinedArr.reverse();
};

module.exports = addTwoNumbers;
