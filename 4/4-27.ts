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

    const childObj = new Child();
    childObj.parentMethod(); // 継承したスーパークラスのメソッドを呼び出せる
    childObj.childMethod();
}