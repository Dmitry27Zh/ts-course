"use strict";
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
const myShape = ShapeKind.Circle;
myShape.toFixed(); // ---- default number type
const circle1 = {
    // kind: ShapeKind.Square, ---- error
    radius: 6,
    kind: 0, // ---- no error
};
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ERROR"] = 500] = "ERROR";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["NOT_AUTH"] = 403] = "NOT_AUTH";
})(StatusCode || (StatusCode = {}));
var Grade;
(function (Grade) {
    Grade["Junior"] = "junior";
    Grade["Middle"] = "middle";
    Grade["Senior"] = "senior";
})(Grade || (Grade = {}));
function levelUp(worker) {
    if (worker.level === Grade.Junior) {
        worker.level = Grade.Middle;
    }
    else if (worker.level === Grade.Middle) {
        worker.level = Grade.Senior;
    }
}
// levelUp({ level: 'junior' }) ---- error
levelUp({ level: Grade.Junior }); // ---- no error
