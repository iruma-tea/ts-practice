{
interface Person {
    name: string;
    age: number;
}

// インターフェイスの拡張によって、自動的にStudentはPersonのサブタイプになる
interface Student extends Person {
    club: string;
}

}