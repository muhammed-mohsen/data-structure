import AVLTree from "./AVLTree/AVLTree";

// const AvlTree = new AVLTree(10);
// AvlTree.insert(30);
// AvlTree.insert(20);
// AvlTree.insert(50);
// AvlTree.insert(60);
// AvlTree.insert(2);
// AvlTree.insert(1);
// AvlTree.insert(3);
// AvlTree.insert(6);
// AvlTree.insert(7);
// AvlTree.insert(8);
const AvlTree = new AVLTree(10);
AvlTree.insert(15);
AvlTree.insert(8);
AvlTree.insert(9);
AvlTree.insert(20);
AvlTree.insert(11);

// console.log(
//   "🚀 ~ file: index.ts ~ line 4 ~ AvlTree",
//   );
AvlTree.inOrderTraversal(AvlTree.root);
