import './App.css';
import {Route,Routes,BrowserRouter} from "react-router-dom";
import Login from './Pages/Login/Login';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import Pending from './Pages/Expenses/Pending/Pending';


function App() {

  if(false){
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
        <div className='content' style={{backgroundColor:"red",overflowY:"scroll",width:"100%"}}>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/myexpenses" element={<Home/>}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
