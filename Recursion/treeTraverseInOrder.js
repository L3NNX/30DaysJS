//Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {                                                                                                                           
    if (node === null) {
        return;
    }
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}

// Creating a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Performing in-order traversal
console.log("In-order Traversal:");
inOrderTraversal(root);




//             1
//            / \
//           2   3
//          / \ / \
//         4  5 6  7
