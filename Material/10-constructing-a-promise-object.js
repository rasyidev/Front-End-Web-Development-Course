const executorFunction = (resolve, reject) => {
   const isCoffeeMakerReady = true;

   if(isCoffeeMakerReady){
      resolve("Success making a cup of coffee");
   }else{
      reject("Coffee maker is broken");
   }
}


const coffee = new Promise(executorFunction);
console.log(coffee)