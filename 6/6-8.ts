{
    function getLastItem<T>(array: T[]): T {
        return array[array.length - 1];
    }

    const numbers = [1, 2, 3, 4, 5];

    // 型引数を明示的にnumbers型に指定
    let lastNumber = getLastItem<number>(numbers);

    // NG
    let lastString = getLastItem<string>(numbers);
    // 型の引数を型のパラメーターに割り当てることはできません。


}

