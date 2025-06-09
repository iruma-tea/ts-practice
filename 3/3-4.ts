{
    let age = 23; // 型推論で number 型となる 
    age = "22"; // number 型の変数に string 型の値を代入

    let firstName = "Alice"; // 型推論によって string 型となる
    firstName = 0; // string 型の変数に number 型の値を代入

    let isCompleted = false; // 型推論よって boolean 型となる
    isCompleted = 1; // boolean 型の変数に number 型の値を代入
}