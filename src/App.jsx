import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./pages/PageHome";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
