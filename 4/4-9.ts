{
    interface FruitStock {
        peach: number; // 明示的なプロパティ
        [i: string]: number;
    }

    const fruit: FruitStock = { peach: 1 };
    fruit.apple = 3;
    fruit.orange = 5;
}