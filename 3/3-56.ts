{
function addNumbers(a, b) {
    return a + b;
}

// 引数としてnumber型の値を受け取った場合
let result = addNumbers(1, 2); // 3
console.log(result);

// 引数としてstring型の値を受け取った場合
result = addNumbers("1", "2");
console.log(result); // 12

// 引数としてnumber型とstring型を受け取った場合
result = addNumbers(2, "4"); // 24
console.log(result)
}