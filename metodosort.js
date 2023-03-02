const arr = [
    "abc","hola","prueba","xha","chd", "aaa"
]

console.log(arr.sort().reverse())

const persons = [
    {name: "luis",age: 30},
    {name: "bercy",age: 26}
]

console.log(persons.sort((a,b) => a.age - b.age))
console.log(persons.sort((a,b) =>  b.name.localeCompare(a.name)))