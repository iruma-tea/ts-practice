{
// オーバーロードのシグネチャ
function addNumbers(a: number, b: number): number;
function addNumbers(a: string, b: string): string;
function addNumbers(a: number, b: string): string;
function addNumbers(a: string, b: number): string;

function addNumbers(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return a.toString() + b.toString();
    }
}

let result = addNumbers("1", "2"); // "12"
result.includes("1"); // true
}