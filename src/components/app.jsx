import { Route, Routes } from "react-router-dom";
import Detail from "./pages/detail/detail";
import Home from "./pages/home/home";
import { useState } from "react";

function App() {
  const [textFilter] = useState("");
  
  return (
    <Routes>
      <Route path="/" element={<Home/>} textFilter={textFilter}/> 
      <Route path="/character/:id" element={<Detail/>} />
    </Routes>
  );
}
export default App;
