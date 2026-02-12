import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SeminarHall from "./components/SeminarHall";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-venue" element={<SeminarHall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;