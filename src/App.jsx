import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CryptoDetailPage from "./pages/CryptoDetailPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="crypto/detail/:id" element={<CryptoDetailPage />} />
    </Routes>
  )
}

export default App
