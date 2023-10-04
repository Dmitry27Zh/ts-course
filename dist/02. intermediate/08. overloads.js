"use strict";
function add(a, b) {
    return a + b;
}
// add(2, '2') ---- error
add(1, 1);
function asyncSum(a, b, c) {
    const result = a + b;
    if (c) {
        return c(result);
    }
    return Promise.resolve(result);
}
asyncSum(2, 2);
// output depends on input params
