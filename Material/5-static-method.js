class Vehicle {
   constructor(licensePlate, manufacture){
      this.licensePlate = licensePlate;
      this.manufacture = manufacture
      this.engineActive = false;
   }

   startEngine() {
      console.log(`Machine ${this.manufacture} ${this.licensePlate} is active!`)
   }

   info() {
      console.log(`Liscence Plate   : ${this.licensePlate}`);
      console.log(`Manufacture      : ${this.manufacture}`);
      console.log(`Machine State    : ${this.startEngine ? "Active": "Inactive"}`);
   }

   parking() {
      console.log(`Vehicle with License Plate ${this.licensePlate} is being parked!`)
   }

}

myVehicle = new Vehicle("BE 2201 RT", "Honda");
myVehicle.info()
myVehicle.startEngine()
myVehicle.parking()

class Car extends Vehicle{
   constructor(licensePlate,manufacture,wheels){
      super(licensePlate,manufacture);
      this.wheels = wheels;
   }
   info(){
      super.info();
      console.log(`Wheels           : ${this.wheels}`);
   }

   droveOff(){
      console.log(`Vehicle with License Plate ${this.manufacture} ${this.licensePlate} is being accelerated!`)
   }

   openDoor(){
      console.log(`Opening the door...`)
   }
}

class Motorcycle extends Vehicle{
   constructor(licensePlate,manufacture,wheels){
      super(licensePlate,manufacture);
      this.wheels = wheels;
   }
   info(){
      super.info();
      console.log(`Wheels           : ${this.wheels}`);
   }

   droveOff(){
      console.log(`Vehicle with License Plate ${this.manufacture} ${this.licensePlate} is being accelerated!`)
   }

   doWheelie(){
      console.log(`Yippie, ${this.manufacture} ${this.licensePlate} is doing wheelie!`)
   }
}

class Plane extends Vehicle{
   constructor(licensePlate,manufacture,wings){
      super(licensePlate,manufacture);
      this.wings = wings;
      this.jetEngine = false;
   }
   info(){
      super.info();
      console.log(`Wheels           : ${this.wings}`);
   }

   takeOff(){
      console.log(`Plane ${this.manufacture} ${this.licensePlate} is being Take Off!`)
   }

   turnOnJet(){
      console.log(`Activate Jet Engine . . .`);
      this.jetEngine = true;
      console.log(`Jet Engine has been activated (status: ${this.jetEngine})`);
   }
}

class Helicopter extends Vehicle{
   constructor(licensePlate,manufacture,blades){
      super(licensePlate,manufacture);
      this.blades = blades;
   }
   info(){
      super.info();
      console.log(`Blades           : ${this.blades}`);
   }

   takeOff(){
      console.log(`Plane ${this.manufacture} ${this.licensePlate} is being Take Off!`)
   }

   lowFlying(){
      console.log(`Get the heli to fly lower . . .`);
      console.log(`Helicopter is flying low!`);
   }
}

class VehicleFactory{
   static repair(vehicles){
      vehicles.forEach(vehicle => {
         console.log(`Vehicle ${vehicle.manufacture} ${vehicle.licensePlate} is being repaired!`)
      })
   }
}

const myCar = new Car("B1234RI", "Daihatsu", 4);
const myMotorcycle = new Motorcycle("B4321YY", "Yamaha", 2);
const myPlane = new Plane("RI1", "Garuda Indonesia", 2);
const myHelicopter = new Helicopter("H123", "RI", 4);

myCar.info()
myMotorcycle.info()
myPlane.info()
myHelicopter.info()

VehicleFactory.repair([myCar, myMotorcycle]);