import { BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Adminpage from "./components/adminpage";
import Adminstartup from "./components/adminstartup";
import Adminlogs from "./components/adminlogs";
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path = "/adminstartup" element={<Adminstartup />}/>
        <Route path ='/adminlogs' element={<Adminlogs/>}></Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
