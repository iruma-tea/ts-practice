{
// デフォルト方の指定
function createPair<T = number, U = string>(first: T, second: U): [T, U] {
    return [first, second];
}
}