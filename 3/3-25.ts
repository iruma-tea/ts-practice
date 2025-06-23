{
type Person = {
    name: string;
    age?: number;
};

// ok
const alice: Person = {
    name: "Alice",
    age: 28,
};

// ok オプショナルなageプロパティが存在しなくても問題ない
const bob: Person = {
    name: "Bob",
};
}