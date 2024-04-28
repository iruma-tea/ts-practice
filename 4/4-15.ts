{
    interface Born {
        birthYear: number;
        place: string;
    }

    interface Hobby {
        hobbies: string[];
    }

    interface Person extends Born, Hobby {
        name: string;
    }

    const mike: Person = {
        name: "Mike",
        birthYear: 1995,
        place: "New York",
        hobbies: ["tennis", "cooking", "chess"],
    };
}