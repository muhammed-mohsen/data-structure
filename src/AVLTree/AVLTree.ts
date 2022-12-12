import AVLNode from "./AVLNode";
export default class AVLTree {
  private _root: AVLNode | null = null;
  constructor(value: number) {
    const node = new AVLNode(value);
    this._root = node;
  }
  /**
   * insert
   */
  public insert(value: number) {
    this._root = this.insertWithRoot(this._root, value);
  }
  /**
   * insertWithRoot
   */
  private insertWithRoot(root: AVLNode | null, value: number) {
    const node = new AVLNode(value);

    if (!root) {
      return (root = node);
    }

    if (value < root.value) {
      root.left = this.insertWithRoot(root.left, value);
    } else root.right = this.insertWithRoot(root.right, value);
    this.setHeight(root);
    return this.balance(root);
  }

  private rotateLeft(root: AVLNode) {
    const newRoot = root.right as AVLNode;
    root.right = newRoot.left;

    newRoot.left = root;

    this.setHeight(root);
    this.setHeight(newRoot);
    return newRoot;
  }
  private rotateRight(root: AVLNode) {
    const newRoot = root.left as AVLNode;
    root.left = newRoot?.right;

    newRoot.right = root;

    this.setHeight(root);
    this.setHeight(newRoot);
    return newRoot;
  }
  private setHeight(root: AVLNode) {
    root.height =
      1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
  }

  private balanceFactor(root: AVLNode | null) {
    return root ? this.getHeight(root.left) - this.getHeight(root.right) : 0;
  }
  public inOrderTraversal(root: AVLNode | null) {
    if (!root) return;

    this.inOrderTraversal(root.left);
    console.log(
      "🚀 ~ file: Tree.ts ~ line 81 ~ Tree ~ inOrderTraversal ~ root",
      root.value
    );
    this.inOrderTraversal(root.right);
  }
  private balance(root: AVLNode) {
    if (this.isRightHeavy(root)) {
      const isLeft = this.balanceFactor(root.right) > 0;
      if (isLeft) root.right = this.rotateRight(root.right as AVLNode);

      return this.rotateLeft(root);
    } else if (this.isLeftHeavy(root)) {
      const isRight = this.balanceFactor(root.left) < 0;

      if (isRight) root.left = this.rotateLeft(root.left as AVLNode);
      return this.rotateRight(root);
    }
    return root;
  }
  private getHeight(node: AVLNode | null) {
    return node ? node.height : -1;
  }
  private isLeftHeavy(root: AVLNode) {
    return this.getHeight(root.left) - this.getHeight(root.right) > 1;
  }
  private isRightHeavy(root: AVLNode) {
    return this.getHeight(root.left) - this.getHeight(root.right) < -1;
  }
  /**
   * Getter root
   * @return {AVLNode}
   */
  public get root(): AVLNode | null {
    return this._root;
  }

  /**
   * Setter root
   * @param {AVLNode} value
   */
  public set root(value: AVLNode | null) {
    this._root = value;
  }
}



// import AVLTree from "./AVLTree/AVLTree";

// // const AvlTree = new AVLTree(10);
// // AvlTree.insert(30);
// // AvlTree.insert(20);
// // AvlTree.insert(50);
// // AvlTree.insert(60);
// // AvlTree.insert(2);
// // AvlTree.insert(1);
// // AvlTree.insert(3);
// // AvlTree.insert(6);
// // AvlTree.insert(7);
// // AvlTree.insert(8);
// const AvlTree = new AVLTree(10);
// AvlTree.insert(15);
// AvlTree.insert(8);
// AvlTree.insert(9);
// AvlTree.insert(20);
// AvlTree.insert(11);

// // console.log(
// //   "🚀 ~ file: index.ts ~ line 4 ~ AvlTree",
// //   );
// AvlTree.inOrderTraversal(AvlTree.root);
