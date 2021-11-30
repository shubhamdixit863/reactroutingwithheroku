import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';


function App() {
  return (
    <div className="App">



          <BrowserRouter>
          <Header/>
      <Routes>
             <Route  path="/login" element={<Login />} />
      <Route  path="/home" element={<Home />} />

      <Route path="/about" element={<About />} />
      </Routes>
      
      </BrowserRouter>
 



   
  
    </div>
  );
}

export default App;
