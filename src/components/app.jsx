import { Route, Routes } from "react-router-dom";
import Detail from "./pages/detail/detail";
import Home from "./pages/home/home";
import { useState } from "react";

function App() {
  const [textFilter, setTextFilter] = useState("");

  const handleNameFilterChange = (e) => {
    setTextFilter(e.target.value.toLowerCase());
  };
  return (
    <Routes>
      <Route path="/" element={<Home textFilter={textFilter} handleNameFilterChange={handleNameFilterChange}/>}/> 
      <Route path="/character/:id" element={<Detail/>} />
    </Routes>
  );
}
export default App;
