class Car {
    constructor(manufacture, color) {
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }
    
    startEngines() {
        console.log("Mesin dinyalakan");
        this.enginesActive = true;
    }
    
    info() {
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Color: ${this.color}`);
        console.log(`Engines: ${this.manufacture ? "Active" : "Inactive"}`);
    }
}
 
const johnCar = new Car("Honda", "Red");
 
johnCar.startEngines();
johnCar.info();
 
 
/* output:
Mesin dinyalakan
Manufacture: Honda
Color: Red
Engines: Active
*/