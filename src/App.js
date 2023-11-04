import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Fac_login from './Components/Login/Fac_login';
import For_pass from './Components/Login/For_pass';
import Nav from './Components/Nav';

function App() {
  return (
    <>
      {/* <Nav /> */}
      <Routes>
        <Route path ='/Fac_login' element={<Fac_login/>}></Route>
        <Route path ='/For_pass' element={<For_pass/>}></Route>
      </Routes>
      
      
    </>

  );
}

export default App;
