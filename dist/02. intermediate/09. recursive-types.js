"use strict";
const nums = [1, 2, [1, 2, 3], [[3, 2, [2]]]];
function isJSON(arg) { }
isJSON('2');
isJSON(1);
isJSON({ a: [123], b: { x: 1 } });
// isJSON(new Date()) // ---- error
