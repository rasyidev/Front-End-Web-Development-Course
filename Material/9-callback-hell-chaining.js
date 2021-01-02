/*
Asume that we will create a process chain to make a coffee. The process would be:
1. Get the ingredients 
2. Making the dough
3. Put the dough into the pan
4. Baking the dough

All of these process has dependency each other.
*/

function makeACake(...rawIngredients){
   gatheringIngredients(rawIngredients, function(ingredients){
      makeTheDough(ingredients, function(dough){
         pourDough(dough, function(pouredDough){
            bakeTheCake(pouredDough, function(cake){
               console.log(cake);
            })
         })
      })
   })
}

rawIngredients = ["Wheat", "Sugar", "Baking Powder", "Egg", "Salt"];

makeACake(cake => {
   console.log(cake)
})