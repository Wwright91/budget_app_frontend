import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

import NavBar from "../src/Components/NavBar";

const API = import.meta.env.VITE_API_URL;

function App() {
  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:id" element={<Show />} />
            <Route path="/transactions/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
