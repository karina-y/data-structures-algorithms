
class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new NewNode(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }


  prepend(value) {
    if (!value) {
      return undefined;
    } else {
      const currentHead = this.head;
      const newNode = new NewNode(value);
      newNode.next = currentHead;
      this.head = newNode;

      this.length++;
    }
  }

  append(value) {
    if (!value) {
      return undefined;
    } else {
      const currentTail = this.tail;
      const newNode = new NewNode(value);
      currentTail.next = newNode;
      this.tail = newNode;

      this.length++;
    }
  }

  insert(value, index) {
    if (typeof index !== "number" || !value) {
      return undefined;
    } else {
      let leadingNode = this.getNode(index - 1);
      let followingNode = leadingNode.next;
      let newNode = new NewNode(value);

      newNode.next = followingNode;
      leadingNode.next = newNode;
      this.length++;
    }

  }

  remove(index) {
    if (typeof index !== "number") {
      return undefined;
    } else if (index === this.length - 1) {
      let leadingNode = this.getNode(index - 1);
      leadingNode.next = null;

      this.tail = leadingNode;
    } else if (index === 0) {
      const followingNode = this.getNode(index + 1);

      this.head = followingNode;
    } else {
      let leadingNode = this.getNode(index - 1);
      const removeNode = leadingNode.next;
      const followingNode = removeNode.next;

      leadingNode.next = followingNode;
    }

    this.length--;
  }

  getNode(index) {
    if (typeof index !== "number") {
      //this is prob overkill but i'm ocd that way
      return undefined;
    } else if (index >= this.length) {
      return tail;
    } else if (index <= 0) {
      return this.head;
    } else {
      let counter = 0;
      let node = this.head;

      while (counter !== index) {
        node = node.next;
        counter++;
      }

      return node;
    }
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }

  reverse() {
    if (this.length === 1) {
      return undefined;
    } else {
      let first = this.head;
      let second = first.next;
      this.tail = this.head;

      //while second exists because second is always a next, eventually we'll hit null terminated
      while (second) {
        //this always becomes the third in line within this while loop
        const temp = second.next; //C

        //switch the first and second (1 > 2 becomes 2 > 1)
        second.next = first;  //A
        first = second;       //B

        //now we have 2(second) > 1(first), assign the new third here
        // first.next = temp;
        second = temp;  //C
      }

      this.tail.next = null;
      this.head = first;
    }
  }
}

const linkedList = new LinkedList(2);
linkedList.append(3);
linkedList.prepend(1)

linkedList.insert('hi', 1)
//1 > hi > 2 > 3

linkedList.remove(1)
//1 > 2 > 3

linkedList.reverse();
//3 > 2 > 1

linkedList.printList();


// console.log("head", JSON.stringify(linkedList.head))
// console.log("\ntail", JSON.stringify(linkedList.tail))