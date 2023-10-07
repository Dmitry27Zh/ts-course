"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tupleCreator = void 0;
function tupleCreator(first) {
    return function (second) {
        return [first, second];
    };
}
exports.tupleCreator = tupleCreator;
const toTupleWith = tupleCreator(1); // ---- [number, U]
const val1 = toTupleWith(2);
const val2 = toTupleWith('str');
