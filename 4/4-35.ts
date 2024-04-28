{
    class Person {
        name: string;
        protected saving: number;

        constructor(name: string, saving: number) {
            this.name = name;
            this.saving = saving;
        }
    }

    class Employee extends Person {
        private salary: number;

        constructor(name: string, saving: number, salary: number) {
            super(name, saving);
            this.salary = salary;
        }

        public introduce() {
            console.log(`I'm ${this.name}. My salary is ${this.salary} and my saving is ${this.saving}`);
        }
    }

    const john = new Employee("John", 1000, 30);
    john.introduce();

    // NG
    console.log(john.saving);
    // プロパティ password はプライベートで、クラス Person 内でのみアクセスできます。
}