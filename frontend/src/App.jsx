// where all the components come together and arguments are passed using info from fastapi
import { useState } from "react";
import "./App.css";
import PetCustomizer from "./components/PetCustomizer";
import Dashboard from "./components/Dashboard";
import Shop from "./components/Shop";
import GameOver from "./components/GameOver";

function App() {
  const [pet, setPet] = useState(null);
  const [screen, setScreen] = useState("customizer");


  const isDying = pet && pet.is_alive === false;

  return (
    <>
      {screen === "customizer" && (
        <PetCustomizer
          onStart={(newPet) => {
            setPet(newPet);
            setScreen("dashboard");
          }}
        />
      )}

      {screen === "dashboard" && !isDying && (
        <Dashboard
          pet={pet}
          setPet={setPet}
          setScreen={setScreen}
          isDying={false}
        />
      )}

      {screen === "dashboard" && isDying && (
        <Dashboard
          pet={pet}
          setPet={setPet}
          setScreen={setScreen}
          isDying={true}
        />
      )}

      {screen === "shop" && (
        <Shop
          pet={pet}
          setPet={setPet}
          setScreen={setScreen}
        />
      )}

      {screen === "gameover" && (
        <GameOver
          pet={pet}
          setPet={setPet}
          setScreen={setScreen}
        />
      )}
    </>
  );
}

export default App;