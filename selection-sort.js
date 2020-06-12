const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//this might be insertion sort?
function selectionSort(array) {
  if (array.length === 0 || !Array.isArray(array)) {
    return undefined;
  } else {
    let newArr = [];
    let currLowest;
    let counter = array.length;

    while (array.length > 0) {
      let lowestIndex;

      for (let i = 0; i < array.length; i++) {
        if (currLowest == null || currLowest > array[i]) {
          currLowest = array[i];
          lowestIndex = i;
        }
      }

      newArr.push(currLowest);
      array.splice(lowestIndex, 1);
      currLowest = null;
      counter--;
    }

    return newArr;
  }
}

selectionSort(numbers);

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  if (array.length === 0 || !Array.isArray(array)) {
    return undefined;
  } else {
    let newArr = [];
    let currLowest;
    let counter = array.length;

    while (array.length > 0) {
      let lowestIndex;

      for (let i = 0; i < array.length; i++) {
        if (currLowest == null || currLowest > array[i]) {
          currLowest = array[i];
          lowestIndex = i;
        }
      }

      newArr.push(currLowest);
      array.splice(lowestIndex, 1);
      currLowest = null;
      counter--;
    }

    return newArr;
  }
}

// selectionSort(numbers);

//const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSortB(array) {
  const length = array.length;
  for(let i = 0; i < length; i++){
    // set current index as minimum
    let lowestIndex = i;
    let currItem = array[i];
    
    for(let j = i+1; j < length; j++){
      let nextItem = array[j];

      if (nextItem < array[lowestIndex]){
        //update minimum if current is lower that what we had previously
        lowestIndex = j;
      }
    }

    console.log("\n\ncurrent", array)

    array[i] = array[lowestIndex];

    console.log("replaced", array)

    array[lowestIndex] = currItem;

    console.log("switch", array)
  }
  
  return array;
}

selectionSortB(numbers);
console.log(numbers);