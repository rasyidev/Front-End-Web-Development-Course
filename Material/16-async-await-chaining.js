const state = {
   isCoffeeMakerReady: true,
   seedStock: {
      arabica: 250,
      robusta: 60,
      liberica: 80
   }
}

async function reserveACoffee(type, miligrams){
   try{
      const seed = getSeed(type, miligrams);
      const coffee = makeCoffee(seed);
      const result = servingToTable(coffee);
      console.log(result);
   }catch(rejectedReason){
      console.log(rejectedReason);
   }
}

const getSeed = (type, miligrams) => {
   return new Promise((resolve, reject) => {
      if(state.seedStock[type] >= miligrams){
         console.log("Getting seeds . . .");
         setTimeout(() => {
            state.seedStock[type] -= miligrams;
            resolve("Got the seeds!");
            console.log(`Stock  ${type} left: ${state.seedStock[type]}`)
         }, 3000)
      }else{
         console.log(`Stock left: ${state.seedStock[type]}`)
         reject("The seed is not enough!")
      }
   })
}

const makeCoffee = seed => {
   return new Promise((resolve, reject) => {

      console.log("Making coffee . . . .")
      if (state.isCoffeeMakerReady){
         setTimeout(() => {
            resolve("Coffee has already made!")
         }, 3000)
      }else{
         reject("There is something wrong with the Coffee Maker Machine!");
      }
   })
}

const servingToTable = coffee => {
   return new Promise(resolve => {
      resolve("Order completed!");
   })
}

reserveACoffee("liberica", 80);
// console.log(`Seed Stock: ${state.seedStock}`);