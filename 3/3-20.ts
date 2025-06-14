{
type Book = {
    title: string;
    author: string;
    publishedIn: number;
};

// ERROR
const book: Book = {
    title: "こころ",
    author: "夏目 漱石",
    // publishedIn: 1914
}
}