{
class DataStorage<T> {
    private items: T[] = [];

    addItem(item: T) {
        this.items.push(item);
    }

    getItem(index: number): T {
        return this.items[index];
    }

    getAllItems(): T[] {
        return [...this.items];
    }
}
}