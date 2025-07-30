{
// ゲッターデコレータ
function loggedGetter<This, Return>(target: (this: This) => Return, context: ClassGetterDecoratorContext<This, Return>) {
    return function loggedMethod(this: This): Return {
        console.log(`${context.name.toString()} を取得`);
        const result = target.call(this);
        return result;
    };
}
// セッターデコレータ
function loggedSetter<This, Args>(target: (this: This, args: Args) => void, context: ClassSetterDecoratorContext<This, Args>) {
    return function loggedMethod(this: This, args: Args): void {
        console.log(`${context.name.toString()} を ${args} に設定`);
        const result = target.call(this, args);
        return result;
    }
}
}