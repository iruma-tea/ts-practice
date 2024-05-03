{
    type RGB = [red: number, green: number, blue: number];

    interface Color {
        red: RGB | string;
        green: RGB | string;
        blue: RGB | string;
    }
}