import { Routes, Route } from "react-router-dom"
import App from "./App"
import Contaescola from "./elias/Contaescola"


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contaescola" element={<Contaescola />} />
  

     
      </Routes>
    </div>
  )
}

export default AppRoutes