const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  if (array.length === 0 || !Array.isArray(array)) {
    return undefined;
  } else {
    let foundSwap = true;

    while (foundSwap) {
      foundSwap = false;

      for (let i = 0; i < array.length; i++) {
        let currItem = array[i];
        let nextItem = array[i + 1];
        let prevItem = array[i-1];

        if (nextItem && (currItem > nextItem)) {
          array[i] = nextItem;
          array[i + 1] = currItem;
          foundSwap = true;
        } else if (prevItem && (currItem < prevItem)) {
          array[i-1] = currItem;
          array[i] = prevItem;
          foundSwap = true;
        }

      }
    }

    return array;

  }

}

bubbleSort(numbers);
console.log(numbers);