class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    //Code here
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      //get root node number, determine if value is more or less and make the appropriate move
      let newNodeLocation = this.lookup(value, "insert");
      newNodeLocation.node[newNodeLocation.side] = newNode;

    }
  }

  remove(value) {

    if (!this.root) {
      return undefined;
    } else {
      const nodesNeeded = this.lookup(value, "remove");
      let removeNode = nodesNeeded.removeNode;
      let parentNode = nodesNeeded.parentNode;
      let replacementNode;

      if (parentNode.right.value === removeNode.value) {
        if (!removeNode.right && !removeNode.left) {
          //if it's just a leaf, delete it
          parentNode.right = null;
          return "done";
        } else {
          //go to the right side and find its successor
          //remove the bottom-most node to the left of the right?
          //search through children

          replacementNode = this.findAndRemoveSuccessor('right', parentNode, removeNode);
        }

      } else {
        if (!removeNode.right && !removeNode.left) {
          //if it's just a leaf, delete it
          parentNode.left = null;
          return "done";
        } else {
          //go to the left side and find its successor
          //remove the bottom-most node to the left of the right?
          replacementNode = this.findAndRemoveSuccessor('left', parentNode, removeNode);
        }
      }

      if (replacementNode) {
        //inherit its children
        replacementNode.right = removeNode.right;
        replacementNode.left = removeNode.left;

        if (parentNode.right.value === removeNode.value) {
          parentNode.right = replacementNode;
        } else {
          parentNode.left = replacementNode;
        }
      } else {
        return "not found";
      }

    }
  }

  findAndRemoveSuccessor(side, parentNode, removeNode) {
    //go to the node on the right
    //iterate through each node
    //if the cases below match, save it, then iterate again until you've reached the end

    let replacementNode;
    let currentNode = removeNode;
    let done = false;

    while (!done) {
      let currentLeftNode = currentNode.left;
      let currentRightNode = currentNode.right;

      if (side === "right") {
        if ((currentLeftNode) && (currentLeftNode.value > parentNode.value && currentLeftNode.value <= removeNode.right.value)) {
          if (!replacementNode || replacementNode.value < currentLeftNode.value) {
            replacementNode = currentLeftNode;
          }
        }

        if ((currentRightNode) && (currentRightNode.value > parentNode.value && currentRightNode.value >= removeNode.right.value)) {
          if (!replacementNode || replacementNode.value > currentRightNode.value) {
            replacementNode = currentRightNode;
          }
        }
      } else {
        if ((currentLeftNode) && (currentLeftNode.value < parentNode.value && currentLeftNode.value >= removeNode.right.value)) {

          if (!replacementNode || replacementNode.value > currentLeftNode.value) {
            replacementNode = currentLeftNode;
          }

        }

        if ((currentRightNode) && (currentRightNode.value < parentNode.value && currentRightNode.value >= removeNode.right.value)) {

          if (!replacementNode || replacementNode.value > currentRightNode.value) {
            replacementNode = currentRightNode;
          }
        }
      }

      if (!currentLeftNode && !currentRightNode) {
        done = true;
      } else if (!currentLeftNode || !currentRightNode) {
        currentNode = currentLeftNode || currentRightNode;
      } else if (currentLeftNode.value > currentRightNode.value) {
        currentNode = currentLeftNode;
      } else {
        currentNode = currentRightNode;
      }
    }

    this.lookup(replacementNode.value, "removeLeaf")

    return replacementNode;
  }

  lookup(value, type) {
    //Code here

    if (!this.root) {
      return undefined;
    } else {
      let currentNode = this.root;
      let parentNode = this.root;
      let newNodeLocation = this.root;
      let done = false;

      while (!done) {

        if (value !== currentNode.value) {

          //if the value is less than the current node, go left
          if (value < currentNode.value) {
            //do we already have a value here?
            if (currentNode.left) {
              parentNode = currentNode;
              currentNode = currentNode.left;
            } else {
              newNodeLocation = { side: 'left', node: currentNode };
              done = true;
            }
          }
          //if the value is greater than the current node, go right
          else if (value > currentNode.value) {
            //do we already have a value here?
            if (currentNode.right) {
              parentNode = currentNode;
              currentNode = currentNode.right;
            } else {
              newNodeLocation = { side: 'right', node: currentNode };
              done = true;
            }
          }
        } else {
          //value is equal

          if (type === "removeLeaf") {
            if (parentNode.right.value === currentNode.value) {
              delete parentNode.right;
            } else {
              delete parentNode.left;
            }
          }

          done = true;
        }
      }

      if (type === "insert") {
        return newNodeLocation;
      } else if (type === "remove") {
        return {
          removeNode: currentNode,
          parentNode: parentNode
        }
      } else {
        return currentNode;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(5)
tree.insert(7)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.insert(180)
tree.insert(14)
tree.insert(160)
tree.insert(16)
// JSON.stringify(traverse(tree.root))
// tree.lookup(20)
tree.remove(6)
//6's successor is 5
//20's successor is 160

JSON.stringify(tree.root)

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
