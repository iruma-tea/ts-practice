{
    function bound(_originalMethod: any, context: any) {
        // addInitializerにフックしたい関数を渡す。
        context.addInitializer(function (this: any) {
            this[context.name] = this[context.name].bind(this);
        });
    }
}