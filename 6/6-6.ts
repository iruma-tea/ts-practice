{
function createPair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const numStringPair = createPair(123, "Hello"); // [number, string]
const numPair = createPair(123, 456); // [number, number]
}