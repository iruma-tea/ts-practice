{
    interface Person {
        name: string;
        age: number;
    }

    interface Student extends Person {
        club: string;
    }

    let fn3 = (person: Person) => {
        console.log(`That person's name is ${person.name} (${person.age}).`);
    }

    let fn6 = (student: Student, gender: string) => {
        console.log(`That student's name is ${student.name}(${student.age},${gender}) and enjoys ${student.club}`);
    }

    // OK
    fn6 = fn3;

    fn6({ name: "Alice", age: 18, club: "chess" }, "female");
    // ログ：That person's name is Alice (18).
}