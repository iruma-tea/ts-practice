{
    function loggedField<This, V>(
        _target: undefined,
        context: ClassFieldDecoratorContext<This, V>
    ) {
        // 初期化をカスタマイズするための関数
        return function (this: This, initialVal: V) {
            console.log(`${context.name.toString()}フィールドを${initialVal}で初期化`);
            return initialVal;
        };
    }

    class Person {
        @loggedField
        private _name = "John";
    }

    const person = new Person();
}