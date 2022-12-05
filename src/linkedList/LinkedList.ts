import { Node } from "./Node";

export default class LinkedList<T> {
  private _first: Node<T> | null = null;
  private _last: Node<T> | null = null;
  private _size = 0;

  public addLast(item: T) {
    const node = new Node(item);
    if (!this._first || !this._last) {
      this._first = node;
      this._last = node;
    } else {
      this.last.next = node;
      this._last = node;
    }
    this._size++;
  }
  /**
   * indexOf
   */
  public indexOf(value: T) {
    let index = 0;
    let current = this._first;
    while (current) {
      if (current.value === value) return index;

      if (!current?.next) return (index = -1);

      current = current.next;
      index++;
    }
  }
  public removeLast() {
    let index = 0;
    let current = this._first;
    if (!this._first) throw new Error("there is no element on linked list");
    if (this._first === this._last) {
      this._first = this._last = null;
      this._size--;
    }

    while (current?.next.next) {
      current = current.next;
      index++;
    }
    if (!current || !current.next) return;
    this._last = current as any;
    current.next = null as any;
    this._size--;
  }
  public removeFirst() {
    if (!this._first) throw new Error("there is no element on linked list");
    if (this._first === this._last) {
      this._first = this._last = null;
      this._size--;
      return;
    }
    let current = this._first.next;
    this._size--;
    this._first = current;
  }
  /**
   * Getter first
   * @return {Node<T>}
   */
  public get first(): Node<T> {
    return this._first as Node<T>;
  }

  /**
   * reverse
   */
  public reverse() {
    if (!this._first) throw new Error("Linked list has no data");
    let prev = this._first,
      current = this._first?.next;
    while (current != null) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.last = this._first;
    if (this._last && this._last.next) this._last.next = null;
    this.first = prev;
  }
  /**
   * getKthNodeFromTheEnd
   */
  public getKthNodeFromTheEnd(k: number) {
      if(k===0)return this.last
      const distance = k - 1;
    if (!this._first || (distance <0)) throw new Error("Linked list has no data");
    let index = 0;
    let last = this._first,
      current = this._first;
    while (last != null) {
      last = last.next;
      if (index > distance &&current &&current.next) current = current.next;
      index++;

    }
    return current;
  }

  /**
   * Getter last
   * @return {Node<T>}
   */
  public get last(): Node<T> {
    return this._last as Node<T>;
  }

  /**
   * Setter first
   * @param {Node<T>} value
   */
  public set first(value: Node<T> | null) {
    this._first = value;
  }

  /**
   * Setter last
   * @param {Node<T>} value
   */
  public set last(value: Node<T> | null) {
    this._last = value;
  }
}


// import LinkedList from './linkedList/LinkedList';

// const linkedList = new LinkedList();
// linkedList.addLast("muhammed")
// linkedList.addLast("mohsen")
// linkedList.addLast("heba")
// linkedList.addLast('ethar')
// linkedList.addLast('sasa')
// linkedList.addLast('hamada')
// console.log("node",linkedList.getKthNodeFromTheEnd(10))

// while (linkedList.first?.next) {
//     console.log("🚀 ~ file: index.ts ~ line 10 ~ linkedList.first", linkedList.first.value)
    
//     linkedList.first = linkedList.first.next
//     if(!linkedList.first?.next)
//     console.log("🚀 ~ file: index.ts ~ line 10 ~ linkedList.first", linkedList.first.value)

    
    
// }
