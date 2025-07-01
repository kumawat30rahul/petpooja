import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./components/layouts/dashboard";
import HomePage from "./components/pages/home";

function App() {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
