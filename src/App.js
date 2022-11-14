import { Routes, Route} from "react-router-dom";
import { Home,Place } from "./pages";
import React,{useState} from "react";
import './App.css';
import NavBar from "./components/NavBar";

function App() {
  const [modal, setModal] = useState(false)
  const toggleModal = ()=>{
    setModal(!modal)
  }
  return (
    <div className="App">
      <NavBar  onclick={toggleModal} modal={modal}/>
      <Routes>
        <Route path="/" element={<Home ontlick={toggleModal} modal={modal}/>} />
        <Route path="place" element={<Place />} />
      </Routes>
    </div>
  );
}

export default App;
