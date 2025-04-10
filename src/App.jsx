import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from "./component/Admin/Login";
import AddCompany from "./component/CompanyDetails/AddCompany";
import Register from "./component/Admin/Register";
import { useContext } from "react";
import { MyContext } from "./GlobalState/MyProvider";
import { useNavigate } from "react-router-dom";



function App() {
  // const navigate=useNavigate();

  return <>
 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Register />} />
      <Route path="/addCompany" element={<AddCompany />} />
    </Routes>
    </BrowserRouter>
    </>;
}

export default App;
