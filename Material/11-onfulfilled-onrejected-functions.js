const executorFunction = (resolve, reject) => {
   isCoffeeMakerReady = false;
   if(isCoffeeMakerReady){
      resolve("Sucess making a cup of coffee!");
   }else{
      reject("Coffee maker is not ready!");
   }
}

const handlerSucess = resolveValue => {
   console.log(resolveValue);
}

const handlerRejected = rejectReason => {
   console.log(rejectReason);
}

const makeCoffee = new Promise(executorFunction);
makeCoffee.then(handlerSucess, handlerRejected);