import "./App.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from "./component/Admin/Login";
import AddCompany from "./component/CompanyDetails/AddCompany";


function App() {
  return <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/addCompany" element={<AddCompany />} />
    </Routes>
    </BrowserRouter>
    </>;
}

export default App;
