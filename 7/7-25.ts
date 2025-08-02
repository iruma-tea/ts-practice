{
  function loggedAccessor<This, V>(
    target: {
      get: (this: This) => V;
      set: (this: This, value: V) => void;
    },
    context: ClassAccessorDecoratorContext<This, V>
  ) {
    // 戻り値のオブジェクトに書き換えたいアクセサを追加する。
    return {
      get: function (this: This) {
        console.log(`${context.name.toString()}を取得`);
        const result = target.get.call(this);
        return result;
      },
      set: function (this: This, value: V) {
        console.log(`${context.name.toString()}を${value}に設定`);
        target.set.call(this, value);
      },
      // 初期化をカスタマイズするための関数
      init: function (this: This, initialVal: V) {
        console.log(`${context.name.toString()}を${initialVal}に初期化`);
        return initialVal;
      },
    };
  }

  class Person {
    @loggedAccessor
    accessor age = 20;
  }

  const person = new Person();
  console.log(person.age);
  person.age = 21;

  // ログ出力:
  // ageを20に初期化
  // ageを取得
  // 20
  // ageを21に設定
}
