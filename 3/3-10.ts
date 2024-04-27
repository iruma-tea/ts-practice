{
    let id: number | string;

    // OK
    id = 10; // number型は代入可能
    id = "10"; // string型は代入可能

    // Error
    id = true; // // boolean 型は不可能
    // >> Type 'boolean' is not assignable to type 'string | number'.
}