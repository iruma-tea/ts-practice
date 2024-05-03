{
    const person = {
        name: "John",
        age: 30,
        hobbies: ["tennis", "cooking"],
    }

    function greet(p: typeof person) {
        console.log(`My name is ${p.name}!`);
    }

    // パラメータ p の型
    // {
    //   name: string;
    //   age: number;
    //   hobbies: string[];
    // }

    // NG
    greet({ name: "Alice", age: 22 });
    // 型 { name: string; age: number; } の引数を型 { name: string; age: number; hobbies: string[]; } のパラメーターに割り当てることはできません。

}