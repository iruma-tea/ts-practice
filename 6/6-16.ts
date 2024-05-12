{
    class DataStorage<T> {
        private itmes: T[] = [];

        add(item: T): void {
            this.itmes.push(item);
        }

        getItem(index: number): T {
            return this.itmes[index];
        }

        getAllItems(): T[] {
            return [...this.itmes];
        }
    }

    class DataStorageLogger<T> extends DataStorage<T> {
        printAllItems(): void {
            const allItems = this.getAllItems();
            console.log("Storaed items:", allItems);
        }

        // 0番目に保存したデータを取得するメソッドを追加
        getFirstItem(): T {
            return this.getItem(0);
        }
    }

    // このnumber型がスーパークラスの型引数にも渡る
    let numberStorage = new DataStorageLogger<number>();
    numberStorage.add(85);
    numberStorage.add(90);
    console.log(numberStorage.getFirstItem()); // 85

    // NG. スーパークラスのaddメソッドのパラメータの型が、number型になっているためエラー
    numberStorage.add("12");
    // 型 'string' の引数を型 'number' のパラメーターに割り当てることはできません。
}