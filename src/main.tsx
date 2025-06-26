import './index.css'
import { Provider } from "@/components/ui/provider"
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import { AuthProvider } from "./context/AuthContext.tsx"
import App from "./App.tsx"
import Pedidos from "./pages/Pedidos.tsx"
import CadastroPedidos from "./pages/CadastroPedidos.tsx"
import AuthPage from "./pages/AuthPage.tsx"

createRoot(document.getElementById('root')!).render(
  <Provider>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/lista-de-pedidos" element={<Pedidos />} />
          <Route path="/novo-pedido" element={<CadastroPedidos />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </Provider>
)
