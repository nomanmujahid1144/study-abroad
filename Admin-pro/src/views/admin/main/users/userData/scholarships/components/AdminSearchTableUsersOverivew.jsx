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
} from '@chakra-ui/react';
// Custom components
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import SelectionField from 'components/fields/SelectionField';
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
import { useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import InputField from 'components/fields/InputField';
import {
  getScholarship,
  updateScholarship,
} from 'redux/Actions/SchlarshipAction';
import { useDispatch } from 'react-redux';
import { IoMenuOutline } from 'react-icons/io5';
import { isValidFileType } from 'constants/helperFunction';
import { baseURL } from 'constants/baseURL';

export default function SearchTableOrders(props) {
  const { tableData } = props;
  const dispatch = useDispatch();
  const alert = useAlert();
  const textColor = useColorModeValue('navy.700', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const brandColor = useColorModeValue('brand.500', 'brand.400');
  let sidebarBackgroundColor = useColorModeValue('white', 'navy.800');
  let menuColor = useColorModeValue('gray.400', 'white');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [documentFile, setDocumentValue] = React.useState(null);
  const [image, setImageValue] = React.useState(null);
  const btnRef = React.useRef();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [columnFilters, setColumnFilters] = React.useState([]);
  let defaultData = tableData;
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [editId, setEditId] = React.useState('');
  const columnHelper = createColumnHelper({
    country: '',
    degree: '',
    field: '',
    intake: '',
    proof: '',
  });

  const [findData, setFindData] = React.useState({
    country: '',
    degree: '',
    field: '',
    intake: '',
  });

  const { scholarship } = useSelector((state) => state.scholarshipReducer);

  React.useEffect(() => {
    if (scholarship) {
      setFindData({
        country: scholarship?.country,
        degree: scholarship?.degree,
        field: scholarship?.field,
        intake: scholarship?.intake,
      });
    }
  }, [scholarship]);

  const columns = [
    columnHelper.accessor('country', {
      id: 'country',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Country
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
    columnHelper.accessor('degree', {
      id: 'degree',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Degree
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info?.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('field', {
      id: 'field',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Field
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('intake', {
      id: 'intake',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Intake
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor(`proof`, {
      id: 'proof',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Proof
        </Text>
      ),
      cell: (info) => {
        const hasDocument = info.row.original.document;
        const hasImage = info.row.original.image;

        if (hasDocument) {
          return (
            <a
              target="_black"
              href={hasDocument ? baseURL + hasDocument?.path : ''}
            >
              <Text color={textColor} fontSize="md" fontWeight="500">
                Click to View Document
              </Text>
            </a>
          );
        } else if (hasImage !== '') {
          return (
            <a target="_black" href={hasImage ? baseURL + hasImage : ''}>
              <Text color={textColor} fontSize="md" fontWeight="500">
                Click to View Image
              </Text>
            </a>
          );
        } else {
          return (
            <Text color={textColor} fontSize="md" fontWeight="500">
              No Proof Yet
            </Text>
          );
        }
      },
    }),
  ];
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
