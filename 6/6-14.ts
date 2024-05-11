{
    class DataStorage<T = number> {
        private items: T[] = [];

        // コンストラクタ
        constructor(initialItems?: T[]) {
            if (initialItems) {
                this.items.push(...initialItems);
            }
        }

        add(item: T): void {
            this.items.push(item);
        }

        getItem(index: number): T {
            return this.items[index];
        }

        getAllItems(): T[] {
            return [...this.items];
        }

    }

    // 初期値を渡してインスタンス化
    let stringStorage = new DataStorage(["Ryu", "Ken"]);
}