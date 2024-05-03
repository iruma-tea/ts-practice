{
    // 引数がstring型ならtrueを返す関数
    function isString(value: unknown): boolean {
        return typeof value === "string";
    }

    function printValue(inputVal: number | string) {
        if (isString(inputVal)) {
            // NG.inputValがstring型に絞り込めない。
            console.log(inputVal.toUpperCase());
        } else {
            console.log(inputVal.toFixed(2));
        }
    }
}