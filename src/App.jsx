import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1> Meine Vite-React-App im Docker Container</h1>
      <p>Dies ist mein Versuch eines Beispielprojekt mit Multi-Stage Build.</p>
    </div>
  );
}

export default App;
