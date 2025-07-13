{
// メソッドデコレータの定義
function logged(originalMethod: any, context: any) {
    // 新たな関数を定義
    function loggedMethod(this: any, ...args: any[]) {
        console.log(`${context.name} メソッドの呼び出し`);
        const result = originalMethod.call(this, ...args);
        console.log(`${context.name} メソッド終了！`);
        return result; // 元のメソッド結果を返却
    }
    return loggedMethod; // ログ出力の処理を追加した関数を返却。メソッドがこの関数に置き換わる
}

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @logged // メソッドデコレータを適用
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const person = new Person("John");

// loggedデコレートされたメソッドを呼び出し
person.greet();

// greet メソッドの呼び出し
// Hello, my name is John.
// greet メソッド終了！
}