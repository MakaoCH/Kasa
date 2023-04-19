import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Location from "./pages/LocationList";
import Apropos from './pages/Apropos';
import Error from './pages/Error';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
     
        <Routes>
          <Route element={<Layout/>}>
           
            <Route path='/' element={<Home/>}/>
            <Route path='/Apropos' element={<Apropos/>}/>
            <Route path='/LocationList/:id' element={<Location/>}/>

            <Route path='*' element={<Error/>}/>

          </Route>

          
        </Routes>
  
    </div>
  );
}

export default App;
