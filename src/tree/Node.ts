export default class Node{
    private _value:number;
    private _left:Node|null;
    private _right:Node|null;
  constructor(value: number, left: Node|null=null, right: Node|null=null) {
    this._value = value
    this._left = left
    this._right = right
  }
    /**
     * Getter value
     * @return {number}
     */
	public get value(): number {
		return this._value;
	}

    /**
     * Getter left
     * @return {Node}
     */
	public get left(): Node|null {
		return this._left;
	}

    /**
     * Getter righ
     * @return {Node}
     */
	public get right(): Node|null {
		return this._right;
	}

    /**
     * Setter value
     * @param {number} value
     */
	public set value(value: number) {
		this._value = value;
	}

    /**
     * Setter left
     * @param {Node} value
     */
	public set left(value: Node|null) {
		this._left = value;
	}

    /**
     * Setter right
     * @param {Node} value
     */
	public set right(value: Node|null) {
		this._right = value;
	}
    
}