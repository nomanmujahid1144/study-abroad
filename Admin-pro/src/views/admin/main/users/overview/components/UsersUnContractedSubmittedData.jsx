/* eslint-disable */

import {
  Avatar,
  Badge,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Icon,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  Box,
  Grid,
  Card,
  Select,
} from '@chakra-ui/react';
// Custom components
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import * as React from 'react';
// Assets
import { SearchBar } from 'components/navbar/searchBar/SearchBar';

import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';
import SidebarCard from 'components/sidebar/components/SidebarCard';
import Balance from 'views/admin/dashboards/default/components/Balance';
// import SearchTableUsers from ' ./components/SearchTableUsersOverivew';
import SearchUniversityFinder from '../../userData/universityfinder/components/AdminSearchTableUsersOverivew';
import SearchScholarShipTable from '../../userData/scholarships/components/AdminSearchTableUsersOverivew';
import SearchAccomodationTable from '../../userData/accomodation/components/AdminSearchTableUsersOverivew';
import Menu from 'components/menu/MainMenu';
import {
  getAllSingleUserUniversityFinders,
  getAllSingleUserUniversityFindersById,
} from 'redux/Actions/UniversityFinderAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllSingleUserScholarshipsById } from 'redux/Actions/SchlarshipAction';
import { getAllSingleUserAccomodationsById } from 'redux/Actions/AccomodationAction';
import { updateUserToContacted } from 'redux/Actions/UserActions';
import { useAlert } from 'react-alert';
export default function SearchTableOrders(props) {
  const { tableData, isComanyUsers } = props;
  const navigate = useNavigate();
  const textColor = useColorModeValue('navy.700', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const brandColor = useColorModeValue('brand.500', 'brand.400');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [columnFilters, setColumnFilters] = React.useState([]);
  let defaultData = tableData;
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [userId, setUserId] = React.useState('');
  const btnRef = React.useRef();
  let sidebarBackgroundColor = useColorModeValue('white', 'navy.800');
  const dispatch = useDispatch();
  const alert = useAlert();

  const { singleUserUniversityFindersById } = useSelector(
    (state) => state.universityFinderReducer,
  );

  const { singleUserAccomodationsById } = useSelector(
    (state) => state.accomodationReducer,
  );

  const { singleUserScholarshipsById } = useSelector(
    (state) => state.scholarshipReducer,
  );

  React.useEffect(() => {
    if (userId !== '') {
      dispatch(getAllSingleUserUniversityFindersById(userId));
      dispatch(getAllSingleUserScholarshipsById(userId));
      dispatch(getAllSingleUserAccomodationsById(userId));
      onOpen();
    }
  }, [userId]);

  const viewUsersSubmittedForms = (id) => {
    setUserId(id);
    // navigate(`/admin/main/users/edit-user/${id}`);
  };

  const approveContected = (id) => {
    dispatch(updateUserToContacted(id, alert)).then(() => {
      navigate('/admin/main/users/contacted-users-data');
    });
  };

  const columnHelper = createColumnHelper({
    fullName: '',
    email: '',
    phoneNumber: '',
    createdAt: '',
    roles: {
      user: Boolean,
      admin: Boolean,
      employee: Boolean,
      content: Boolean,
    },
    _id: '',
  });
  const columns = [
    columnHelper.accessor('fullName', {
      id: 'fullName',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          USER NAME
        </Text>
      ),
      cell: (info) => (
        <Flex align="center">
          <Text color={textColor} fontSize="md" fontWeight="500">
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),
    columnHelper.accessor('email', {
      id: 'email',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          EMAIL
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    // !isComanyUsers?
    columnHelper.accessor('phoneNumber', {
      id: 'phoneNumber',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Phone Number
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    // : null,
    columnHelper.accessor('createdAt', {
      id: 'createdAt',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Created At
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info.getValue()?.split('T')[0]}
        </Text>
      ),
    }),
    columnHelper.accessor('_id', {
      id: '_id',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          ACTIONS
        </Text>
      ),
      // cell: (info) => (
      //   // <Menu
      //   //   id={info.getValue()}
      //   //   viewUsersSubmittedForms={viewUsersSubmittedForms}
      //   // />
      //   <Text
      //     cursor="pointer"
      //     color={brandColor}
      //     textDecoration="underline"
      //     fontSize="md"
      //     fontWeight="500"
      //     onClick={() => viewUsersSubmittedForms(info.getValue())}
      //     id={info.getValue()}
      //   >
      //     View Details
      //   </Text>
      // ),
      cell: (info) => (
        <Select
          onChange={(selectedOption) =>
            handleMenuSelection(selectedOption, info.getValue())
          }
          placeholder="Select option"
        >
          <option value="viewDetails">View Details</option>
          <option value="contected">Approve Contected</option>
        </Select>
      ),
    }),
  ];

  const handleMenuSelection = (selectedOption, info) => {
    // Implement the logic based on the selected option
    switch (selectedOption.target.value) {
      case 'viewDetails':
        viewUsersSubmittedForms(info);
        break;
      case 'contected':
        approveContected(info);
        break;
      default:
        break;
    }
  };

  const [data, setData] = React.useState(() => [...defaultData]);
  const [{ pageIndex, pageSize }, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 6,
  });

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  );
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      globalFilter,
      pagination,
    },
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });
  const createPages = (count) => {
    let arrPageCount = [];

    for (let i = 1; i <= count; i++) {
      arrPageCount.push(i);
    }

    return arrPageCount;
  };

  React.useEffect(() => {
    if (table.getState().columnFilters[0]?.id === 'fullName') {
      if (table.getState().sorting[0]?.id !== 'fullName') {
        table.setSorting([{ id: 'fullName', desc: false }]);
      }
    }
  }, [table.getState().columnFilters[0]?.id]);

  return (
    <>
      <Flex
        direction="column"
        w="100%"
        overflowX={{ sm: 'scroll', lg: 'hidden' }}
      >
        <Flex
          align={{ sm: 'flex-start', lg: 'flex-start' }}
          justify={{ sm: 'flex-start', lg: 'flex-start' }}
          w="100%"
          px="22px"
          mb="36px"
        >
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={(value) => setGlobalFilter(String(value))}
            className="font-lg border-block border p-2 shadow"
            placeholder="Search..."
          />
        </Flex>
        <Table variant="simple" color="gray.500" mb="24px">
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th
                      pe="10px"
                      borderColor={borderColor}
                      key={header.id}
                      colSpan={header.colSpan}
                    >
                      {header.isPlaceholder ? null : (
                        <Flex
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                          justify="space-between"
                          align="center"
                          fontSize={{ sm: '10px', lg: '12px' }}
                          color="gray.400"
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {{
                            asc: '',
                            desc: '',
                          }[header.column.getIsSorted()] ?? null}
                        </Flex>
                      )}
                    </Th>
                  );
                })}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <Tr px="20px" key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    console.log(cell, 'CELL');
                    return (
                      <Td
                        key={cell.id}
                        fontSize={{ sm: '14px' }}
                        minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                        borderColor={borderColor}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>

        <Flex w="100%" justify="space-between" px="20px" pt="10px" pb="5px">
          {/* SET ROW NUMBER */}
          <Text
            fontSize="sm"
            color="gray.500"
            fontWeight="normal"
            mb={{ sm: '24px', md: '0px' }}
          >
            Showing {pageSize * pageIndex + 1} to{' '}
            {pageSize * (pageIndex + 1) <= tableData.length
              ? pageSize * (pageIndex + 1)
              : tableData.length}{' '}
            of {tableData.length} entries
          </Text>
          {/* PAGINATION BUTTONS */}
          <div className="flex items-center gap-2">
            <Stack direction="row" alignSelf="flex-end" spacing="4px" ms="auto">
              <Button
                variant="no-effects"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                transition="all .5s ease"
                w="40px"
                h="40px"
                borderRadius="50%"
                bg="transparent"
                border="1px solid"
                borderColor={useColorModeValue('gray.200', 'white')}
                display={
                  pageSize === 5
                    ? 'none'
                    : table.getCanPreviousPage()
                    ? 'flex'
                    : 'none'
                }
                _hover={{
                  bg: 'whiteAlpha.100',
                  opacity: '0.7',
                }}
              >
                <Icon as={MdChevronLeft} w="16px" h="16px" color={textColor} />
              </Button>
              {createPages(table.getPageCount()).map((pageNumber, index) => {
                return (
                  <Button
                    variant="no-effects"
                    transition="all .5s ease"
                    onClick={() => table.setPageIndex(pageNumber - 1)}
                    w="40px"
                    h="40px"
                    borderRadius="50%"
                    bg={
                      pageNumber === pageIndex + 1 ? brandColor : 'transparent'
                    }
                    border={
                      pageNumber === pageIndex + 1
                        ? 'none'
                        : '1px solid lightgray'
                    }
                    _hover={
                      pageNumber === pageIndex + 1
                        ? {
                            opacity: '0.7',
                          }
                        : {
                            bg: 'whiteAlpha.100',
                          }
                    }
                    key={index}
                  >
                    <Text
                      fontSize="sm"
                      color={pageNumber === pageIndex + 1 ? '#fff' : textColor}
                    >
                      {pageNumber}
                    </Text>
                  </Button>
                );
              })}
              <Button
                variant="no-effects"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                transition="all .5s ease"
                w="40px"
                h="40px"
                borderRadius="50%"
                bg="transparent"
                border="1px solid"
                borderColor={useColorModeValue('gray.200', 'white')}
                display={
                  pageSize === 5
                    ? 'none'
                    : table.getCanNextPage()
                    ? 'flex'
                    : 'none'
                }
                _hover={{
                  bg: 'whiteAlpha.100',
                  opacity: '0.7',
                }}
              >
                <Icon as={MdChevronRight} w="16px" h="16px" color={textColor} />
              </Button>
            </Stack>
          </div>
        </Flex>
      </Flex>
      <Flex display={{ sm: 'flex', xl: 'none' }} alignItems="center">
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement={document.documentElement.dir === 'rtl' ? 'right' : 'left'}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent
            w="90rem"
            maxW="90rem"
            ms={{
              sm: '16px',
            }}
            my={{
              sm: '16px',
            }}
            borderRadius="16px"
            bg={sidebarBackgroundColor}
          >
            <DrawerCloseButton
              zIndex="3"
              onClick={onClose}
              _focus={{ boxShadow: 'none' }}
              _hover={{ boxShadow: 'none' }}
            />
            <form style={{ overflow: 'auto' }}>
              <DrawerBody maxW="auto" p="16" pb="0">
                <Flex direction="row" justifyContent={'space-between'}></Flex>
                {/* <Flex direction="column" width="stretch">
                  <Balance TextHeading="Total Users" totalCount={25} />
                  <Balance TextHeading="Total Users" totalCount={25} />
                  <Balance TextHeading="Total Users" totalCount={25} />
                </Flex> */}
                <div className="mt-5 grid grid-cols-1 gap-5">
                  <Card px="0px">
                    {singleUserUniversityFindersById.length > 0 ? (
                      <>
                        <Text
                          mt="25px"
                          mb="36px"
                          color={textColor}
                          fontSize="2xl"
                          ms="24px"
                          fontWeight="700"
                        >
                          University Finder Forms
                        </Text>
                        <SearchUniversityFinder
                          tableData={
                            singleUserUniversityFindersById.length > 0
                              ? singleUserUniversityFindersById
                              : []
                          }
                        />
                      </>
                    ) : null}
                    {singleUserScholarshipsById.length > 0 ? (
                      <>
                        <Text
                          mt="25px"
                          mb="36px"
                          color={textColor}
                          fontSize="2xl"
                          ms="24px"
                          fontWeight="700"
                        >
                          Scholarship Forms
                        </Text>
                        <SearchScholarShipTable
                          tableData={
                            singleUserScholarshipsById.length > 0
                              ? singleUserScholarshipsById
                              : []
                          }
                        />
                      </>
                    ) : null}
                    {singleUserAccomodationsById.length > 0 ? (
                      <>
                        <Text
                          mt="25px"
                          mb="36px"
                          color={textColor}
                          fontSize="2xl"
                          ms="24px"
                          fontWeight="700"
                        >
                          Accomodation Forms
                        </Text>
                        <SearchAccomodationTable
                          isEdit={false}
                          tableData={
                            singleUserAccomodationsById.length > 0
                              ? singleUserAccomodationsById
                              : []
                          }
                        />
                      </>
                    ) : null}
                  </Card>
                </div>
              </DrawerBody>
            </form>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
}
// A debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number,
  onChange: (value: string | number) => void,
  debounce?: number,
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <SearchBar
      {...props}
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      h="44px"
      w={{ lg: '390px' }}
      borderRadius="16px"
    />
  );
}
