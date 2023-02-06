import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Productos from './Pages/Productos';
import Usuarios from './Pages/Usuarios';
import Facturas from './Pages/Facturas';
import Navegador from "./Components/Navegador";
function App() {
  return (
    <Router>
        <Navegador/>
          <Routes> 
              <Route path='/' element={<Home/>}/>
              <Route path='/Productos'  element={<Productos/>}/>
              <Route path='/Usuarios'  element={<Usuarios/>}/>                 
              <Route path='/Facturas'  element={<Facturas/>}/>  
          </Routes> 
      </Router>
  );
}

export default App;
