{
    // デコレータファクトリの定義
    function logged(headMessage = "[LOG]:") {
        // メソッドデコレータを定義して返却
        return function actualDecorator(originalMethod: any, context: any) {
            function loggedMethod(this: any, ...args: any[]) {
                // デコレータファクトリに渡した値をデコレータ内で使用する。
                console.log(`${headMessage} ${context.name}メソッドの呼び出し!`);
                const result = originalMethod.call(this, ...args);
                console.log(`${headMessage} ${context.name}メソッド終了!`);
                return result;
            }
            return loggedMethod;
        }
    }

    function bound(_originalMethod: any, context: any) {
        context.addInitializer(function (this: any) {
            this[context.name] = this[context.name].bind(this);
        });
    }

    class Person {
        name: string;
        constructor(name: string) {
            this.name = name;
        }

        @bound
        @logged("[INFO]:")
        greet() {
            console.log(`Hello, my name is ${this.name}`);
        }
    }

    const person = new Person("John");
    person.greet();
}