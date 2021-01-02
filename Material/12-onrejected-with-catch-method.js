const executorFunction = (resolve, reject) => {
   isCoffeeMakerReady = true;

   if(isCoffeeMakerReady){
      resolve("Success making a cup of coffee!");
   }else{
      reject("The coffee maker is not ready!");
   }
}

const handlerSucess = resolveValue => {
   console.log(resolveValue);
}

const handlerRejected = rejectReason => {
   console.log(rejectReason);
}

const coffee = new Promise(executorFunction);
coffee.then(handlerSucess)
.catch(handlerRejected);

