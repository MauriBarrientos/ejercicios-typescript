// class Car {
//     make: string = 'Porsche';
// }

// let myCar = new Car();

// function drive(car: Car): void {
//     console.log(`Driving a ${car.make}`);
// }

// drive(myCar);


class Car {
    make: string = 'Porsche';

    drive(): void {
        console.log(`Driving a ${this.make}`);
    }
}

let myCar = new Car();
myCar.drive(); 