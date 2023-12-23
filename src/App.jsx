import Navbar from "./components/Navbar"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import User from "./components/User"
import Create from "./components/Create"
import Update from "./components/Update"


function App() {

  return (
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/create" element={<Create />} />
      <Route path="/user/:id" element={<Update />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
