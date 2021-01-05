let imageFigureElement = document.querySelector("image-figure");
console.log(imageFigureElement)

// if not exist, create one!
if (!imageFigureElement){
   imageFigureElement = document.createElement("image-figure");
   document.body.appendChild(imageFIgureElement);
}

// change or add value to the attribute caption.
setTimeout(() => {
   imageFigureElement.setAttribute("caption", "Image 1");
}, 2000);

setTimeout(() => {
   imageFigureElement.setAttribute("src", "https://i.imgur.com/iJq78XH.jpg");
   imageFigureElement.setAttribute("alt", "Dicoding Logo");
   imageFigureElement.setAttribute("caption", "Huruf g dalam logo Dicoding");
   document.body.appendChild(imageFigureElement);
}, 5000)