import { BrowserRouter, Routes, Route } from "react-router-dom";
import SurveyForm from "./components/SurveyForm";
import Admin from "./components/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SurveyForm />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;