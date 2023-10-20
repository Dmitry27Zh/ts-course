export function tupleCreator(first) {
    return function (second) {
        return [first, second];
    };
}
const toTupleWith = tupleCreator(1); // ---- [number, U]
const val1 = toTupleWith(2);
const val2 = toTupleWith('str');
