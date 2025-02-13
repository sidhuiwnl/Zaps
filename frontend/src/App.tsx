import LandingPage from "./components/LandingPage"
import {Routes,Route} from "react-router";
import SignInPage from "@/pages/SignInPage.tsx";
import SignupPage from "@/pages/SignUpPage.tsx";
import Dashboard from "@/pages/Dashboard.tsx";
import ZapsEditor from "@/pages/editor/Zaps.tsx";

function App() {



  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<SignInPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path={"/dashboard"} element={<Dashboard/>}/>
        <Route path={"/editor/:id"} element={< ZapsEditor/>} />
      </Routes>
    </div>
  )
}

export default App
