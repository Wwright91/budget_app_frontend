import { useEffect, useState } from 'react'
import './App.css'

const API = import.meta.env.VITE_API_URL;

function App() {

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div>
    </div>
  )
}

export default App
