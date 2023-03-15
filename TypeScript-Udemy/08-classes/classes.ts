class Vehicle {
    /* 
    ****************************
    The long way

    color: string;
    constructor(color: string) {
        this.color = color;
    }

    */

    /*
    ****************************
    The short way
    */
    constructor(public color: string) {}

    ride(): void {
        console.log('Highway to Hell');
    }
    /* 
    ****************************
    */

    // protected methods can be called from child-classes
    protected price() {
        console.log(`Pretty expensive in color ${this.color}`);
    }
}

class Bike extends Vehicle {
    constructor(wheels: number, color: string) {
        super(color); // color is from parent-Class construtor
    }

    // an overridden method cant have another
    // modifier than the method in the parent class => private ... is not allowed
    ride(): void {
        console.log('ssssssssss');
        this.price();
    }

    // a new method is allowed to have any modifier
    private wheels(num: number): void {
        console.log(`It has ${num} wheels`);
    }

    howManyWheels(num: number) {
        this.wheels(num);
    }

    startRiding(): void {
        this.ride();
    }
}

const newBike = new Bike(2, "green");

newBike.ride();
newBike.howManyWheels(2);