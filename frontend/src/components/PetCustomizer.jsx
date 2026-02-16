// first thing the user sees; allows them to customize their pet before starting the game (aka choosing cat/dog and name)
import { useState } from 'react';
import catIdle from '../assets/spriteSheets/cat/Idle (1).png';
import dogIdle from '../assets/spriteSheets/dog/Idle (1).png';
function PetCustomizer() {
    const [petType, setPetType] = useState("");

    function selectedPet() {
        // e.preventDefault();
        alert('Pet Type: ' + getPetType() + '\n' + 'Pet Name: ' + getPetName());
    }
    function getPetType() { // getter functions to be used in other components
        return petType;
    }
    function getPetName() {
        const petname = document.getElementById("pet-name").value;
        return petname;
    }
    return (
        <div className="pet-customizer">
            <h1 className="customizePetHeader">Choose Your Pet</h1>
            <form onSubmit={selectedPet}>
                <div className='petTypeSection'></div>
                <p className='choosePetLabel'>Choose a pet:</p>
                <button type="button" onClick={() => setPetType("Cat")} className='catButton'><img src={catIdle} width={150} height={150} />Cat</button>
                <button type="button" onClick={() => setPetType("Dog")} className='dogButton'><img src={dogIdle} width={150} height={150} />Dog</button>
                <div className='petNameSection'></div>
                <p className='petNameLabel'>Enter your pet's name:</p>
                <input type="text" id="pet-name" name="pet-name" className='petNameText' minLength={1} maxLength={20} />
                <button type="submit" className='startGame'>Start Game</button>
            </form>
        </div>
    );
}
export default PetCustomizer;
