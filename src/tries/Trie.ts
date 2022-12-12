import Node from "./Node";
//for autocompletion
export default class Trie {
  private _root: Node;

  constructor(value: string) {
    const root = new Node(value);
    this._root = root;
  }

  /**
   * insert
   */
  public insert(value: string) {
    let current = this.root;

    for (let index = 0; index < value.length; index++) {
      const char = value[index];

      if (!current.hasChar(char)) current.addChar(char);
      current = current.getChar(char);
    }
    current.isEndOfWord = true;
  }

  /**
   * contains
   */
  public traverse(root: Node) {
    console.log(
      "🚀 ~ file: Trie.ts ~ line 31 ~ Trie ~ traverse ~ root.value",
      root
    );
    root.getChildren().forEach((currentRoot) => {
      this.traverse(currentRoot);
    });
  }
  /**
   * autoComplete
   */
  public autoComplete(root: Node, word: string) {
    const lastNode = this.getLastNode(root, word);

    let autoComplete: string[] = [];
    this.getAutoCompleteWords(lastNode, word, autoComplete);
    return autoComplete;
  }

  private getAutoCompleteWords(root: Node, word: string, list: string[]) {
    root.getChildren().forEach((currentRoot) => {
      if (currentRoot.isEndOfWord) list.push(word + currentRoot.value);
      this.getAutoCompleteWords(currentRoot, word + currentRoot.value, list);
    });
  }
  /**
   * getLastNode
   */
  public getLastNode(root: Node, word: string) {
    [...word].forEach((char) => {
      if (root.getChar(char)) root = root.getChar(char);
    });
    return root;
  }

  /**
   * remove
   */
  public remove(root: Node, value: string, index = 0) {
    if (!root) return;
    const char = value[index];

    if (!value && !root.getChar(char).isEndOfWord)
      throw new Error("word not exist ");
    if (value[value.length] === char) {
      root.isEndOfWord = false;
    }
    // if (!root.getChar(char)) throw new Error("word not exist ");
    if (char && !root.getChar(char).hasChildren()) {
      root.children = {};
    }
    this.remove(root.getChar(char), value, ++index);

    // console.log(
    //   "🚀 ~ file: Trie.ts ~ line 45 ~ Trie ~ remove ~ value",
    //   value[0]
    // );
  }
  /**
   * contains
   */
  public contains(value: string) {
    let current = this.root;

    for (let index = 0; index < value.length; index++) {
      const char = value[index];

      if (!current.hasChar(char)) return false;
      current = current.getChar(char);
    }
    return current.isEndOfWord;
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
