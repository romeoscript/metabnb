import { Routes, Route} from "react-router-dom";
import { Home,Place } from "./pages";
import './App.css';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="place" element={<Place />} />
      </Routes>
    </div>
  );
}

export default App;
