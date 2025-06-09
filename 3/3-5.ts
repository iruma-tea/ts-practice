{
    let age = 22;
    age.toUpperCase(); // number型にはない不正なメソッドの呼び出し

    let firstName = "Alice";
    firstName.toFixed(); // string型にはない不正なメソッドの呼び出し

    let isCompleted = true;
    isCompleted + isCompleted;  // boolean型には許可されていない + 演算子を適用
}