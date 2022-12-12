export default class Heap {
  private _heap: number[] = [];
  /**
   * Getter heap
   * @return {number[]}
   */
  public get heap(): number[] {
    return this._heap;
  }

  /**
   * Setter heap
   * @param {number[]} value
   */
  public set heap(value: number[]) {
    this._heap = value;
  }

  /**
   * insert
   */
  public insert(value: number) {
    this._heap.push(value);

    this.bubbleUp();
  }

  /**
   * heapify
   */
  public heapify(array: number[]) {
    const temp = this._heap;
    this._heap = array;
    for (let index = Math.floor(array.length / 2 - 1); index >= 0; index--) {
      this.bubbleDown(index);
    }
    array = this._heap;
    this._heap = temp;
    return array;
  }
  public remove() {
    if (this.heap.length < 0) return;
    const removedElement = this._heap[0];
    this._heap[0] = this.heap[this.heap.length - 1];
    delete this.heap[this.heap.length--];
    this.bubbleDown();
    return removedElement;
  }
  private getLargerChildIndex(index: number) {
    if (!this.hasLeftChild(index)) return index;

    if (!this.hasRightChild(index)) return this.leftChildIndex(index);
    return this.leftChild(index) > this.rightChild(index)
      ? this.leftChildIndex(index)
      : this.rightChildIndex(index);
  }
  private isValidParent(index: number) {
    if (!this.hasLeftChild(index)) return true;
    let isValid = this._heap[index] >= this.leftChild(index);
    if (this.hasRightChild(index))
      isValid = isValid && this._heap[index] >= this.rightChild(index);
    return isValid;
  }
  private hasLeftChild(index: number) {
    return this.leftChildIndex(index) <= this._heap.length - 1;
  }
  private hasRightChild(index: number) {
    return this.rightChildIndex(index) <= this._heap.length - 1;
  }
  private rightChild(index: number) {
    return this._heap[this.rightChildIndex(index)];
  }
  private leftChild(index: number) {
    return this._heap[this.leftChildIndex(index)];
  }

  private rightChildIndex(index: number) {
    return 2 * index + 2;
  }
  private leftChildIndex(index: number) {
    return 2 * index + 1;
  }
  private bubbleDown(index = 0) {
    while (index <= this._heap.length - 1 && !this.isValidParent(index)) {
      const largerChildIndex = this.getLargerChildIndex(index);

      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }
  // if (!this._size)++   this._heap.push(value);
  //   return;
  // } else {
  //   if (!this._heap[index]) {
  //     this._heap[index] = value;
  //     this.bubbleUp(value, index);
  //     return;
  //   } else if (this._heap[index] > value) {
  //     const newIndex = this.goLeft(index);
  //     this.insert(value, newIndex);
  //   } else {
  //     const newIndex = this.goRight(index);
  //     this.insert(value, newIndex);
  //   }

  private bubbleUp() {
    let index = this._heap.length - 1;

    while (index > 0 && this._heap[index] > this._heap[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  private swap(index: number, parentIndex: number) {
    const temp = this._heap[index];
    this._heap[index] = this.heap[parentIndex];
    this._heap[parentIndex] = temp;
  }
  private parent(index: number) {
    return Math.floor((index - 1) / 2);
  }
  //   private bubbleUp(value: number, index: number) {
  //     if (index % 2 === 0) {
  //       const newIndex = (index - 2) / 2;
  //       const parentValue = this._heap[newIndex];
  //       if (parentValue > value || !parentValue) return;
  //       else {
  //         this._heap[index] = parentValue;
  //         this._heap[newIndex] = value;
  //         this.bubbleUp(value, newIndex);
  //       }
  //     } else {
  //       const newIndex = (index - 1) / 2;
  //       const parentValue = this._heap[newIndex];
  //       if (parentValue > value || !parentValue) return;
  //       else {
  //         this._heap[index] = parentValue;
  //         this._heap[newIndex] = value;
  //         this.bubbleUp(value, newIndex);
  //       }
  //     }
  //   }

  private goRight(index: number) {
    return 2 * index + 2;
  }
  private goLeft(index: number) {
    return 2 * index + 1;
  }
}

// import Heap from "./heaps/Heap";
// // const heap = new Heap();
// // heap.insert(10);
// // heap.insert(5);
// // heap.insert(17);
// // heap.insert(4);
// // heap.insert(22);
// const heap = new Heap();
// heap.insert(5);
// heap.insert(3);
// heap.insert(10);
// heap.insert(1);
// heap.insert(4);
// heap.insert(2);
// // console.log("🚀 ~ file: index.ts ~ line 8 ~ heap", heap.remove());
// // console.log("🚀 ~ file: index.ts ~ line 8 ~ heap", heap.remove());
// // console.log("🚀 ~ file: index.ts ~ line 8 ~ heap", heap.remove());
// // console.log("🚀 ~ file: index.ts ~ line 8 ~ heap", heap.remove());
// // console.log("🚀 ~ file: index.ts ~ line 8 ~ heap", heap.remove());
// // console.log("🚀 ~ file: index.ts ~ line 8 ~ heap", heap.remove());
// console.log(
//   "🚀 ~ file: index.ts ~ line 8 ~ heap",
//   heap.heapify([5, 3, 8, 4, 1, 2])
// );
// console.log("🚀 ~ file: index.ts ~ line 24 ~ heap", heap);
// console.log("🚀 ~ file: index.ts ~ line 8 ~ heap", heap.remove());
// console.log("🚀 ~ file: index.ts ~ line 8 ~ heap", heap.remove());
// console.log("🚀 ~ file: index.ts ~ line 8 ~ heap", heap.remove());
// console.log("🚀 ~ file: index.ts ~ line 8 ~ heap", heap.remove());
// console.log("🚀 ~ file: index.ts ~ line 8 ~ heap", heap.remove());
// console.log("🚀 ~ file: index.ts ~ line 8 ~ heap", heap.remove());
