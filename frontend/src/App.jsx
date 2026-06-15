import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurveyForm from "./components/SurveyForm";
import Admin from "./components/Admin";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <HashRouter>
  <Routes>
    <Route path="/" element={<SurveyForm />} />
    <Route path="/admin" element={<Admin />} />
  </Routes>
</HashRouter>
    </BrowserRouter>
  );
}

export default App;