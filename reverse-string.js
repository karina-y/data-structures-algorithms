//Implement a function that reverses a string
function reverseStringWhile(str) {

  if (!str || typeof str !== "string") {
    return undefined;
  } else {
    let counter = str.length;
    let newString;

    while (counter >= 0) {
      if (newString) {
        newString += str[counter];
      } else {
        newString = str[counter];
      }

      counter--;
    }

    return newString;
  }
}

reverseStringWhile("reverse me")
//should return: "em esrever"


function reverseStringFor(str) {
  if (!str || typeof str !== "string") {
    return undefined;
  } else {
    let newString;

    for (let i = str.length - 1; i >= 0; i--) {
      if (newString) {
        newString += str[i];
      } else {
        newString = str[i];
      }
    }

    return newString;
  }
}

reverseStringFor("reverse me");