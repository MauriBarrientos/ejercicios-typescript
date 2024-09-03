interface Shape {
    area(): number;
}

class Circle implements Shape {
    radius: number;

    constructor(radius: number){
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

let myCircle = new Circle(5);
console.log(myCircle.area());