{
type Pair<T, U> = {
    first: T;
    second: U;
};

// ジェネリック型エイリアスによる型注釈
const stringAndnumber: Pair<string, number> = {
    first: "hello",
    second: 123
};
}