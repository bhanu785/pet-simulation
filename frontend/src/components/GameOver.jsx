// where the game over screen is rendered
function GameOver({ setPet, setScreen }) {

    const handleRestart = async () => {
      try {
        const response = await fetch("http://localhost:8000/pet/reset", {
          method: "POST",
        });
  
        if (!response.ok) {
          console.error("Reset failed");
          return;
        }
  
        const data = await response.json();
  
        setPet(data);
        setScreen("customizer");
  
      } catch (error) {
        console.error("Reset error:", error);
      }
    };
  
    return (
      <div className="game-over-screen">
        <h1>Your Pet Has Passed Away</h1>
        <button onClick={handleRestart}>
          Play Again
        </button>
      </div>
    );
  }
  
  export default GameOver;