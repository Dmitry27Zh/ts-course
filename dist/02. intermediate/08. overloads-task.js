"use strict";
function head(value) {
    return value[0];
}
const item = head('22'); // string | number | boolean
function head2(value) {
    return value[0];
}
const item2 = head2('11'); // string
item2 + 1; // ---- no error
