export function keys(obj) {
    const result = [];
    const isKey = (key) => obj.hasOwnProperty(key);
    for (let key in obj) {
        if (isKey(key)) {
            result.push(key);
        }
    }
    return result;
}
export function keys2(obj) {
    const result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(key);
        }
    }
    return result;
}
export function keys3(obj) {
    const result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(key);
        }
    }
    return result;
}
export function values(obj) {
    const result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(obj[key]);
        }
    }
    return result;
}
