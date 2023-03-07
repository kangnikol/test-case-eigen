import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import NewsList from "./components/NewsList"

function App() {
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <NewsList />
    </BrowserRouter>
  )
}

export default App
