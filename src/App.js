import './App.css';
import Header from './components//Header/Header';
import Home from './components/Home/Home';
import CheckOut from './components/CheckOut/CheckOut';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes >
            <Route path="/" element={<><Header/><Home/></>} />
            <Route path="/checkout" element={<><Header/><CheckOut/></>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
