{
    abstract class Animal {
        abstract makeSound(): void;

        move(): void {
            console.log("The animal is moving.");
        }
    }
}