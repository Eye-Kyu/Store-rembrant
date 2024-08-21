
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from "./PAges/HomePage";
import POSPage from "./PAges/POSPage";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/pos" element={<POSPage />} />
    </Routes>
   </Router>
  );
}


export default App;
