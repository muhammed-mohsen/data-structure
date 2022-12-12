import Trie from "./tries/Trie";
const trie = new Trie("");
trie.insert("car");
trie.insert("care");
trie.insert("careful");
trie.insert("carefule");
console.log(trie.autoComplete(trie.root, "car"));
// trie.remove(trie.root, "car");
