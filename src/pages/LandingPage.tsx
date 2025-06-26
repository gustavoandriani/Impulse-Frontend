import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Icon,
  Container,
  SimpleGrid,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@chakra-ui/react";
import { FaUsers, FaChartBar, FaClock, FaEye, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/auth')
  }
  return (
    <Box bg="gray.900" color="white">
      {/* Hero Section */}
      <Box position="relative" bg="gray.900" minH="100vh">
        <Flex justify="space-between" p={5} align="center">
          <Image width="100px" height="30px" className="cursor-pointer" src="./logo.svg" onClick={() => navigate('/')}/>
          <HStack gap={5} margin="5" display={{ base: "none", md: "flex" }}>
            <Text><a href="#recursos">Recursos</a></Text>
            <Text><a href="#clientes">Clientes</a></Text>
            <Text>Contato</Text>
            <Button colorScheme="yellow" onClick={handleClick}>Começar agora</Button>
          </HStack>
        </Flex>

        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" px={10} py={20}>
          <VStack align="start" margin={6} maxW="lg">
            <Heading fontSize="4xl">Impulse: Controle Total das Suas Vendas</Heading>
            <Text fontSize="lg">
              Cansado de perder o controle das suas vendas? Com o Impulse, você centraliza, organiza e impulsiona seu processo comercial de ponta a ponta. Diga adeus às planilhas desorganizadas e olá para a eficiência que você sempre quis!
            </Text>
            <Button colorScheme="yellow" size="lg" onClick={handleClick}>QUERO EXPERIMENTAR O IMPULSE GRÁTIS!</Button>
          </VStack>
          <Image
            src="https://picsum.photos/800/400.webp"
            alt="Demonstração do Impulse"
            borderRadius="lg"
            mt={{ base: 10, md: 0 }}
          />
        </Flex>
      </Box>

      {/* Por que escolher */}
      <Box id="recursos" bg="white" color="gray.900" py={20}>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 4 }} margin={10}>
            <Box textAlign="center">
              <Icon as={FaClock} w={10} h={10} color="yellow.400" mb={4} />
              <Heading size="md">Otimize seu Tempo</Heading>
              <Text>Automatize tarefas repetitivas e ganhe tempo valioso para sua equipe.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaEye} w={10} h={10} color="yellow.400" mb={4} />
              <Heading size="md">Visão Completa</Heading>
              <Text>Tenha uma visão 360º de todo seu funil de vendas em tempo real.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaUsers} w={10} h={10} color="yellow.400" mb={4} />
              <Heading size="md">Equipe em Sincronia</Heading>
              <Text>Todos na mesma página com informações centralizadas e compartilhadas.</Text>
            </Box>
            <Box textAlign="center">
              <Icon as={FaChartBar} w={10} h={10} color="yellow.400" mb={4} />
              <Heading size="md">Análises Inteligentes</Heading>
              <Text>Relatórios detalhados para decisões estratégicas baseadas em dados.</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Recursos */}
      <Box py={20} bg="gray.50" color="gray.900">
        <Container maxW="7xl">
          <Heading textAlign="center" mb={10}>Recursos que Farão a Diferença</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} margin={10}>
            {[
              "Gestão de Clientes (CRM Integrado)",
              "Funil de Vendas Personalizável",
              "Automação de Follow-ups",
              "Relatórios e Dashboards Dinâmicos",
              "Integrações Essenciais",
              "Acesso Mobile",
            ].map((recurso, index) => (
              <HStack key={index} align="start">
                <Icon as={FaCheck} color="yellow.400" w={6} h={6} />
                <Text>{recurso}</Text>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Testemunhos */}
      <Box id="clientes" py={20} bg="gray.900" color="white">
        <Container maxW="7xl">
          <Heading textAlign="center" mb={10}>Quem já está impulsionando suas vendas com o Impulse?</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} margin={10} gap={2}>
            <Box textAlign="center" p={5} bg="gray.800" borderRadius="lg">
                <Avatar.Root size="xl" mb={4}>
                    <AvatarFallback name="Ana Paula"/>
                    <AvatarImage src="https://picsum.photos/150" />
                </Avatar.Root>
                <Text fontWeight="bold">Ana Paula</Text>
                <Text fontSize="sm">Gerente Comercial da Loja X</Text>
                <Text mt={4} fontStyle="italic">"O Impulse organizou todo nosso processo comercial de forma prática e eficiente."</Text>
            </Box>
            <Box textAlign="center" p={5} bg="gray.800" borderRadius="lg">
                <Avatar.Root size="xl" mb={4}>
                    <AvatarFallback name="João Carlos"/>
                    <AvatarImage src="https://picsum.photos/150" />
                </Avatar.Root> 
                <Text fontWeight="bold">João Carlos</Text>
                <Text fontSize="sm">Diretor de Vendas da Empresa Y</Text>
                <Text mt={4} fontStyle="italic">"Finalmente temos relatórios precisos e conseguimos tomar melhores decisões."</Text>
            </Box>
            <Box textAlign="center" p={5} bg="gray.800" borderRadius="lg">
                <Avatar.Root size="xl" mb={4}>
                    <AvatarFallback name="Mariana Souza"/>
                    <AvatarImage src="https://picsum.photos/150" />
                </Avatar.Root> 
                <Text fontWeight="bold">Mariana Souza</Text>
                <Text fontSize="sm">Coordenadora Comercial</Text>
                <Text mt={4} fontStyle="italic">"Nossa equipe trabalha muito mais alinhada depois do Impulse."</Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA final */}
      <Box pt={0} pb={20} bgGradient="linear(to-r, yellow.400, yellow.300)" color="white">
        <Container maxW="7xl" textAlign="center">
          <Heading mb={6}>Pronto para Transformar suas Vendas?</Heading>
          <Text mb={8} fontSize="lg">
            Experimente o Impulse gratuitamente por 7 dias e descubra como é fácil ter total controle do seu processo comercial. Sem compromisso, sem cartão de crédito!
          </Text>
          <Button size="lg" colorScheme="gray" color="yellow.400" bg="gray.900" border="1px solid" borderColor="yellow.500" _hover={{ bg: "gray.700" }} onClick={handleClick}>
            QUERO EXPERIMENTAR O IMPULSE GRÁTIS!
          </Button>
        </Container>
      </Box>

      {/* Rodapé */}
      <Box py={10} bg="gray.800" color="gray.300">
        <Container maxW="7xl">
          <Flex justify="space-between" wrap="wrap">
            <Text fontWeight="bold">Impulse: Seu sucesso de vendas começa aqui.</Text>
            <HStack margin={5}>
              <Text>FALE COM NOSSOS ESPECIALISTAS</Text>
              <Text>VER PLANOS E PREÇOS</Text>
            </HStack>
          </Flex>
          <Text fontSize="sm" mt={5}>© 2025 Impulse. Todos os direitos reservados.</Text>
        </Container>
      </Box>
    </Box>
  );
}