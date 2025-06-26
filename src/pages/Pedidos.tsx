import { Box, Image, Text } from "@chakra-ui/react"
import TableSales from "../components/TableSales"
import { ColorModeButton } from "../components/ui/color-mode"
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router";

function Pedidos() {
  const navigate = useNavigate();
  const { user } = useAuth();
  return (
    <Box className="flex flex-col h-fit w-full">
      <Box px="15px" pt="15px" className="flex flex-row justify-between">
        <Image width="100px" height="30px" className="cursor-pointer" src="./logo.svg" onClick={() => navigate('/')}/>
        <ColorModeButton className="w-fit self-center" />
      </Box>
      <Text ml={5} textStyle="xl" className="tracking-widest self-start">BEM-VINDO, {user?.name.toUpperCase()}</Text>
      <Text textStyle="xl" className="tracking-widest self-center">LISTA DE PEDIDOS</Text>
      <Box px="20px" className="w-full">
        <TableSales />
      </Box>
    </Box>
  )
}

export default Pedidos
