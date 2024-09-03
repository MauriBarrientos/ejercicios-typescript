class Car {

    //privado para el punto 9, publico para el punto 10
    make: string; 

    constructor(make:string) {
        this.make = make;
    }
    drive() : void {
        console.log(`Driving a ${this.make}`);
    }

    getMake(): string {
        return this.make;
    }
}

let myCar = new Car('Porsche');
console.log(myCar.getMake());