import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Location from "./pages/LocationList/LocationList";
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
            <Route path='/LocationList/:id' element={<Location/>}/>
            
            <Route path='*' element={<Error/>}/>

          </Route>

          
        </Routes>
  
    </div>
  );
}

export default App;
