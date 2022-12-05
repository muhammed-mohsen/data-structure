"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    constructor(value) {
        this._next = null;
        this._value = null;
        this._value = value;
    }
    get next() {
        return this._next;
    }
    get value() {
        return this._value;
    }
    set next(value) {
        this._next = value;
    }
    set value(value) {
        this._value = value;
    }
}
exports.Node = Node;
//# sourceMappingURL=Node.js.map