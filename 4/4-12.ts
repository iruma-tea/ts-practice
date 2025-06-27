{
// 関数による定義
type CalcFunction = (n1: number, n2: number) => number;

// インタフェース夜定義
interface CalcInterface {
    (n1: number, n2: number): number; // 呼び出しシグニチャ
}

const add: CalcFunction = (n1, n2) => n1 + n2;
const subtract: CalcInterface = (n1, n2) => n1 - n2;
}