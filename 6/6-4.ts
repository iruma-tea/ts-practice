{
// Tは型パラメータ
function getLastItem<T>(array: T[]): T {
    return array[array.length - 1];
}
}