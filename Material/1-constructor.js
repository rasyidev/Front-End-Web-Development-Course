class Car {
   constructor(manufacture, color){
      this.manufacture = manufacture;
      this.color = color;
      this.isEngineActive = false
   }
}

let mycar = new Car("Avanza", "Silver");
console.log(mycar)
console.log(`I bought ${mycar.manufacture} car, the color is ${mycar.color}`)