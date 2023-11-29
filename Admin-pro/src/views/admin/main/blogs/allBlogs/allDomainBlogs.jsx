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
  Card,
  Tooltip,
} from '@chakra-ui/react';

// Custom components
import Blog from 'components/card/Blog';
import { SearchBar } from 'views/admin/nfts/profile/components/Search';
import { useDispatch } from 'react-redux';
import {
  getBlogs,
  deleteBlog,
  getAllDomainBlogs,
} from 'redux/Actions/BlogsActions';
import { useSelector } from 'react-redux';
import { baseURL } from 'constants/baseURL';
import { useAlert } from 'react-alert';
import { IoCopy } from 'react-icons/io5';
import copy from 'clipboard-copy';

export default function Collection() {
  const dispatch = useDispatch();
  const alert = useAlert();

  const textColor = useColorModeValue('secondaryGray.900', 'white');

  const [deleteBlogId, setDeleteBlogId] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [clickToCopy, setClickToCopy] = useState(false);
  const { domainBlogs } = useSelector((state) => state.blogReducer);

  useEffect(() => {
    dispatch(getAllDomainBlogs());
  }, [refresh]);

  const deleteBlogFun = (id) => {
    setDeleteBlogId(id);
  };

  useEffect(() => {
    if (deleteBlogId !== '') {
      dispatch(deleteBlog(deleteBlogId, alert, refresh, setRefresh));
    }
  }, [deleteBlogId]);

  const handleCopyText = (id) => {
    const textToCopy = `${baseURL}/api/v1/blog/get-domain-blogs?domainId=${id}`;

    copy(textToCopy).then(() => {
      setClickToCopy(true);
      // Reset the 'clickToCopy' state after 2 seconds
      setTimeout(() => {
        setClickToCopy(false);
      }, 2000);
    });
  };

  // Chakra Color Mode
  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      <Tabs variant="soft-rounded" colorScheme="brandTabs">
        <Flex w="100%">
          <SearchBar />
        </Flex>
        {domainBlogs.map((domain) => (
          <>
            <Card my={'20px'} rounded={'3xl'}>
              <Flex
                justify={'space-between'}
                position={'relative'}
                textAlign={'center'}
                p={'5'}
              >
                <Text fontSize={'xl'} fontWeight={'bold'}>
                  {domain?.domain}
                </Text>
                <Button
                  type="button"
                  variant="brand"
                  fontSize="14px"
                  fontWeight="500"
                  w="auto"
                  h="10"
                  onClick={() => handleCopyText(domain?.domainId)}
                >
                  {clickToCopy ? 'Copied' : 'Copy'}
                  <Icon
                    cursor={'pointer'}
                    position={'relative'}
                    transition="0.2s linear"
                    w="20px"
                    h="20px"
                    pl={'4px'}
                    as={IoCopy}
                    color="white"
                  />
                </Button>
              </Flex>
            </Card>
            <Text
              mt="25px"
              mb="36px"
              color={textColor}
              fontSize="2xl"
              ms="24px"
              fontWeight="700"
            >
              {domain?.blogs.length} Results
            </Text>
            <TabPanels>
              <TabPanel px="0px">
                <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="20px">
                  {domain.blogs.map((blog) => (
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
          </>
        ))}
      </Tabs>
    </Box>
  );
}
