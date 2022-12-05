
import Tree from "./tree/Tree";
const tree = new Tree(5)

tree.insert(2)
tree.insert(7)
tree.insert(3)
tree.insert(1)
tree.insert(6)
tree.insert(8)
const tree2 = new Tree(5)

tree2.insert(2)
tree2.insert(10)
tree2.insert(3)
tree2.insert(1)
tree2.insert(6)
tree2.insert(8)

console.log("🚀 ~ file: index.ts ~ line 10 ~ tree",tree.checkEquality(tree.root,tree2.root))
// tree.swapRoot() 
// console.log("🚀 ~ file: index.ts ~ line 10 ~ tree",tree.isBinarySearchTree(tree.root,tree.root.left?.value || Number.MIN_SAFE_INTEGER ,tree.root.right?.value ||Number.MAX_SAFE_INTEGER))
console.log("🚀 ~ file: index.ts ~ line 19 ~ tree2", tree.getKNodes(1))





//5,2,7,3,1,8 e