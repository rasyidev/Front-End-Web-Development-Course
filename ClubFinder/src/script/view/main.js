const main = function () {
   const searchElement = document.querySelector("#searchElement");
   const buttonSearchElement = document.querySelector("#searchButtonElement");
   const clubListElement = document.querySelector("#clubList");

   const onButtonSearchClicked = () => {
      const dataSource = new DataSource(renderResult, fallbackResult);
      dataSource.searchClub(searchElement.value);
   };

   const renderResult = results => {
      clubListElement.innerHTML = "";
      results.forEach(club => {
         const {name, fanArt, description} = club;
         const clubElement = document.createElement("div");
         clubElement.setAttribute("class", "club");

         clubElement.innerHTML = `<img class="fan-art-club" src="${fanArt}" alt="Fan Art">\n
            <div class="club-info">\n
            <h2> ${name} </h2>\n
            <p> ${description} </p>
            </div>`;
         clubListElement.appendChild(clubElement);
      })
   };

   const fallbackResult = message => {
      clubListElement.innerHTML = "";
      clubListElement.innerHTML += `<h2 class="placeholder"> + ${message} + </h2>`
   };

   buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};