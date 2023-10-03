"use strict";
const pairs = [
    ['key', 'value'],
    ['key2', 'value2'],
];
const data = ['shh', 2, true];
// csv
const doc = [];
// doc.push('name', 'lastname', 20, new Date()) ---- error
doc.push(['name', 'lastname', 20, new Date()]); // ---- no error
