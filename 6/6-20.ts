{
class DataStorage<T extends number | string> {
    private items: T[] = [];

    // 以下省略
}

// NG. number型かstring型に制約されているためエラー
let stringStorage = new DataStorage<boolean>();
// 型 'boolean' は制約 'string | number' を満たしていません。
}