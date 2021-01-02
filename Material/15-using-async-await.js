const getCoffee = () => {
   return new Promise((resolve, reject) => {
      const seed = 1;
      setTimeout(() => {
         if(seed >= 10){
            resolve("Got a Coffee!");
         }else{
            reject("Seeds is out of stock!");
         }
      }, 1000)
   })
}

async function makeCoffee() {
   try{
      const coffee = await getCoffee();
      console.log(coffee);
   }catch(rejectedReason){
      console.log(rejectedReason);
   }
}

makeCoffee()