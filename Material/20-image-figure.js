class ImageFigure extends HTMLElement{
   constructor(){
      super();
      console.log("Constructed!");
   }

   connectedCallback(){
      console.log("Connected!");
   }

   disconnectedCallback() {
      console.log("Disconnected!");
   }

   attributeChangedCallback(name, oldValue, newValue){
      console.log(`Attribute: ${name} changed!`);
   }

   static get observedAttributes(){
      return ["caption"];
   }
}

customElements.define("image-figure", ImageFigure);