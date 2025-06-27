{
interface FruitStock {
    [i: string]: number;
}

const fruit:FruitStock = {};
fruit.apple = 3;
fruit.orange = 5;

fruit.banana = "many";
// 型 'string' を型 'number' に割り当てることはできません。
}