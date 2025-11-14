import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard.jsx";
import DailyCollection from "./Components/DailyCollection.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
         <Route path="/daily-collection" element={<DailyCollection />} />
        
        {/* Add your other pages here */}
      </Routes>
    </Router>
  );
}

export default App;
