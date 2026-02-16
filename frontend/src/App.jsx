// where all the components come together and arguments are passed using info from fastapi
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard.jsx'
import PetCustomizer from './components/PetCustomizer.jsx';

function App() {
  return(
  <div>
    <PetCustomizer />
  </div>
  );
}

export default App
