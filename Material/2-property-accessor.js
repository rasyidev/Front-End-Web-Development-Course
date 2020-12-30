class Car {
   constructor(manufacture, color){
      this.manufacture = manufacture;
      this._color = color;
      this.isEngineActive = false;
   }

   get color(){
      return this._color;
   }

   set color(newColor){
      console.log(`The color of the car is changed from ${this._color} into ${newColor}`);
      this._color = newColor;
   }
}



let mycar = new Car("Avanza", "Silver");
mycar.color = "Blue";
console.log(`I bought ${mycar.manufacture} car, the color is ${mycar.color}`);