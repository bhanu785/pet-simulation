// where all the components come together and arguments are passed using info from fastapi
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard.jsx'
import PetCustomizer from './components/PetCustomizer.jsx';

function App() {
  const [petInfo, setPetInfo] = useState(null);
  const startGame = (info) => {setPetInfo(info);};
  return(
  <div>
    {!petInfo ? <PetCustomizer onStart={startGame} /> : <Dashboard pet={petInfo} />}
    
  </div>
  );
}

export default App
