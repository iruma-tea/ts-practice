{
    // デコレータに型パラメータを導入
    function logged<This, Args extends any[], Return>(
        originalMethod: (this: This, ...args: Args) => Return,
        context: any
    ) {
        // This, Args, Returnを指定して共通化
        function loggedMethod(this: This, ...args: Args): Return {
            console.log(`${context.name}メソッドの呼び出し!`);
            const result = originalMethod.call(this, ...args);
            console.log(`${context.name}メソッドの終了!`);
            return result;
        }
        return loggedMethod;
    }
}