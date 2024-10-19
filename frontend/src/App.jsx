import {Signin} from "./pages/Signin"
import {Dashboard} from "./pages/Dashboard"
import {Signup} from "./pages/Signup.jsx"
import {SendMoney} from "./pages/SendMoney"
import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {

  return (
    <>
        <BrowserRouter>
        <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/send"element={<SendMoney/>}></Route>
        </Routes>
        
        </BrowserRouter>
    </>
  )
}

export default App
