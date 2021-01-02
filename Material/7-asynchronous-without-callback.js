const getCake = () => {
   let cake = null;
   console.log("Cooking the cake. Please wait . . . .");
   setTimeout(() => {
      cake = "Cake is Ready to serve!"
   }, 3000)
   return cake;
}

const cake = getCake();
console.log(cake)
/*
Output:
Cooking the cake. Please wait . . . .
null
--------------------------------------------------
return is called first before timeout is over.
*/