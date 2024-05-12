{
    interface Person {
        name: string;
        age: number;
        hobbies: string[];
    }

    const person: Person = {
        name: "John",
        age: 18,
        hobbies: ["cooking", "tennis"],
    };

    function getSpecificPeroperty<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }

    // 戻り値はstring型
    getSpecificPeroperty(person, "name");
}