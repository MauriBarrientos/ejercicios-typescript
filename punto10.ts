class ElectricCar extends Car {
    batteryLife: number;

    constructor (make: string, batteryLife: number) {
        super(make);
        this.batteryLife = batteryLife;
    }

    charge(): void {
        console.log(`Charging the ${this.make} with battery life of ${this.batteryLife}`);
    }
}

let myElectricCar = new ElectricCar('Audi', 76)
myElectricCar.charge();
myElectricCar.drive();
