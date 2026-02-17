// first thing the user sees; allows them to customize their pet before starting the game (aka choosing cat/dog and name)
import { useState } from 'react';
import catIdle from '../assets/spriteSheets/cat/Idle (1).png';
import dogIdle from '../assets/spriteSheets/dog/Idle (1).png';
function PetCustomizer() {
    const [petType, setPetType] = useState("");
    const [petName, setPetName] = useState("");

    function selectedPet(e) {
        e.preventDefault();
        if (!petType || petName.trim() === "") {
            alert("Please select a pet and enter a name.");
            return;
        }
        alert('Pet Type: ' + petType + '\n' + 'Pet Name: ' + petName);
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
                <input type="text" id="pet-name" name="pet-name" className='petNameText' onChange={(e) => setPetName(e.target.value)} minLength={1} maxLength={20} />
                <button type="submit" className='startGame'>Start Game</button>
            </form>
        </div>
    );
}
export default PetCustomizer;
