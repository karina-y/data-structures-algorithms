class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (!this.isEmpty) {
      return this.top;
    }
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.isEmpty()) {
      newNode.next = this.top;
      this.top = newNode;
    } else {
      this.top = newNode;
      this.bottom = newNode;
    }

    this.length++;
  }

  pop() {
    if (!this.isEmpty()) {
      const newTop = this.top.next;
      this.top = newTop;

      if (this.length === 1) {
        this.bottom = null;
      }

      this.length--;
    }
  }

  isEmpty() {
   return !this.top && !this.bottom && !this.length;
  }
}

const myStack = new Stack();

myStack.isEmpty();
myStack.push('google')
myStack.push('Udemy')
myStack.push('Discord')


//Discord
//Udemy
//google

myStack.pop()
myStack.peek()
console.log("stack", JSON.stringify(myStack));