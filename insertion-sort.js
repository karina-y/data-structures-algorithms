const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  if (array.length === 0 || !Array.isArray(array)) {
    return undefined;
  } else {
    for (let i = 0; i < array.length; i++) {
      let currItem = array[i];
      let newIndex = i;

      for (let j = i + 1; j < array.length; j++) {
        let nextItem = array[j];

        if (currItem < nextItem) {
          newIndex = j;
        }

        //loop through the array again to find where [i] belongs
      }

      let newLowest = array[newIndex];
      array.splice(newIndex, 1);
      array.unshift(newLowest);
    }
  }

}

insertionSort(numbers);
console.log(numbers);