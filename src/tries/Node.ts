export default class Node {
  private _children: { [key: string]: Node } = {};
  private _value: string = "";
  private _isEndOfWord: boolean = false;
  constructor(value: string) {
    this._value = value;
  }
  /**
   * Getter children
   * @return {{[key:string]:Node} }
   */
  public get children(): { [key: string]: Node } {
    return this._children;
  }

  /**
   * Getter value
   * @return {string }
   */
  public get value(): string {
    return this._value;
  }

  /**
   * hasChar
   */
  public hasChar(char: string) {
    return !!this.children[char];
  }
  /**
   * hasChar
   */
  public hasChildren() {
    return this.getChildren().length;
  }
  /**
   * getChar
   */
  public getChar(char: string) {
    return this.children[char];
  }
  /**
   * addChar
   */
  public addChar(char: string) {
    this.children[char] = new Node(char);
  }
  /**
   * getChildren
   */
  public getChildren() {
    return Object.values(this.children);
  }

  /**
   * Getter isEndOfWord
   * @return {boolean }
   */
  public get isEndOfWord(): boolean {
    return this._isEndOfWord;
  }

  /**
   * Setter children
   * @param {{[key:string]:Node} } value
   */
  public set children(value: { [key: string]: Node }) {
    this._children = value;
  }

  /**
   * Setter value
   * @param {string } value
   */
  public set value(value: string) {
    this._value = value;
  }

  /**
   * Setter isEndOfWord
   * @param {boolean } value
   */
  public set isEndOfWord(value: boolean) {
    this._isEndOfWord = value;
  }
}
