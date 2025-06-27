{
// キー名がテンプレート文字列パターンのインデックスシグネチャ
interface Product {
    [key: `product_${number}`]: string;
}
}