import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
        >
          <Flex
            mb="8"
            justify="space-between"
            align="center"
          >
            {/* heading trata-se de um h2 */}
            <Heading size="lg" fontWeight="normal" >Usuários</Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table
            colorScheme="whiteAlpha"
          >
            <Thead>
              <Tr>
                <Th px={["2", "2" ,"6"]} color="gray.300" width="8" >
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={["2", "2" ,"6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeigth="bold" >Jamesson Leandro</Text>
                    <Text fontSize="small" color="gray.300" >jamesson1233@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>18 de setembro, 1998</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="green"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={["2", "2" ,"6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeigth="bold" >Jamesson Leandro</Text>
                    <Text fontSize="small" color="gray.300" >jamesson1233@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>18 de setembro, 1998</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="green"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px={["2", "2" ,"6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeigth="bold" >Jamesson Leandro</Text>
                    <Text fontSize="small" color="gray.300" >jamesson1233@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>18 de setembro, 1998</Td>}
                <Td>
                  <Box>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="green"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>

                    <Button
                      as="a"
                      size="sm"
                      mt="4"
                      fontSize="sm"
                      colorScheme="blue"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Painel
                    </Button>
                  </Box>
                </Td>
              </Tr>
            </Tbody>

          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}