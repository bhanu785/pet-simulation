// where all the components come together and arguments are passed using info from fastapi
import { useState } from "react";
import "./App.css";
import PetCustomizer from "./components/PetCustomizer";
import Dashboard from "./components/Dashboard";
import Shop from "./components/Shop";

function App() {
  const [pet, setPet] = useState(null);
  const [screen, setScreen] = useState("customizer");

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

      {screen === "dashboard" && (
        <Dashboard
          pet={pet}
          setPet={setPet}
          setScreen={setScreen}
        />
      )}

      {screen === "shop" && (
        <Shop
          pet={pet}
          setPet={setPet}
          setScreen={setScreen}
        />
      )}
    </>
  );
}

export default App;