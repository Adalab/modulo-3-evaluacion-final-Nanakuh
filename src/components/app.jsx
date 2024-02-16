import { Route, Routes } from "react-router-dom";
import Detail from "./pages/detail/detail";
import Home from "./pages/home/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/character/:id" element={<Detail/>} />
    </Routes>
  );
}
export default App;
