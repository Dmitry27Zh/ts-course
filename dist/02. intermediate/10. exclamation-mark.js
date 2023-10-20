let word = null;
export const num = 10;
if (num > 5) {
    word = 'abc';
}
// console.log(word.toUpperCase()) ---- error
console.log(word.toUpperCase());
console.log(word.toUpperCase());
function printName(name) {
    // const fullName: string = name ---- error
    const fullName = name;
}
function printName2(person) {
    console.log(person.name);
}
const people = [
    {
        name: 'Josh',
        age: 30,
        sex: 'male',
    },
    {
        name: 'Maria',
        age: 30,
        sex: 'female',
    },
];
const femalePerson = people.find((person) => person.sex === 'female'); // Person | undefined
const malePerson = people.find((person) => person.sex === 'male'); // Person
