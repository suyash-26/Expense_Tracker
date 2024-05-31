import './App.css';
import {Route,Routes,BrowserRouter} from "react-router-dom";
import Login from './Pages/Login/Login';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import Aprroval from './Pages/Approvals/Aprroval';
import { AuthContext, AuthContextProvider } from './contexts/AuthContext';
import { useContext } from 'react';


function App() {

  const {user} = useContext(AuthContext);

  if(!user){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
  return (
      <div className="App">
        <BrowserRouter>
        <div style={{display:'flex',height:"100vh",position:"absolute",width:"100vw"}}>
          <Sidebar/>
          <div className='content' style={{overflowY:"scroll",width:"100%"}}>
            <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path = "/*" element={<Home/>}/>
              <Route path = "/myexpenses/*" element={<Home/>}/>
              <Route path = "/myapprovals/*" element={<Aprroval/>}/>
            </Routes>
          </div>
        </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
