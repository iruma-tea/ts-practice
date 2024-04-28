{
    class Parent {
        parentMethod() {
            // スーパークラスのメソッド
        }
    }

    class Child extends Parent {
        childMethod() {
            // サブクラスのメソッド
        }
    }

    const objA: Parent = new Child();

    // NG
    const objB: Child = new Parent();
    // プロパティ 'childMethod' は型 'Parent' にありませんが、型 'Child' では必須です。
}