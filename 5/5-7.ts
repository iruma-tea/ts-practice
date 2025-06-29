{
type Name = {
    name: string;
};

type Age = {
    age: number;
};

// ユニオン型の定義
type NameOrAge = Name | Age;
// Name | Age
let john: NameOrAge;
john = { name: "John" }; // OK
john = { age: 25 }; // OK
}
