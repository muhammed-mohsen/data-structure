"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("./linkedList/LinkedList"));
const linkedList = new LinkedList_1.default();
linkedList.addLast("muhammed");
linkedList.addLast("mohsen");
linkedList.addLast("heba");
linkedList.addLast('ethar');
while ((_a = linkedList.first) === null || _a === void 0 ? void 0 : _a.next) {
    console.log(linkedList.first.value);
    linkedList.first = linkedList.first.next;
    if (!((_b = linkedList.first) === null || _b === void 0 ? void 0 : _b.next))
        console.log(linkedList.last.value);
}
//# sourceMappingURL=index.js.map