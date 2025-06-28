{
class Parent {
    parentMethod() {
        // スーパークラスのメソッド
    }
}

// Parentクラスを継承
class Child extends Parent {
    childMethod() {
        // サブクラスのメソッド
    }
}

// スーパークラスの型が要求されているが、サブクラスのインスタンスを代入可能
const objA: Parent = new Child();

// NG
const objB: Child = new Parent();
// プロパティ 'childMethod' は型 'Parent' にありませんが、型 'Child' では必須です。
}