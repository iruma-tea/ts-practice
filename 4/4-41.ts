{
    abstract class Animal {
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