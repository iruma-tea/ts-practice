{
class SuperClass {
  method(value: number): string {
    return `SuperClass method: ${value}`;
  }
}

class SubClass extends SuperClass {
  method(value: string): string {
    return `SuperClass method: ${value}`;
  }
}
// 型 'SubClass' のプロパティ 'method' を基本データ型 'SuperClass' の同じプロパティに割り当てることはできません。
//   型 '(value: string) => string' を型 '(value: number) => string' に割り当てることはできません。
    // パラメーター 'value' および 'value' は型に互換性がありません。
    //   型 'number' を型 'string' に割り当てることはできません。
}