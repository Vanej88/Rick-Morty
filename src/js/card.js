import { openPopup } from "./modal";

export function displayCards(characters) {
  for (let char of characters) {
    displayCard(char);
  }
}

function displayCard(character) {
  // pintamos todos los personajes

  let template = `
                    <div  class="card__content">
                        <div class="card__box-img">
                            <img class="card__img" src="${character.image}" data-image="${character.image}" alt="rick">
                        </div>
                        <div class="card__box-text">
                            <p class="card__title" 
                              data-name="${character.name}">${character.name}</p>
                            <div class="card__description">
                              <p class="card__status">
                                <span class="card__status-circle card__status-circle--active card__circle card__circle--active"></span>
                                <span data-status="${character.status}">${character.status}</span>
                              </p>
                              
                              <p class="card__type" 
                                    data-species="${character.species}" 
                                    data-gender="${character.gender}" 
                                    data-origin="${character.origin.name}" 
                                    data-location="${character.location.name}">${character.species}
                              </p>
                            </div>
                        </div>   
                    </div>
`;
  let padre = document.querySelector(".cards");
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = template;
  card.addEventListener("click", openPopup);
  padre.appendChild(card);
}

export function clearCards() {
  let parent = document.querySelector(".cards");
  parent.innerHTML = "";
}
