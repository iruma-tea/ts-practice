{
function loggedClass<This extends { new (...args: any[]): {} }>(
    target: This,
    context: ClassDecoratorContext<This>
) {
    return class extends target {
        constructor(...args: any) {
            super(...args);
            console.log(
            `${context.name} クラスに ${args.join(", ")} を渡してインスタンス化`
            );
        }
    };
}

@loggedClass
class Person {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }
    // 省略
}

const person = new Person("John");
// ログ出力: Person クラスに John を渡してインスタンス化
}