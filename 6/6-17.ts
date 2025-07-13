{
interface IStorage<T> {
    add(item: T): void;
    getItem(index: number): T;
    getAllItems(): T[];
}

// NG. IStorage<T>を正しく実装できていない
class DataStorage<T> implements IStorage<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getItem(index: number): T {
        return this.items[index];
    }

    // getAllItemsメソッドが欠如されているためエラー
    // クラス 'DataStorage<T>' はインターフェイス 'IStorage<T>' を正しく実装していません。
    // プロパティ 'getAllItems' は型 'DataStorage<T>' にありませんが、型 'IStorage<T>' では必須です。
}
}