{
interface Product {
    [key: `product_${number}`]: string;
}

// OK
const productA: Product = {
    product_1: "foo",
    product_2: "bar",
    product_3: "baz",
};

// NG
const productB: Product = {
    product_1: "foo",
    product_2: "bar",
    product_dx: "baz", // Error
};

// オブジェクト リテラルは既知のプロパティのみ指定できます。'product_dx' は型 'Product' に存在しません。
}