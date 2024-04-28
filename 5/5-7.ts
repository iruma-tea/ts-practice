{
    type Name = {
        name: string;
    };

    type Age = {
        age: number;
    };

    type NameOrAge = Name | Age;

    let john: NameOrAge;
    john = { name: "John" };
    john = { age: 25 };

}