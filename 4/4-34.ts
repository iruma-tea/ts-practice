{
    class Person {
        name: string;
        private password: string;

        constructor(name: string, password: string) {
            this.name = name;
            this.password = password;
        }

        public revealPassword() {
            console.log(`${this.name}'s password is ${this.password}`);
        }
    }

    const jane = new Person('Jane', '12345');

    // NG
    // console.log(jane.password);
    // プロパティ password はプライベートで、クラス Person 内でのみアクセスできます。

    // OK
    jane.revealPassword();
}