let imageFIgureElement = document.querySelector("image-figure");

// if not exist, create one!
if (!imageFIgureElement){
   imageFIgureElement = document.createElement("image-figure");
   document.body.appendChild(imageFIgureElement);
}

// change or add value to the attribute caption.
setTimeout(() => {
   imageFIgureElement.setAttribute("caption", "Image 1");
}, 2000);

setTimeout(() => {
   imageFIgureElement.remove();
}, 4000);