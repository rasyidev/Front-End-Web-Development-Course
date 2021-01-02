const getCake = callback => {
   let cake = null;
   console.log("Cooking the cake. Please wait . . . .");
   setTimeout(() => {
      cake = "Cake is Ready to serve!";
      callback(cake);
   }, 3000)
}

getCake(cake => {
   console.log(cake);
})
/*
Output:
Cooking the cake. Please wait . . . .
Cake is Ready to serve!
--------------------------------------------------
return is called first before timeout is over.
*/