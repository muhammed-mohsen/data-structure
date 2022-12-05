import Node from "./Node";

export default class Tree {
  private _root: Node;
  constructor(root: number) {
    const newRoot = new Node(root);
    this._root = newRoot;
  }
  /**
   * insert by recursive
   */
  //   public insert(value:number,root:Node) {
  //         const node = new Node(value);
  //         let current:Node|null = root
  //         if(current&&value>current.value)
  //         {
  //             if(!current.right) return current.right = node
  //             current = current.right
  //             this.insert(value,current)
  //         }
  //         else if(current&&value< current.value)
  //         {
  //             if(!current.left)return current.left = node

  //             current = current.left
  //             this.insert(value,current)
  //         }
  //   }
  /**
   * insert by while
   */

  public insert(value: number) {
    const node = new Node(value);
    let current: Node | null = this._root;
    while (current) {
      if (current && value > current.value) {
        if (current.right) current = current.right;
        else {
          current.right = node;
          return;
        }
      }

      if (current && value < current.value ) {
        if (current.left) current = current.left;
        else {
          current.left = node;
          return;
        }
      }
    }
  }
  /**
   * find
   */
  public find(value:number) {
    let current: Node | null = this._root;

    while (current) {
        if(current.value === value)
        return current 
        else if (current && value > current.value) {
             current = current.right;
            
        }
        
        if (current && value < current.value ) {
            current = current.left;
            
        }
    } 

      return -1
  }
  /**
   * checkEquality
   */
  public checkEquality(first:Node|null|undefined,second:Node|null|undefined):boolean {
        if(first===null && second===null)return true
        else if(first&&second)
        {
          return  first.value === second.value && this.checkEquality( first.left,second.left)&&this.checkEquality(first.right,second.right) 
        }
        else return false
  }  
  /**
   * isBinarySearchTree
   */
  public isBinarySearchTree(root:Node|null|undefined,min:number,max:number):boolean {
    if(!root) return true
        if( root.value<min||root.value>max )
        {
            return false 
        }
       
     
          return    this.isBinarySearchTree( root.left,root.left?.value || Number.MIN_SAFE_INTEGER,root.right?.value||Number.MAX_SAFE_INTEGER)&&this.isBinarySearchTree(root.right,root.left?.value||Number.MIN_SAFE_INTEGER,root.right?.value||Number.MAX_SAFE_INTEGER) 
  }  
  /**
   * printKNodes
   */
  public getKNodes(distance:number):number[] {
    const array:number[] = []
    this.KNodes(this._root,distance,array)
    return array
     
  }  
  /**
   * printKNodes
   */
  public KNodes(root:Node|null|undefined,distance:number,array:number[]):any {
    if(!root) return ; 
    if(distance ===0 )  {
            array.push(root.value)
        return;
    }
    this.KNodes(root.left,distance-1,array)
    console.log(root.value);
   
   this.KNodes(root.right,distance-1,array)
       
     
  }  

  /**
   * swapRoot
   */
  public swapRoot() {
    const temp = this._root.right
    this._root.right = this._root.left
    this._root.left = temp
    
  }
  /**
   * minValue
   */
  public minValue(root1:Node|null|undefined):any {
    if(root1?.left ===null  && root1?.right ===null)
    return root1.value ;
    return Math.min( Math.min(this.minValue(root1?.left),this.minValue(root1?.right),this.root.value))
  }  
  private isLeaf(root:Node|null|undefined) {
   return root?.left ===null  && root?.right ===null 
  }
  /**
   * length
   */
  public length(root1:Node|null|undefined):any {
    if(this.isLeaf(root1))
    return 0 ;
    return 1+ Math.max( this.length(root1?.left),this.length(root1?.right))
  }  


  /**
   * inOrderTraversal
   */
  public inOrderTraversal(root:Node|null) {
      if(!root)
      return;
      
      this.inOrderTraversal(root.left)
      console.log("🚀 ~ file: Tree.ts ~ line 81 ~ Tree ~ inOrderTraversal ~ root", root.value)
      this.inOrderTraversal(root.right)
  }
  /**
   * Getter root
   * @return {Node}
   */
  public get root(): Node {
    return this._root;
  }

  /**
   * Setter root
   * @param {Node} value
   */
  public set root(value: Node) {
    this._root = value;
  }
}
