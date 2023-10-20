// number
let x = 10.5;
// let y = 123n
let z = NaN;
// string
let str1 = 'Hello World!';
// implicit
export let str = 'asdfg';
// str = 4 ---- error
// explicit
// any
let str2;
str2 = 2;
let str3;
str3 = '3';
// symbol
let symb = Symbol('1');
// strong typing
// symb + str3 ---- error
// boolean
let b = true;
// b = 'false' ---- error
// nothing
let nothing1 = undefined;
let nothing2 = null;
// literal
const num = 100; // implicit type
// universal
let any = 2;
any = '1';
any = false;
any = 'string';
any.toUpperCase();
// unknown
let smt = '1';
// smt.toUpperCase() ---- error
if (typeof smt === 'string') {
    smt.toUpperCase();
}
