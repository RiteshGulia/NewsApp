import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {News} from './Components/News';
function App() {
  return (
     <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;
