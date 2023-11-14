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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from '@chakra-ui/react';

// Custom components
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import * as React from 'react';
// Assets
import { SearchBar } from 'components/navbar/searchBar/SearchBar';
import SelectionField from 'components/fields/SelectionField';
import RangeField from 'components/fields/RangeField';
import InputField from 'components/fields/InputField';

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
import { IoMenuOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import {
  getAllSingleUserUniversityFinders,
  getUniversityFinder,
  updateUniversityFounder,
} from 'redux/Actions/UniversityFinderAction';
import { useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { isValidFileType } from 'constants/helperFunction';
import { baseURL } from 'constants/baseURL';

export default function SearchTableOrders(props) {
  const { tableData } = props;
  const dispatch = useDispatch();
  const alert = useAlert();
  const textColor = useColorModeValue('navy.700', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const brandColor = useColorModeValue('brand.500', 'brand.400');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [documentFile, setDocumentValue] = React.useState(null);
  const [image, setImageValue] = React.useState(null);
  let defaultData = tableData;
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [editId, setEditId] = React.useState('');
  const columnHelper = createColumnHelper({
    country: '',
    degree: '',
    field: '',
    education: {
      degree: '',
      marks: 0,
    },
    intake: '',
    englishTest: {
      bands: 0,
      testName: '',
    },
    apptitudeTest: {
      marks: 0,
      testName: '',
    },
    workExperience: {
      isExperience: Boolean,
      yearsOfExperience: 0,
    },
    proof: '',
    _id: '',
  });

  const [findData, setFindData] = React.useState({
    country: '',
    degree: '',
    field: '',
    education: {
      degree: '',
      marks: 0,
    },
    intake: '',
    englishTest: {
      testName: '',
      bands: 0,
    },
    apptitudeTest: {
      testName: '',
      bands: 0,
    },
    workExperience: {
      isExperience: false,
      yearsOfExperience: 0,
    },
  });

  const handleEditData = (id) => {
    setEditId(id);
    onOpen();
  };

  const { universityFinder } = useSelector(
    (state) => state.universityFinderReducer,
  );

  React.useEffect(() => {
    if (universityFinder) {
      setFindData({
        country: universityFinder?.country,
        degree: universityFinder?.degree,
        field: universityFinder?.field,
        education: {
          degree: universityFinder?.education?.degree,
          marks: universityFinder?.education?.marks
            ? universityFinder?.education?.marks
            : 0,
        },
        intake: universityFinder?.intake,
        englishTest: {
          testName: universityFinder?.englishTest?.testName,
          bands: universityFinder?.englishTest?.bands
            ? universityFinder?.englishTest?.bands
            : 0,
        },
        apptitudeTest: {
          testName: universityFinder?.apptitudeTest?.testName,
          marks: universityFinder?.apptitudeTest?.marks
            ? universityFinder?.apptitudeTest?.marks
            : 0,
        },
        workExperience: {
          isExperience: universityFinder?.workExperience?.isExperience
            ? 'Yes'
            : 'None',
          yearsOfExperience: universityFinder?.workExperience?.yearsOfExperience
            ? universityFinder?.workExperience?.yearsOfExperience
            : 0,
        },
      });
    }
  }, [universityFinder]);

  React.useEffect(() => {
    if (editId) {
      dispatch(getUniversityFinder(editId));
    }
  }, [editId, onClose]);

  const onChange = (e) => {
    const { name, value } = e.target;
    // Split the name into an array to handle nested properties
    const nameArray = name.split('.');

    if (nameArray.length === 1) {
      // If it's not a nested property, update directly
      setFindData({ ...findData, [name]: value });
    } else if (nameArray.length === 2) {
      // If it's a nested property, update the nested object
      setFindData({
        ...findData,
        [nameArray[0]]: {
          ...findData[nameArray[0]],
          [nameArray[1]]: value,
        },
      });
    }
  };

  const onRangeChange = (value, id) => {
    // Assuming the name prop for RangeField is in the format "property.subproperty"
    const nameArray = id.split('.');

    if (nameArray.length === 1) {
      // If it's not a nested property, update directly
      setFindData({ ...findData, [id]: value });
    } else if (nameArray.length === 2) {
      // If it's a nested property, update the nested object
      setFindData({
        ...findData,
        [nameArray[0]]: {
          ...findData[nameArray[0]],
          [nameArray[1]]: value,
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    var formData = new FormData();
    if (documentFile) {
      formData.append('document', documentFile);
    } else if (image) {
      formData.append('image', image);
    }

    dispatch(
      updateUniversityFounder(findData, formData, editId, alert, onClose),
    ).then(() => {
      dispatch(getAllSingleUserUniversityFinders());
    });
    setDocumentValue(null);
    setImageValue(null);
  };

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
    columnHelper.accessor('education', {
      id: 'education',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Education Degree / Marks (%)
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info?.getValue()?.degree} /{' '}
          {info?.getValue()?.marks ? info?.getValue()?.marks : 0}
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
    columnHelper.accessor('englishTest', {
      id: 'englishTest',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          English Test / Bands
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info?.getValue()?.testName} /{' '}
          {info?.getValue()?.bands ? info?.getValue()?.bands : 0}
        </Text>
      ),
    }),
    columnHelper.accessor('apptitudeTest', {
      id: 'apptitudeTest',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Apptitude Test / Bands
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info?.getValue()?.testName} /{' '}
          {info?.getValue()?.marks ? info?.getValue()?.marks : 0}
        </Text>
      ),
    }),
    columnHelper.accessor('workExperience', {
      id: 'workExperience',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '10px', lg: '12px' }}
          color="gray.400"
        >
          Work Experience
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="md" fontWeight="500">
          {info?.getValue()?.isExperience
            ? info?.getValue()?.yearsOfExperience + ' Year of Experience'
            : "Don't have any experience"}
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
      cell: (info) => (
        <Text
          cursor="pointer"
          color={brandColor}
          textDecoration="underline"
          fontSize="md"
          fontWeight="500"
          onClick={(e) => handleEditData(info.getValue())}
        >
          Edit
        </Text>
      ),
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

  let sidebarBackgroundColor = useColorModeValue('white', 'navy.800');
  let menuColor = useColorModeValue('gray.400', 'white');
  const btnRef = React.useRef();

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
        <Table variant="simple" color="gray.500" mb="24px" overflowX="scroll">
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

      {/* <Modal
        blockScrollOnMount={false}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}

      <Flex display={{ sm: 'flex', xl: 'none' }} alignItems="center">
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement={document.documentElement.dir === 'rtl' ? 'right' : 'left'}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent
            w="40rem"
            maxW="40rem"
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
            <form onSubmit={handleSubmit} style={{ overflow: 'auto' }}>
              <DrawerBody maxW="auto" p="16" pb="0">
                <SelectionField
                  id="country"
                  label="Where you want to study"
                  options={[
                    'United States',
                    'United Kingdom',
                    'Australia',
                    'China',
                    'Spain',
                    'France',
                    'Germany',
                    'Korea',
                    'Italy',
                  ]}
                  placeholder="Select country"
                  name="country"
                  value={findData?.country}
                  onChange={onChange}
                />
                <SelectionField
                  id="degree"
                  label="What degree do you want to pursue?"
                  options={['Bachelors', 'Masters']}
                  placeholder="Select degree"
                  value={findData?.degree}
                  name="degree"
                  onChange={onChange}
                />
                <SelectionField
                  id="field"
                  label="What is your preferred area of study?"
                  options={[
                    'Business and Management',
                    'Computer Science and IT',
                    'Engineering',
                    'Social Science',
                    'Architecture',
                    'Professional Studies',
                    'Hospitality and Tourism',
                    'Journalism and Media',
                    'Science',
                    'Sports',
                    'Fine Arts',
                    'Law',
                    'Education',
                    'Agriculture and Forestry',
                    'Mathematics',
                    'Medicine',
                  ]}
                  placeholder="Select field"
                  value={findData?.field}
                  name="field"
                  onChange={onChange}
                />

                <Flex direction="row" justifyContent={'space-between'}>
                  <SelectionField
                    id="education.degree"
                    label="What is your current education level?"
                    options={['12th', 'Bachelors', 'Master']}
                    placeholder="Select education level"
                    value={findData?.education?.degree}
                    name="education.degree"
                    onChange={onChange}
                  />
                  <RangeField
                    id="education.marks"
                    label="Enter your marks in %"
                    min={0}
                    max={100}
                    step={1}
                    value={findData?.education?.marks}
                    name="education.marks"
                    onChange={(value) =>
                      onRangeChange(value, 'education.marks')
                    }
                  />
                </Flex>

                <SelectionField
                  id="intake"
                  label="What is your preferred intake"
                  options={[
                    'Jul - Sep 2023',
                    'Oct - Dec 2023',
                    'Jan - Mar 2024',
                    'Apr - Jun 2024',
                    'Jul - Sep 2024',
                    'Not Decided',
                  ]}
                  placeholder="Select youe intake"
                  value={findData?.intake}
                  name="intake"
                  onChange={onChange}
                />

                <Flex direction="row" justifyContent={'space-between'}>
                  <SelectionField
                    id="englishTest.testName"
                    label="Which english test did you take?"
                    options={['TOEFL', 'IELTS', 'PTE', 'None']}
                    placeholder="Select youe intake"
                    value={findData?.englishTest?.testName}
                    name="englishTest.testName"
                    onChange={onChange}
                  />
                  <RangeField
                    id="englishTest.bands"
                    label="select your score"
                    min={1}
                    max={10}
                    step={1}
                    value={findData?.englishTest?.bands}
                    name="englishTest.bands"
                    onChange={(value) =>
                      onRangeChange(value, 'englishTest.bands')
                    }
                  />
                </Flex>
                <Flex direction="row" justifyContent={'space-between'}>
                  <SelectionField
                    id="apptitudeTest.testName"
                    label="Which aptitude test did you take?"
                    options={['SAT', 'ACT', 'None']}
                    placeholder="Select apptitude test"
                    value={findData?.apptitudeTest?.testName}
                    name="apptitudeTest.testName"
                    onChange={onChange}
                  />
                  <RangeField
                    id="apptitudeTest.marks"
                    label="select your marks"
                    min={1}
                    max={100}
                    step={1}
                    value={findData?.apptitudeTest?.marks}
                    name="apptitudeTest.marks"
                    onChange={(value) =>
                      onRangeChange(value, 'apptitudeTest.marks')
                    }
                  />
                </Flex>
                <Flex direction="row" justifyContent={'space-between'}>
                  <SelectionField
                    id="workExperience.isExperience"
                    label="Do you have any work experience?"
                    options={['Yes', 'None']}
                    placeholder="Select experience"
                    value={findData?.workExperience?.isExperience}
                    name="workExperience.isExperience"
                    onChange={onChange}
                  />
                  <RangeField
                    id="workExperience.yearsOfExperience"
                    label="How many years of experience"
                    min={1}
                    max={10}
                    step={1}
                    value={findData?.workExperience?.yearsOfExperience}
                    name="workExperience.yearsOfExperience"
                    onChange={(value) =>
                      onRangeChange(value, 'workExperience.yearsOfExperience')
                    }
                  />
                </Flex>
                <InputField
                  id="document"
                  type="file"
                  label="Upload Related Document (Image / Pdf)"
                  placeholder="Select experience"
                  name="document"
                  accept=".pdf, image/*"
                  onChange={(event) => {
                    const selectedFile = event.target.files[0];
                    if (!isValidFileType(selectedFile)) {
                      alert.show(
                        'Invalid file type. Please select an Image or Pdf.',
                      );
                      return;
                    }
                    if (selectedFile.type.includes('pdf')) {
                      setDocumentValue(event.currentTarget.files[0]);
                    } else if (selectedFile.type.includes('image')) {
                      setImageValue(event.currentTarget.files[0]);
                    }
                  }}
                />
                <Button
                  fontSize="sm"
                  variant="brand"
                  fontWeight="500"
                  w="100%"
                  h="50"
                  mb="24px"
                  type="submit"
                >
                  Update Data
                </Button>
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
