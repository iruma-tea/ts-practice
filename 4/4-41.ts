{
abstract class Animal {
    // 抽象メソッドは具体的な実装を持たせてはいけない
    abstract makeSound(): void;

    move(): void {
        console.log("The animal is moving.");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof woof!");
    }
}
}