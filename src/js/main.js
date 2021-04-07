import { displayCards } from "./card"
import { configureInput } from './input'

export function main(){

   let characters = [];

    function getChars(characterNum){
        let charactersPerPage = 20;
        let pages = Math.ceil(characterNum/charactersPerPage);

        for(let i = 1; i <= pages; i++){
        fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
            .then(response => response.json())
            .then(data => {
                data.results.forEach(element => {characters.push(element)})
                if(characters.length >= characterNum){
                    displayCards(characters);
                    configureInput(characters);
                 }  
            })  
        }
    }

    getChars(60)


}


