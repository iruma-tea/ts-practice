{
    interface Product {
        [key: `product_${number}`]: string;
    }

    const productA: Product = {
        product_1: "foo",
        product_2: "bar",
        product_3: "baz",
    };

    const productB: Product = {
        product_1: "foo",
        product_2: "bar",
        product_dx: "baz", // オブジェクト リテラルは既知のプロパティのみ指定できます。'product_dx' は型 'Product' に存在しません。
    }
}