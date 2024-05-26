{
    function bound(_originalMethod: any, context: any) {
        context.addInitializer(function (this: any) {
            // thisはインスタンスを参照する。context.nameは対象のメソッド名
            this[context.name] = this[context.name].bind(this);
        });
    }
}