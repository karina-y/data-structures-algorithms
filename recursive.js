// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if (!number || typeof number !== "number") {
    return undefined;
  } else {
    //code here
    let index = 1;
    let answer = number;

    while (index < number) {
      answer *= index;
      index++;
    }

    return answer;
  }

}

function findFactorialIterative(number) {

  if (!number || typeof number !== "number") {
    return undefined;
  } else {
    //code here
    let answer = number;

    for (let i = 1; i < number; i++) {
      answer *= i;
    }

    return answer;
  }

}

findFactorialRecursive(5)
findFactorialIterative(2);
