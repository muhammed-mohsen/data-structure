export default class AVLNode {
  private _value: number;

  private _height: number = 0;
  private _left: AVLNode | null;
  private _right: AVLNode | null;
  constructor(
    value: number,
    left: AVLNode | null = null,
    right: AVLNode | null = null
  ) {
    this._value = value;
    this._left = left;
    this._right = right;
  }

  /**
   * Getter height
   * @return {number }
   */
  public get height(): number {
    return this._height;
  }

  /**
   * Setter height
   * @param {number } value
   */
  public set height(value: number) {
    this._height = value;
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
   * @return {AVLNode}
   */
  public get left(): AVLNode | null {
    return this._left;
  }

  /**
   * Getter righ
   * @return {AVLNode}
   */
  public get right(): AVLNode | null {
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
   * @param {AVLNode} value
   */
  public set left(value: AVLNode | null) {
    this._left = value;
  }

  /**
   * Setter right
   * @param {AVLNode} value
   */
  public set right(value: AVLNode | null) {
    this._right = value;
  }
}
