import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Field, Image, Input, InputGroup, Text } from '@chakra-ui/react';
import { RiArrowRightLine } from 'react-icons/ri';
import { Toaster, toaster } from '@/components/ui/toaster';
import { ColorModeButton } from '@/components/ui/color-mode';

type Pedido = {
  description: string;
  price: number;
};

const CadastroPedidos: React.FC = () => {
  const [pedido, setPedido] = useState<Pedido>({ description: '', price: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPedido({
      ...pedido,
      [e.target.name]: e.target.name === 'price' ? Number(e.target.value) : e.target.value
    })};

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    try {
      if(pedido.price <= 0) {
        toaster.create({
          description: 'O preço deve ser maior que zero.',
          type: "error",
          duration: 3000
        })
        return;
      }
      await axios.post('http://localhost:5000/api/pedidos', pedido);
      toaster.create({
        description: 'Pedido cadastrado com sucesso!',
        type: "success",
        duration: 10000
      })
      setPedido({ description: '', price: 0 }); // Limpa o formulário
    } catch (error) {
      toaster.create({
        description: 'Erro ao cadastrar o pedido.',
        type: "error",
        duration: 10000
      })
      console.error(error);
    }
  };

  return (
    <Box
      bgGradient="linear(to-r, #FFC30 rgb(255, 255, 255)33)"
      className="w-full h-screen flex flex-col align-center justify-center"
    >
      <Box
        width="100%"
        marginBottom="30px"
        className="flex justify-center"
      >
        <Image width="100px" height="30px" className="cursor-pointer " src="./logo.svg" />
        <ColorModeButton
          position="absolute"
          top="0"
          right="0"
          className="w-fit"
        />
      </Box>
      <Box
        as="form"
        border="2px solid"
        borderColor="#FFC300"
        borderRadius="30px"
        className="w-[50%] h-[50%] self-center flex flex-col items-center justify-around bg-transparent" 
        onSubmit={handleSubmit}
      >
        <Text 
          mb="30px"
          textStyle="xl" 
          className="tracking-widest self-center"
        >
          CADASTRO DE PEDIDOS
        </Text>
        <Field.Root width="50%">
          <Field.Label>Nome do Produto</Field.Label>
          <Input 
            css={{ "--focus-color": "#FFC300" }}
            size="lg" 
            name="description" 
            value={pedido.description} 
            onChange={handleChange} 
            placeholder="Ex.: Ômega 3 120caps"
            required
          />
        </Field.Root>
        <Field.Root width="50%">
          <Field.Label>Preço</Field.Label>
          <InputGroup startElement="R$" endElement="BRL">
            <Input 
              css={{ "--focus-color": "#FFC300" }}
              size="lg" 
              name="price" 
              onChange={handleChange} 
              value={pedido.price} 
              placeholder="0.00"
            />
          </InputGroup>
        </Field.Root>
        <Button 
          variant="outline"
          type="submit"
        >
          Cadastrar <RiArrowRightLine />
        </Button>
      </Box>
      <Toaster />
    </Box>
  );
};

export default CadastroPedidos;
