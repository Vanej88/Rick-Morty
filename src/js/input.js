
import { clearCards, displayCards } from './card'

export function configureInput(characters){
    
    const input = document.querySelector('.search__input');

    input.addEventListener('keydown', function(event){

            const value = input.value
             
            const filtered = characters.filter(char => {
                //console.log(characters[0])
                //console.log(char.name)
                let nombre = char.name.toLowerCase()
                let lowerValue = value.toLowerCase()
                return nombre.includes(lowerValue)
            })

            clearCards()
            displayCards(filtered)
    

})

   
}





