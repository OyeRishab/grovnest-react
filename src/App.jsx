import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<div>About</div>} />
          </Route>
          <Route path="dashboard" element={<Dashboard />}>
            <Route path=":user" element={<div>User</div>} />
          </Route>

          <Route path="*" element={<div>Error</div>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
