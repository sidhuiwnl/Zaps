import LandingPage from "./components/LandingPage"
import {Routes,Route} from "react-router";
import SignInPage from "@/pages/SignInPage.tsx";
import SignupPage from "@/pages/SignUpPage.tsx";
function App() {

  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<SignInPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
    </div>
  )
}

export default App
