import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Location from "./components/Location/LocationList";
import Apropos from './components/Apropos/Apropos';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/LocationList/:id' element={<Location/>}/>
        <Route path='/Apropos' element={<Apropos/>}/>
      </Routes>
    </div>
  );
}

export default App;
