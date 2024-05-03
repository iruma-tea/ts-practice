{
    interface Person {
        name: string;
        age: number;
        hobbies: string[];
    }

    // パラメータkey型にkeyof演算子を使用
    function getProperty(obj: Person, key: keyof Person) {
        return obj[key];
    }

    const person: Person = {
        name: "John",
        age: 30,
        hobbies: ["tennis", "cooking"],
    }

    console.log(getProperty(person, "name"));
}