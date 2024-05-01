{
    interface Person {
        name: string;
        age: number;
    }

    interface Student extends Person {
        club: string;
    }

    // Studentインタフェースの構造
    // {
    //     name: string;
    //     age: number;
    //     club: string;
    // }
}