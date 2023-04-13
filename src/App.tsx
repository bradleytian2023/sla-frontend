
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import AddPolicy from './pages/AddPolicy';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-policy" element={<AddPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
