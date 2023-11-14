import React, { useEffect, useState } from 'react';

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  SimpleGrid,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

// Custom components
import Blog from 'components/card/Blog';
import { SearchBar } from 'views/admin/nfts/profile/components/Search';
import { useDispatch } from 'react-redux';
import { getAllAdminBlogs, getBlogs } from 'redux/Actions/BlogsActions';
import { useSelector } from 'react-redux';
import { baseURL } from 'constants/baseURL';
export default function Collection() {
  const dispatch = useDispatch();

  const textColor = useColorModeValue('secondaryGray.900', 'white');

  // const { singleAdminBlogs } = useSelector((state) => state.blogReducer);

  // useEffect(() => {
  //   dispatch(getAllAdminBlogs());
  // }, []);

  const { blogs } = useSelector((state) => state.blogReducer);

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  // Chakra Color Mode
  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      <Tabs variant="soft-rounded" colorScheme="brandTabs">
        {/* <TabList
          mx={{ base: '10px', lg: '30px' }}
          overflowX={{ sm: 'scroll', lg: 'unset' }}
        >
          <Flex justify={{ base: 'start', md: 'center' }} w="100%">
            <Tab
              pb="0px"
              flexDirection="column"
              onClick={function () {
                setTabState('collected');
              }}
              me="50px"
              bg="unset"
              _selected={{
                bg: 'none',
              }}
              _focus={{ border: 'none' }}
              minW="max-content"
            >
              <Flex align="center">
                <Icon
                  color={textColor}
                  as={MdOutlineCollections}
                  w="20px"
                  h="20px"
                  me="8px"
                />
                <Text
                  color={textColor}
                  fontSize="lg"
                  fontWeight="500"
                  me="12px"
                >
                  Collected
                </Text>
                <Text color="secondaryGray.600" fontSize="md" fontWeight="400">
                  0
                </Text>
              </Flex>
              <Box
                height="4px"
                w="100%"
                transition="0.1s linear"
                bg={tabState === 'collected' ? 'brand.500' : 'transparent'}
                mt="15px"
                borderRadius="30px"
              />
            </Tab>
            <Tab
              onClick={function () {
                setTabState('created');
              }}
              pb="0px"
              me="50px"
              bg="unset"
              _selected={{
                bg: 'none',
              }}
              _focus={{ border: 'none' }}
              minW="max-content"
              flexDirection="column"
            >
              <Flex align="center">
                <Icon
                  color={textColor}
                  as={MdFormatPaint}
                  w="20px"
                  h="20px"
                  me="8px"
                />
                <Text
                  color={textColor}
                  fontSize="lg"
                  fontWeight="500"
                  me="12px"
                >
                  Created
                </Text>
                <Text color="secondaryGray.600" fontSize="md" fontWeight="400">
                  4
                </Text>
              </Flex>
              <Box
                height="4px"
                w="100%"
                transition="0.1s linear"
                bg={tabState === 'created' ? 'brand.500' : 'transparent'}
                mt="15px"
                borderRadius="30px"
              />
            </Tab>
            <Tab
              pb="0px"
              flexDirection="column"
              onClick={function () {
                setTabState('favorited');
              }}
              me="50px"
              bg="unset"
              _selected={{
                bg: 'none',
              }}
              _focus={{ border: 'none' }}
              minW="max-content"
            >
              <Flex align="center">
                <Icon
                  color={textColor}
                  as={IoMdHeartEmpty}
                  w="20px"
                  h="20px"
                  me="8px"
                />
                <Text
                  color={textColor}
                  fontSize="lg"
                  fontWeight="500"
                  me="12px"
                >
                  Favorited
                </Text>
                <Text color="secondaryGray.600" fontSize="md" fontWeight="400">
                  12
                </Text>
              </Flex>
              <Box
                height="4px"
                w="100%"
                transition="0.1s linear"
                bg={tabState === 'favorited' ? 'brand.500' : 'transparent'}
                mt="15px"
                borderRadius="30px"
              />
            </Tab>
            <Tab
              pb="0px"
              flexDirection="column"
              onClick={function () {
                setTabState('activity');
              }}
              me="50px"
              bg="unset"
              _selected={{
                bg: 'none',
              }}
              _focus={{ border: 'none' }}
              minW="max-content"
            >
              <Flex align="center">
                <Icon
                  color={textColor}
                  as={MdAccessTime}
                  w="20px"
                  h="20px"
                  me="8px"
                />
                <Text
                  color={textColor}
                  fontSize="lg"
                  fontWeight="500"
                  me="12px"
                >
                  Activity
                </Text>
              </Flex>
              <Box
                height="4px"
                w="100%"
                transition="0.1s linear"
                bg={tabState === 'activity' ? 'brand.500' : 'transparent'}
                mt="15px"
                borderRadius="30px"
              />
            </Tab>
            <Tab
              pb="0px"
              flexDirection="column"
              onClick={function () {
                setTabState('offers');
              }}
              me="50px"
              bg="unset"
              _selected={{
                bg: 'none',
              }}
              _focus={{ border: 'none' }}
              minW="max-content"
            >
              <Flex align="center">
                <Icon
                  color={textColor}
                  as={MdOutlineLocalOffer}
                  w="20px"
                  h="20px"
                  me="8px"
                />
                <Text
                  color={textColor}
                  fontSize="lg"
                  fontWeight="500"
                  me="12px"
                >
                  Offers
                </Text>
                <Text color="secondaryGray.600" fontSize="md" fontWeight="400">
                  7
                </Text>
              </Flex>
              <Box
                height="4px"
                w="100%"
                transition="0.1s linear"
                bg={tabState === 'offers' ? 'brand.500' : 'transparent'}
                mt="15px"
                borderRadius="30px"
              />
            </Tab>
          </Flex>
        </TabList> */}
        {/* <HSeparator mb="30px" bg={paleGray} mt="0px" /> */}
        <Flex w="100%">
          <SearchBar />
          {/* <Select
            fontSize="sm"
            id="edit_product"
            variant="main"
            h="44px"
            maxH="44px"
            me="20px"
            defaultValue="single"
          >
            <option value="single">Single Items</option>
            <option value="multiple">Multiple Items</option>
          </Select>
          <Select
            fontSize="sm"
            variant="main"
            h="44px"
            maxH="44px"
            me="20px"
            defaultValue="low_to_high"
          >
            <option value="low_to_high">Low to high</option>
            <option value="high_to_low">High to low</option>
          </Select>
          <Button
            me="20px"
            bg={buttonBg}
            border="1px solid"
            color="secondaryGray.600"
            borderColor={useColorModeValue(
              'secondaryGray.100',
              'whiteAlpha.100',
            )}
            borderRadius="16px"
            _placeholder={{ color: 'secondaryGray.600' }}
            _hover={hoverButton}
            _active={activeButton}
            _focus={activeButton}
          >
            <Icon color={textColor} as={MdDashboard} />
          </Button>
          <Button
            bg={buttonBg}
            border="1px solid"
            color="secondaryGray.600"
            borderColor={useColorModeValue(
              'secondaryGray.100',
              'whiteAlpha.100',
            )}
            borderRadius="16px"
            _placeholder={{ color: 'secondaryGray.600' }}
            _hover={hoverButton}
            _active={activeButton}
            _focus={activeButton}
          >
            <Icon color={textColor} as={MdApps} />
          </Button> */}
        </Flex>
        <Text
          mt="25px"
          mb="36px"
          color={textColor}
          fontSize="2xl"
          ms="24px"
          fontWeight="700"
        >
          {blogs.length} Results
        </Text>
        <TabPanels>
          <TabPanel px="0px">
            <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="20px">
              {blogs?.map((blog) => (
                <Blog
                  name={blog?.blogHeading}
                  author="By Admin"
                  image={baseURL + blog?.blogImage}
                  data={blog?.data}
                  download={`/admin/main/blog/${blog?._id}`}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
