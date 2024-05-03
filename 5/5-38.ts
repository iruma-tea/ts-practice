{
    // 引数がstring型ならtrueを返す関数
    function isString(value: unknown): value is string {
        return typeof value === "string";
    }

    function printValue(inputVal: number | string) {
        if (isString(inputVal)) {
            console.log(inputVal.toUpperCase());
        } else {
            console.log(inputVal.toFixed(2));
        }
    }
}