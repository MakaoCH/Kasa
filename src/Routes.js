import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Accommodation from "./pages/AccommodationList/AccommodationList";
import About from './pages/About/About';
import Error from './pages/Error/Error';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <div>
     
        <Routes>
          <Route element={<Layout/>}>
           
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/AccommodationList/:id' element={<Accommodation/>}/>
            
            <Route path='*' element={<Error/>}/>

          </Route>

          
        </Routes>
  
    </div>
  );
}

export default App;
