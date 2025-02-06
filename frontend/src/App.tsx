import LandingPage from "./components/LandingPage"
import {Routes,Route} from "react-router";
function App() {

  return (
    <div className="overflow-x-hidden">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </div>
  )
}

export default App
