import {
  ButtonGroup,
  IconButton,
  Pagination,
  Stack,
  Table,
} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import { FcCancel } from "react-icons/fc";
import axios from "axios"

const pageSize = 14

type Pedido = {
  id: number;
  user_id: number;
  description: string;
  date: string;
  price: number;
}

const TableSales: React.FC = () => {
  const [page, setPage] = useState(1)
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [_, setLoading] = useState<boolean>(true);
  const [erro, setErro] = useState<string>('');

  useEffect(() => {
    axios.get<Pedido[]>('http://localhost:5000/api/pedidos')
      .then(response => {
        setPedidos(response.data);
      })
      .catch(_ => {
        setErro('Erro ao carregar os dados.');
        console.error(erro);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:5000/api/pedidos/${id}`)
      .then(_ => {
        setPedidos(pedidos.filter(pedido => pedido.id !== id));
      })
      .catch(err => {
        console.error(err);
      })
  }

  const startRange = (page - 1) * pageSize
  const endRange = startRange + pageSize

  const count = pedidos.length
  const visibleItems = pedidos.slice(startRange, endRange)

  return (
    <Stack width="full" gap="5">
      <Table.Root size="sm" variant="outline" striped>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>ID</Table.ColumnHeader>
            <Table.ColumnHeader>USER ID</Table.ColumnHeader>
            <Table.ColumnHeader>DATA</Table.ColumnHeader>
            <Table.ColumnHeader>PRODUTO</Table.ColumnHeader>
            <Table.ColumnHeader>PREÇO</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">DELETAR</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {visibleItems.map((pedido) => (
            <Table.Row key={pedido.id}>
              <Table.Cell>{pedido.id}</Table.Cell>
              <Table.Cell>{pedido.user_id}</Table.Cell>
              <Table.Cell>{pedido.date}</Table.Cell>
              <Table.Cell>{pedido.description}</Table.Cell>
              <Table.Cell>R${pedido.price}</Table.Cell>
              <Table.Cell textAlign="end"><button className="cursor-pointer" onClick={() => {handleDelete(pedido.id)}}><FcCancel /></button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <Pagination.Root count={count} pageSize={pageSize} page={page} onPageChange={(e) => setPage(e.page)}>
        <ButtonGroup variant="ghost" size="sm" wrap="wrap">
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <LuChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton>
              <LuChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Stack>
  )
}

export default TableSales