import { Route, Routes } from "react-router"
import LandingPage from "./pages/LandingPage"
import { useAuth } from "./context/AuthContext"
import Pedidos from "./pages/Pedidos"

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <Routes>
        <Route path="/">
        {isAuthenticated ? 
          (<Route index element={<Pedidos />} />)
          :
          (<Route index element={<LandingPage />} />)
        }
        </Route>
      </Routes>
    </>
  )
}

export default App
