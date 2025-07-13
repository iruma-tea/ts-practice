{
type RGB = [red: number, green: number, blue: number];

interface Color {
    // 型の記述が冗長
    red: RGB | string;
    green: RGB | string;
    bule: RGB | string;
}

let color:Color;
}