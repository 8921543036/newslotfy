import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SeminarHall from "./components/SeminarHall";
import CreateEvent from "./components/CreateEvent";
import Venue from "./components/Venuee";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-venue" element={<SeminarHall />} />
        <Route path="/CreateEvent" element={<CreateEvent />} />
           <Route path="/Venue" element={<Venue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;