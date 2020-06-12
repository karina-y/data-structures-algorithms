const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array
  } else if (array.length === 0 || !Array.isArray(array)) {
    return undefined;
  }
  
  //want to keep the integrity of the original param
  let temp = array;

  // Split Array in into right and left
  //get the length
  const arrLength = array.length;

  //get closest to half
  const firstHalfLength = Math.round(arrLength / 2);

  //doing this because if it's an uneven number, firsthalf will be the greater value
  const secondHalfLength = arrLength - firstHalfLength;

  const left = temp.splice(0, firstHalfLength);

  const right = temp;

  return merge(
    mergeSort(left),
    mergeSort(right)
  )

}

function merge(left, right) {
  //do more splitting here then sort
  let response;

  if ((left && left.length > 1) || (right && right.length > 1)) {

    //go through these two arrays and order them
    let newArr = [];
    let mergedArr = left.concat(right);

    while (mergedArr.length > 0) {
      let lowest;
      let removeIndex;

      for (let i = 0; i < mergedArr.length; i++) {
        if (lowest == null || lowest > mergedArr[i]) {
          lowest = mergedArr[i];
          removeIndex = i;
        }
      }

      newArr.push(lowest);
      mergedArr.splice(removeIndex, 1);

    }

    response = newArr;
  } else if (left && right && (left[0] > right[0])) {
    response = [right[0], left[0]]
  } else {
    response = [left[0], right[0]]
  }

  return response;
}


const answer = mergeSort(numbers);
console.log("ANSWER", answer);