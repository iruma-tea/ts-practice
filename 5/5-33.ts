{
    const color = {
        red: [255, 0, 0],
        green: "#00ff00", // string型
        bleu: [0, 0, 255],
    }

    // 型推論の結果
    // {
    //  red: number[];
    //  green: string;
    //  bleu: number[];
    // }

    // OK
    const greenNormalized = color.green.toUpperCase();

}