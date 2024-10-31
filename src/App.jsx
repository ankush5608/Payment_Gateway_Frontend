import {BrowserRouter,Router,Route, Routes} from "react-router-dom"
import {Signup} from "./component/Signup"
import { Send } from "./component/Send";
import 'tailwindcss/tailwind.css';
import { Dashboard } from "./component/Dashboard";
import { Logout } from "./component/Logout";
import { Signin } from "./component/Signin";
import { Me } from "./component/Me";
import { Transactiondone } from "./component/Transactiondone";
function App() {

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Me/>}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
          <Route  path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/send" element={<Send/>}></Route>
          <Route path="/Dashboard" element={<Dashboard/>}></Route>
          <Route path="/TransactionCompleted" element={<Transactiondone/>}/>
        </Routes> 
        </BrowserRouter>
       
    </>

       
  )
}

export default App
