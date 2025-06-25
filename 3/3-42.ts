{
const person = {
    age: 25,
    firstName: Math.random() > 0.5 ? "Alice": null
};

// NG 'person.firstName' は 'null' の可能性があります。
console.log(person.firstName.toUpperCase());
console.log(person.firstName?.toUpperCase()); // OK
}