"use strict";
function prop(key, obj) {
    return obj[key];
}
const obj1 = { a: 1, b: 2, c: 3 };
prop('a', obj1);
// prop('d', obj1) ---- error
