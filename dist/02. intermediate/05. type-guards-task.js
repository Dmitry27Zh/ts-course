"use strict";
function isTelephoneOrder(order) {
    return typeof order === 'object' && 'callerNumber' in order;
}
function isInternetOrder(order) {
    return (order === null || order === void 0 ? void 0 : order.email) !== undefined;
}
function makeOrder(order) {
    if (isTelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
    else if (isInternetOrder(order)) {
        console.log(order.email);
    }
}
