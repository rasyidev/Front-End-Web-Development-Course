class ImageFigure extends HTMLElement{
   constructor(){
      super();
      console.log("Constructed!");
   }

   connectedCallback(){
      console.log("Connected!");
      this.src = this.getAttribute("src") || null;
      this.alt = this.getAttribute("alt") || null;
      this.caption = this.getAttribute("caption") || null;
      this.render();
   }

   render() {
      this.innerHTML = `
         <figure>
            <img src="${this.src}" alt="${this.alt}">
            <figcaption>${this.caption}</figcaption>
         </figure>
      `
   }

   disconnectedCallback() {
      console.log("Disconnected!");
   }

   attributeChangedCallback(name, oldValue, newValue){
      console.log(`Attribute: ${name} changed!`);
      this[name] = newValue;
      this.render()
   }

   static get observedAttributes(){
      return ["caption"];
   }
}

customElements.define("image-figure", ImageFigure);