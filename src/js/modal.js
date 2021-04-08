import { displayCards, clearCards } from "./card"

const body = document.querySelector('body');
const modalParent = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

export function displayModal(){

    modalParent.classList.add('modal--open');
    overlay.classList.add('overlay--visible');

    body.classList.add('no-scroll');  
    
}

export function hideModal(){
    console.log("calling")
    modalParent.classList.remove('modal--open');
    body.classList.remove('no-scroll');
    overlay.classList.remove('overlay--visible');
    console.log('hi')
}   

export function openPopup(event){

   const image = event.currentTarget.querySelector("[data-image]").getAttribute('data-image');
   const name = event.currentTarget.querySelector("[data-name]").getAttribute('data-name');
   const status = event.currentTarget.querySelector("[data-status]").getAttribute("data-status");
   const species = event.currentTarget.querySelector("[data-species]").getAttribute("data-species");
   const gender = event.currentTarget.querySelector("[data-gender]").getAttribute("data-gender");
   const origin = event.currentTarget.querySelector("[data-origin]").getAttribute("data-origin");
   const location = event.currentTarget.querySelector("[data-location]").getAttribute("data-location");
  
        
   const clickedChar = `
   
       <div class="modal__container">
            <div clas="modal__box-img">
                <img class="modal__img" src="${image}">
            </div>
            <div class="modal__box-text">
                <h3 class="modal__title">${name}</h3>
                <div class="modal__description">
                    <p class="modal__description-info"><span class="modal__circle"></span><span class="modal__status">${status}</span>-<span class="modal__type">${species}</span></p>
                </div>
                <div class="modal__details">
                    <p class="modal__details-text-light">Gender</p>
                    <p class="modal__details-text-bold">${gender}</p>
                </div>
                <div class="modal__details">
                    <p class="modal__details-text-light">Origin</p>
                   <p class="modal__details-text-bold">${origin}</p>
                </div>
                <div class="modal__details">
                    <p class="modal__details-text-light">Last known Location:</p>
                    <p class="modal__details-text-bold">${location}</p>
                </div>
            </div>
            <div class="modal__box-btn">
                <button id="close-modal" class="modal__btn" type="button" ><i class="fas fa-times"></i></button>
            </div>
        </div>  
    `

    modalParent.innerHTML = clickedChar; 

    displayModal();

    const closeModal = document.querySelector('#close-modal');


    closeModal.addEventListener("click", hideModal);




}


//clearCards()
