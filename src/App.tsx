import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import NewsList from "./components/NewsList"
import Indonesia from "./components/Indonesia"
import UnitedStates from "./components/UnitedStates"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<NewsList />} />
        <Route path="/id" element={<Indonesia />} />
        <Route path="/us" element={<UnitedStates />} />
      </Routes>
    </Router>
  )
}

export default App
