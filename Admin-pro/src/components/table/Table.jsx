import React, { useEffect } from 'react';
import { deleteContactMail } from 'redux/Actions/CustomerMessages';
import { useState } from 'react';
import { Box, Text, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

export const DataTable = ({ headers, tableData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(tableData);
  }, []);

  const handleDelete = async (value) => {
    console.log(value, 'ID');
    let ids = [];
    ids.push(value);
    // dispatch(deleteContactMail(ids, navigate, alert));
  };

  return (
    <>
      <Box mt="8" overflowX="scroll hidden" h="full">
        {/* <Box as="div" className="relative flex items-center justify-between">
          <Text
            as="div"
            className="text-navy-700 text-xl font-bold dark:text-white"
          >
            Contact Mail Messages
          </Text>
        </Box> */}
        <Table
          variant="simple"
          colorScheme="whiteAlph
        a"
        >
          <Thead>
            <Tr>
              {headers?.map((header, index) => (
                <Th key={header + index} scope="col" px="6" py="3">
                  {header}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {console.log(data, 'DATA')}
            {data?.length > 0 ? (
              <>
                {data?.map((user) => (
                  <Tr
                    key={user?._id}
                    borderBottom="1px solid"
                    borderColor="gray.200"
                    bg="white"
                    _dark={{
                      borderColor: 'gray.700',
                      bg: 'gray.800',
                    }}
                  >
                    <>
                      <Td
                        whiteSpace="nowrap"
                        px="6"
                        py="4"
                        fontWeight="medium"
                        color="gray.900"
                        _dark={{ color: 'white' }}
                      >
                        {user?.fullName}
                      </Td>
                      <Td px="6" py="4">
                        {user?.email}
                      </Td>
                      <Td px="6" py="4">
                        {user?.createdAt?.split('T')[0]}
                      </Td>
                      <Td px="6" py="4">
                        {user?.roles?.admin
                          ? 'Administrator'
                          : user?.roles?.employee
                          ? 'Employee Account'
                          : user?.roles?.content
                          ? 'Content User'
                          : '-'}
                      </Td>
                      <Td px="6" py="4">
                        {/* Add your CardMenu component here */}
                      </Td>
                    </>
                  </Tr>
                ))}
              </>
            ) : (
              <Tr
                borderBottom="1px solid"
                borderColor="gray.200"
                bg="white"
                _dark={{
                  borderColor: 'gray.700',
                  bg: 'gray.800',
                }}
              >
                <>
                  <Td px="6" py="4">
                    No Message Found
                  </Td>
                </>
              </Tr>
            )}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};
