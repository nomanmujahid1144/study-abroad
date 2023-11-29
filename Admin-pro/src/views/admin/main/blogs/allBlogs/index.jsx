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
import { getBlogs, deleteBlog } from 'redux/Actions/BlogsActions';
import { useSelector } from 'react-redux';
import { baseURL } from 'constants/baseURL';
import { useAlert } from 'react-alert';
export default function Collection() {
  const dispatch = useDispatch();
  const alert = useAlert();

  const textColor = useColorModeValue('secondaryGray.900', 'white');

  const [deleteBlogId, setDeleteBlogId] = useState('');
  const [refresh, setRefresh] = useState(false);
  const { blogs } = useSelector((state) => state.blogReducer);

  useEffect(() => {
    dispatch(getBlogs());
  }, [refresh]);

  const deleteBlogFun = (id) => {
    setDeleteBlogId(id);
  };

  useEffect(() => {
    if (deleteBlogId !== '') {
      dispatch(deleteBlog(deleteBlogId, alert, refresh, setRefresh));
    }
  }, [deleteBlogId]);

  // Chakra Color Mode
  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      <Tabs variant="soft-rounded" colorScheme="brandTabs">
        <Flex w="100%">
          <SearchBar />
        </Flex>
        <Text
          mt="25px"
          mb="36px"
          color={textColor}
          fontSize="2xl"
          ms="24px"
          fontWeight="700"
        >
          {blogs?.length} Results
        </Text>
        <TabPanels>
          <TabPanel px="0px">
            <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="20px">
              {blogs.map((blog) => (
                <Blog
                  name={blog?.blogHeading}
                  author="By Admin"
                  image={baseURL + blog?.blogImage}
                  data={blog?.data}
                  blogId={blog?._id}
                  handleDeleteBlogFun={deleteBlogFun}
                  download={`/admin/main/single-blog/${blog._id}`}
                />
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
