{
    // メソッドデコレータを定義
    function logged(originalMethod: any, context: any) {
        // 新たに関数を定義
        function loggedMethod(this: any, ...args: any[]) {
            console.log("メソッド呼び出し！");
            const result = originalMethod.call(this, ...args); // 元のメソッドの呼び出し
            console.log("メソッド終了");
            return result; // 元のメソッドの結果を返却
        }
        return loggedMethod;

    }

    class Person {
        name: string;
        constructor(name: string) {
            this.name = name;
        }

        // このメソッドに機能を追加したい
        @logged
        greet() {
            console.log(`Hello, my name is ${this.name}.`);
        }
    }

    const person = new Person("John");

    // loggedでデコレートされたメソッドの呼び出し
    person.greet();
}