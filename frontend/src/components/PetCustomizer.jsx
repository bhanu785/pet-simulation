// first thing the user sees; allows them to customize their pet before starting the game (aka choosing cat/dog and name)
import { useState } from 'react';
import catIdle from '../assets/spriteSheets/cat/Idle (1).png';
import dogIdle from '../assets/spriteSheets/dog/Idle (1).png';
function PetCustomizer({ onStart }) { // pet customizer component, takes in onStart as a prop to pass the 
// pet info to the dashboard
    const [petType, setPetType] = useState("");
    const [petName, setPetName] = useState("");

    async function selectedPet(e) {
        e.preventDefault();
    
        try {
          const response = await fetch(
            `http://localhost:8000/pet/create?type=${petType}&name=${petName.trim()}`,
            {
              method: "POST",
            }
          );
    
          if (!response.ok) {
            const error = await response.json();
            alert(error.detail || "Something went wrong");
            return;
          }
    
          const data = await response.json();
    
          // use backend pet, not local object
          onStart(data);
    
        } catch (error) {
          console.error("Error creating pet:", error);
        }
      }
    
    

    return (
        <div className="background">
            <h1 className="customizePetHeader">PetLife: Legacy</h1>
            <form onSubmit={selectedPet}>
                <div className='petTypeSection'></div>
                <p className='choosePetLabel'>Choose a pet:</p>
                <button type="button" onClick={() => setPetType("Cat")} className='catButton'><img src={catIdle} width={150} height={150} />Cat</button>
                <button type="button" onClick={() => setPetType("Dog")} className='dogButton'><img src={dogIdle} width={150} height={150} />Dog</button>
                <div className='petNameSection'></div>
                <p className='petNameLabel'>Enter your pet's name:</p>
                <input type="text" id="pet-name" name="pet-name" className='petNameText' onChange={(e) => setPetName(e.target.value)} minLength={1} maxLength={15} placeholder='Name' />
                <button type="submit" className='startGame' disabled={!petName || !petType}>Start Game</button>
            </form>
        </div>
    );
}
export default PetCustomizer;
