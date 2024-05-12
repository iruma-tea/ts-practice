{
    type Pair<T, U> = {
        first: T;
        second: U;
    }

    // ジェネリック型エイリアスによる型注釈
    const stringAndNumber: Pair<string, number> = {
        first: "Hello",
        second: 123,
    }
}