// where the game over screen is rendered
import useLanguage from "../useTranslation.js";

function GameOver({ pet, setPet, setScreen }) {
    const { t } = useLanguage();
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
        <h1 className="pet-died-heading">{t("petDied")}</h1>
        <p className="pet-day-display">{t("petLasted")} {pet.day} {t("daysText")}</p>
        <p className="money-spent-display">{t("youSpent")} ${pet.money_spent}</p>
        <p className="toy-purchased">{t("totalToys")}: {pet.total_toys_purchased}</p>
        <p className="medicine-purchased">{t("totalMedicine")}: {pet.total_medicine_purchased}</p>
        <p className="food-purchased">{t("totalFood")}: {pet.total_food_purchased}</p>
        <p className="died-reasons">Your pet died of hunger, consider feeding it more often next time</p>
        <button onClick={handleRestart} className="play-again-button">
            {t("playAgain")}
        </button>
      </div>
    );
  }
  
  export default GameOver;