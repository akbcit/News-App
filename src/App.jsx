import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./pages/PageHome";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" element={PageHome}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
