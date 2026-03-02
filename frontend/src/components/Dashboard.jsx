// this is the dashboard, it will have all the buttons and pet animations (from PetDisplay)
import { useEffect } from "react";
import PetAnimation from "./PetDisplay";
import ActionButtons from "./ActionButtons";
import StatBar from "./StatBar";

function Dashboard({ setPet, pet, setScreen }) { // function that returns the dashboard page, takes in pet as a prop to display the pet info and animations
  useEffect(() => {
    const interval = setInterval(async () => {
      console.log("Updating day...");
      try {
        const response = await fetch("http://localhost:8000/pet/next-day", {
          method: "POST"
        });
  
        if (response.ok) {
          const data = await response.json();
          setPet(data);
        }
  
      } catch (error) {
        console.error("Day update failed:", error);
      }
  
    }, 3000); // 15 seconds = 1 day can change later if needed for demo
  
    return () => clearInterval(interval);
  }, [setPet]);

  if (!pet) { // if there is no pet info, show loading screen
    return <div>Loading...</div>;
  }

  return (
    <div id='dashboard'>
      <h1 className='dashboardWelcome'>{pet.name}</h1>
      <div id='petDisplay'>
        <PetAnimation pet={pet} animation="Idle" />
      </div>
      <div id='buttons'>
        <ActionButtons setPet={setPet} setScreen={setScreen}/>
      </div>
      <div id='statBars'>
        <StatBar label="Hunger" value={pet.hunger} isReversed={true}/>
        <StatBar label="Happiness" value={pet.happiness} />
        <StatBar label="Health" value={pet.health} />
        <StatBar label="Energy" value={pet.energy} />
      </div>
      <p className="day-counter">Days: {pet.day}</p>
    </div>
  );
}
export default Dashboard;
// essentially everything goes into this component, will be similar to App.jsx
