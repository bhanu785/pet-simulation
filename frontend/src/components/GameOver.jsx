// where the game over screen is rendered
function GameOver({ pet, setPet, setScreen }) {

    // Handle restart by calling reset endpoint and updating pet state
    const handleRestart = async () => {
      try {
        const response = await fetch("http://localhost:8000/pet/reset", {
          method: "POST",
        });
        
        // Check for non-OK response
        if (!response.ok) {
          console.error("Reset failed");
          return;
        }
        // waits for response from endpoint in json format
        const data = await response.json();
        
        // updates the pet with new pet data from endpoint
        setPet(data);
        setScreen("customizer");
  
      } catch (error) {
        console.error("Reset error:", error);
      }
    };
  
    return (
      <div className="game-over-screen">
        <h1 className="pet-died-heading">Your Pet Has Passed Away</h1>
        <p className="pet-day-display">Your pet lasted {pet.day} days</p>
        <p className="money-spent-display">You spent ${pet.money_spent}</p>
        <p className="toy-purchased">Total toys purchased: {pet.total_toys_purchased}</p>
        <p className="medicine-purchased">Total medicine purchased: {pet.total_medicine_purchased}</p>
        <p className="food-purchased">Total food purchased: {pet.total_food_purchased}</p>
        <button onClick={handleRestart} className="play-again-button">
          Play Again
        </button>
      </div>
    );
  }
  
  export default GameOver;