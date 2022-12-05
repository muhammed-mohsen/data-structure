export class Node<T> {
    private _next:Node<T>|null=null ;
    private _value:T | null=null

    constructor(value:T){
        this._value = value
    }
    /**
     * Getter $node
     * @return {Node<T> }
     */
	public get next(): Node<T>  {
		return this._next as Node<T> ;
	}

    /**
     * Getter value
     * @return {T }
     */
	public get value(): T  {
		return this._value as  T;
	}

    /**
     * Setter node
     * @param {Node<T> } value
     */
	public set next(value: Node<T>|null ) {
		this._next = value;
	}

    /**
     * Setter value
     * @param {T } value
     */
	public set value(value: T ) {
		this._value = value;
	}

    
}