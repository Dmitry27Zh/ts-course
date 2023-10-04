"use strict";
function append(el, list) {
    return list.concat(el);
}
// append<number>(2, [null]) ---- error
append('ss', ['2']);
