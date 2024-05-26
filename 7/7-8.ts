{
    function logged(originalMethod: any, context: any) {
        function loggedMethod(this: any, ...args: any[]) {
            console.log(`${context.name}メソッド呼び出し!`);
            const result = originalMethod.call(this, ...args);
            console.log(`${context.name}メソッド終了!`);
            return result;
        }
        return loggedMethod;
    }

    function bound(_originalMethod: any, context: any) {
        // addInitializerにフックしたい関数を渡す。
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
        @logged
        greet() {
            console.log(`Hello, my name is ${this.name}`);
        }
    }

    const person = new Person("John");
    setTimeout(person.greet, 1000);
}