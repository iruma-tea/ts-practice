{
    type RGB = [red: number, green: number, blue: number];

    interface Color {
        red: RGB | string;
        green: RGB | string;
        blue: RGB | string;
    }

    const color: Color = {
        red: [255, 0, 0],
        green: "#00ff00",
        blue: [0, 0, 255],
    };

    const greenNormalized = color.green.toUpperCase();
    // >> Property 'toUpperCase' does not exist on type 'string | RGB'.
    //  >> Property 'toUpperCase' does not exist on type 'RGB'.
}