// this is the dashboard, it will have all the buttons and pet animations (from PetDisplay)
import { useState, useEffect } from "react";
import PetAnimation from "./PetDisplay";
import ActionButtons from "./ActionButtons";
import StatBar from "./StatBar";

function Dashboard({ setPet, pet, setScreen, isDying }) {
  const [isPaused, setIsPaused] = useState(false);
  const [advice, setAdvice] = useState("");
  const [advicePopup, setAdvicePopup] = useState(false);
  const [lastAdviceDay, setLastAdviceDay] = useState(-1);

  // Day progression system
  useEffect(() => {
    if (!pet) return;
  
    // Prevent repeating hints every second
    if (pet.day === lastAdviceDay) return;
  
    let message = "";
  
    if (pet.health < 50) {
      message = "Your pet's health is low. Consider healing it!";
    } 
    else if (pet.energy < 30) {
      message = "Your pet is exhausted. Feed it";
    } 
    else if (pet.happiness < 40) {
      message = "Your pet is feeling down. Try playing with it!";
    } 
    else if (pet.hunger > 60) {
      message = "Your pet is very hungry! Consider feeding it soon.";
    }
  
    if (message !== "") {
      setAdvice(message);
      setAdvicePopup(true);
      setLastAdviceDay(pet.day);
    }
  
  }, [pet, lastAdviceDay]);

  useEffect(() => {
    let interval;
  
    if (!isDying && !isPaused) {
      interval = setInterval(async () => {
        try {
          const response = await fetch("http://localhost:8000/pet/next-day", {
            method: "POST",
          });
  
          if (response.ok) {
            const data = await response.json();
            setPet(data);
          }
        } catch (error) {
          console.error("Day update failed:", error);
        }
      }, 6000); // 10 seconds = 1 day (change for demo if needed)
    }
  
    return () => {
      if (interval) clearInterval(interval);
    };
  
  }, [isDying, isPaused]);

  // Handle transition to Game Over
  useEffect(() => {
    if (!isDying) return;

    const timer = setTimeout(() => {
      setScreen("gameover");
    }, 2000); // match death animation duration

    return () => clearTimeout(timer);
  }, [isDying, setScreen]);


  if (!pet) {
    return <div>Loading...</div>;
  }
  
  const getAnimation = () => {
    if (!pet || !pet.is_alive) return "Dead";
  
    if (pet.health <= 30) return "Hurt";
    if (pet.energy <= 20) return "Fall";
    if (pet.happiness <= 25) return "Slide";
    if (pet.hunger <= 30) return "Walk";
    if (pet.happiness >= 80 && pet.energy >= 60) return "Run";
  
    return "Idle";
  };



  return (
    <div id="dashboard">
      <h1 className="dashboardWelcome">{pet.name}</h1>

      <div id="petDisplay">
        <div className="pet-display"></div>
        <PetAnimation
          pet={pet}
          animation={getAnimation()}
        />
      </div>

      {!isDying && (
        <div id="buttons">
          <ActionButtons setPet={setPet} setScreen={setScreen} />
        </div>
      )}

      <div id="statBars">
        <div className="statColumn left">
          <StatBar label="Hunger" value={pet.hunger} isReversed={true} />
          <StatBar label="Happiness" value={pet.happiness} />
        </div>

        <div className="statColumn right">
          <StatBar label="Health" value={pet.health} />
          <StatBar label="Energy" value={pet.energy} />
        </div>
      </div>
      <p className="day-counter">Days: {pet.day}</p>
      <button onClick={() => setIsPaused(true)} className="help-button">Help</button>
      {isPaused && (
      <div className="helpOverlay">
        <div className="helpBox">
          <h2>How to Play</h2>
          <ul>
            <li>Feed your pet to reduce hunger.</li>
            <li>Play to increase happiness.</li>
            <li>Rest to restore energy.</li>
            <li>Go to the shop to buy stock.</li>
            <li>If health reaches 0, your pet dies.</li>
          </ul>

          <button onClick={() => setIsPaused(false)} className="close-help-button">
            Close
          </button>
        </div>
      </div>
)}
      <p className="money-display">Money: ${pet.money}</p>
      <p className="food-display">Food: {pet.food_stock}</p>
      <p className="toy-display">Toys: {pet.toy_stock}</p>
      <p className="medicine-display">Medicine: {pet.medicine_stock}</p>

      {advicePopup && (
        <div className="hint-popup-overlay">
            <div className="hint-popup">
            <h3>Hint</h3>
            <p>{advice}</p>
            <button onClick={() => setAdvicePopup(false) && setIsPaused(false)} className="ok-button">OK</button>
            </div>
        </div>
)}
    </div>
  );
}

export default Dashboard;