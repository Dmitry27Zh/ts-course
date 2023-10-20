export function length(arg) {
    return arg.length;
}
length('abc');
length([1, 2, 3]);
length({ length: 3 });
const obj1 = { a: '1' };
// length(obj1) ---- error
