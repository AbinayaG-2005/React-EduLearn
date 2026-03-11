import { BrowserRouter, Routes, Route } from "react-router-dom"
import Hero from "./pages/Hero"
import Register from "./pages/Register"
import Login from "./pages/Login"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Hero />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App