const arabicaOrder = () => {
   return new Promise(resolve => {
      setTimeout(() => {
         resolve("Arabica Coffee has already made!")
      }, 4000)
   })
}

const robustaOrder = () => {
   return new Promise(resolve => {
      setTimeout(() => {
         resolve("Robusta Coffee has already made!")
      }, 2000)
   })
}
const libericaOrder = () => {
   return new Promise(resolve => {
      setTimeout(() => {
         resolve("Liberica Coffee has already made!")
      }, 4000)
   })
}

const promises = [arabicaOrder(), robustaOrder(), libericaOrder()]

Promise.all(promises)
.then(resolvedValue => {
   console.log(resolvedValue);
})
