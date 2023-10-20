// Array<string>
// string[]
// Promise<number>
function toArray(...arg) {
    return arg;
}
toArray(1, 2, 3);
toArray('');
toArray(1, 2, 3);
export function head2(value) {
    return value[0];
}
const head1 = (value) => value[0];
const obj = {
    title: 'asd',
    value: 12,
};
// obj.value = true ---- error
const obj2 = {
    title: '',
    value: [1],
};
