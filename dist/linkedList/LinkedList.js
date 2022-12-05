"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class LinkedList {
    constructor() {
        this._first = null;
        this._last = null;
    }
    addLast(item) {
        const node = new Node_1.Node(item);
        if (!this._first || !this._last) {
            this._first = node;
            this._last = node;
        }
        else {
            this._last.next = node;
            this._last = node;
        }
    }
    get first() {
        return this._first;
    }
    get last() {
        return this._last;
    }
    set first(value) {
        this._first = value;
    }
    set last(value) {
        this._last = value;
    }
}
exports.default = LinkedList;
//# sourceMappingURL=LinkedList.js.map