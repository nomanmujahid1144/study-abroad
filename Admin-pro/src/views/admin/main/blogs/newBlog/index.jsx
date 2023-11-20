/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   ____  ____   ___  
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| |  _ \|  _ \ / _ \ 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || |  | |_) | |_) | | | |
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |  |  __/|  _ <| |_| |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___| |_|   |_| \_\\___/ 
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.horizon-ui.com/pro/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Select,
  SimpleGrid,
  Icon,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  useTheme,
  Input,
} from '@chakra-ui/react';

// Custom components
import Card from 'components/card/Card';
import InputField from 'components/fields/InputField';
import TextField from 'components/fields/TextField';
import TagsField from 'components/fields/TagsField';
import Dropzone from './component/Dropzone';
import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Assets
import { MdOutlineCloudUpload } from 'react-icons/md';
import axiosInstance from 'constants/axiosInstance';
import { baseURL } from 'constants/baseURL';
import { addBlog, getBlogById, updateBlog } from 'redux/Actions/BlogsActions';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux';
import { transformString } from 'constants/helperFunction';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function NewProduct() {
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const [activeBullets, setActiveBullets] = useState({
    product: true,
    media: false,
    pricing: false,
    others: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const alert = useAlert();

  const productTab = React.useRef();
  const mediaTab = React.useRef();
  const pricingTab = React.useRef();
  const othersTab = React.useRef();
  const theme = useTheme();
  //eslint-disable-next-line
  const [lineColor, setLineColor] = useState(theme.colors.brand[500]);
  //eslint-disable-next-line
  const [lineColorDark, setLineColorDark] = useState(theme.colors.brand[400]);
  const brand = useColorModeValue(lineColor, lineColorDark);
  const [selectedImage, setSelectedImage] = useState(null);
  const [tags, setTags] = useState([]);
  const [formDatas, setFormData] = useState({
    blogHeading: '',
    blogImage: null,
    data: '',
    metaTitle: '',
    metaDescription: '',
    url: '',
    metaTags: [],
  });

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append('image', file);
            axiosInstance
              .post(`${baseURL}/api/v1/blog/addblogimg`, body)
              .then((res) => {
                resolve({ default: `${res.data.url}` });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setFormData({ ...formDatas, data: data });
  };

  const onChange = (e) => {
    setFormData({ ...formDatas, [e.target.name]: e.target.value });
  };

  const handleImage = (image) => {
    setSelectedImage(image);
  };

  // Function to Validate Array if it is array of string or array of objs
  function isArrayofStrings(arr) {
    return Array.isArray(arr) && arr.every((item) => typeof item === 'string');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const siteURl = transformString(formDatas.url);
    const formData = new FormData();
    // Check if the user edit Tags list or not
    const isNamesArrayValid = isArrayofStrings(tags);

    formData.append('blogHeading', formDatas.blogHeading);
    formData.append('data', formDatas.data);
    formData.append('metaTitle', formDatas.metaTitle);
    formData.append('metaDescription', formDatas.metaDescription);
    formData.append('url', siteURl);
    if (isNamesArrayValid) {
      formData.append('metaTags', JSON.stringify(tags));
    } else {
      formData.append('metaTags', JSON.stringify(blog.metaTags));
    }
    console.log(selectedImage, 'selectedImage');
    if (selectedImage) {
      formData.append('blogImage', selectedImage);
    }
    console.log(tags, 'tags');
    console.log(formDatas, 'formDatas');
    if (params.id) {
      dispatch(updateBlog(params.id, formData, navigate, alert)).then(() => {
        navigate('/admin/main/blog/all-blogs');
      });
    } else {
      dispatch(addBlog(formData, navigate, alert));
      // console.log('New');
    }
  };

  const handleGetTags = (allTags) => {
    let arr = [];
    if (allTags.length > 0) {
      allTags.map((tag) => arr.push(tag.name));
    }
    setTags(allTags.length > 0 ? arr : []);
  };

  // EDIT BLOG CODING

  const { blog } = useSelector((state) => state.blogReducer);

  useEffect(() => {
    if (params.id) {
      dispatch(getBlogById(params.id));
    } else {
      setSelectedImage(null);
      setFormData({
        blogHeading: '',
        blogImage: null,
        data: '',
        metaTitle: '',
        metaDescription: '',
        url: '',
        metaTags: [],
      });
      setTags([]);
    }
  }, [params]);

  useEffect(() => {
    if (blog) {
      if (Object.keys(blog).length > 0) {
        setFormData({
          blogHeading: blog.blogHeading,
          blogImage: blog.blogImage,
          data: blog.data,
          metaTitle: blog.metaTitle,
          metaDescription: blog.metaDescription,
          url: blog.url,
          metaTags: blog.metaTags,
        });
        if (blog.metaTags.length > 0) {
          let obj;
          let arr = [];
          blog.metaTags.forEach((element, index) => {
            obj = {
              name: element,
              id: index + 1,
            };
            arr.push(obj);
          });
          setTags(arr);
        }
      } else {
        setSelectedImage(null);
        setFormData({
          blogHeading: '',
          blogImage: null,
          data: '',
          metaTitle: '',
          metaDescription: '',
          url: '',
          metaTags: [],
        });
        setTags([]);
      }
    } else {
      setSelectedImage(null);
      setFormData({
        blogHeading: '',
        blogImage: null,
        data: '',
        metaTitle: '',
        metaDescription: '',
        url: '',
        metaTags: [],
      });
      setTags([]);
    }
  }, [blog]);

  return (
    <Flex
      direction="column"
      minH="100vh"
      align="center"
      pt={{ sm: '125px', lg: '75px' }}
      position="relative"
    >
      <Box
        h="45vh"
        bgGradient="linear(to-b, brand.400, brand.600)"
        position="absolute"
        w="100%"
        borderRadius="20px"
      />

      <Tabs
        variant="unstyled"
        mt={{ base: '60px', md: '165px' }}
        zIndex="0"
        display="flex"
        flexDirection="column"
      >
        <TabList
          display="flex"
          alignItems="center"
          alignSelf="center"
          justifySelf="center"
        >
          <Tab
            _focus={{ border: '0px', boxShadow: 'unset' }}
            ref={productTab}
            w={{ sm: '120px', md: '250px', lg: '300px' }}
            onClick={() =>
              setActiveBullets({
                product: true,
                media: false,
                pricing: false,
                others: false,
              })
            }
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              position="relative"
              _before={{
                content: "''",
                width: { sm: '120px', md: '250px', lg: '300px' },
                height: '3px',
                bg: activeBullets.media ? 'white' : 'brand.400',
                left: { sm: '12px', md: '40px' },
                top: {
                  sm: activeBullets.product ? '6px' : '4px',
                  md: null,
                },
                position: 'absolute',
                bottom: activeBullets.product ? '40px' : '38px',

                transition: 'all .3s ease',
              }}
            >
              <Box
                zIndex="1"
                border="2px solid"
                borderColor={activeBullets.product ? 'white' : 'brand.400'}
                bgGradient="linear(to-b, brand.400, brand.600)"
                w="16px"
                h="16px"
                mb="8px"
                borderRadius="50%"
              />
              <Text
                color={activeBullets.product ? 'white' : 'gray.300'}
                fontWeight={activeBullets.product ? 'bold' : 'normal'}
                display={{ sm: 'none', md: 'block' }}
              >
                Blog Info
              </Text>
            </Flex>
          </Tab>
          <Tab
            _focus={{ border: '0px', boxShadow: 'unset' }}
            ref={mediaTab}
            w={{ sm: '120px', md: '250px', lg: '300px' }}
            onClick={() =>
              setActiveBullets({
                product: true,
                media: true,
                pricing: false,
                others: false,
              })
            }
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              position="relative"
              _before={{
                content: "''",
                width: { sm: '120px', md: '250px', lg: '300px' },
                height: '3px',
                bg: activeBullets.pricing ? 'white' : 'brand.400',
                left: { sm: '12px', md: '28px' },
                top: '6px',
                position: 'absolute',
                bottom: activeBullets.media ? '40px' : '38px',

                transition: 'all .3s ease',
              }}
            >
              <Box
                zIndex="1"
                border="2px solid"
                borderColor={activeBullets.media ? 'white' : 'brand.400'}
                bgGradient="linear(to-b, brand.400, brand.600)"
                w="16px"
                h="16px"
                mb="8px"
                borderRadius="50%"
              />
              <Text
                color={activeBullets.media ? 'white' : 'gray.300'}
                fontWeight={activeBullets.media ? 'bold' : 'normal'}
                display={{ sm: 'none', md: 'block' }}
              >
                Media
              </Text>
            </Flex>
          </Tab>
          <Tab
            _focus={{ border: '0px', boxShadow: 'unset' }}
            ref={pricingTab}
            w={{ sm: '120px', md: '250px', lg: '300px' }}
            onClick={() =>
              setActiveBullets({
                product: true,
                media: true,
                pricing: true,
                others: false,
              })
            }
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              position="relative"
              _before={{
                content: "''",
                width: { sm: '120px', md: '250px', lg: '300px' },
                height: '3px',
                bg: activeBullets.others ? 'white' : 'brand.400',
                left: { sm: '12px', md: '28px' },
                top: '6px',
                position: 'absolute',
                bottom: activeBullets.pricing ? '40px' : '38px',

                transition: 'all .3s ease',
              }}
            >
              <Box
                zIndex="1"
                border="2px solid"
                borderColor={activeBullets.pricing ? 'white' : 'brand.400'}
                bgGradient="linear(to-b, brand.400, brand.600)"
                w="16px"
                h="16px"
                mb="8px"
                borderRadius="50%"
              />
              <Text
                color={activeBullets.pricing ? 'white' : 'gray.300'}
                fontWeight={activeBullets.pricing ? 'bold' : 'normal'}
                display={{ sm: 'none', md: 'block' }}
              >
                Blog Data
              </Text>
            </Flex>
          </Tab>
          <Tab
            _focus={{ border: '0px', boxShadow: 'unset' }}
            ref={othersTab}
            w={{ sm: '120px', md: '250px', lg: '300px' }}
            onClick={() =>
              setActiveBullets({
                product: true,
                media: true,
                pricing: true,
                others: true,
              })
            }
          >
            <Flex
              direction="column"
              justify="center"
              align="center"
              position="relative"
            >
              <Box
                zIndex="1"
                border="2px solid"
                borderColor={activeBullets.others ? 'white' : 'brand.400'}
                bgGradient="linear(to-b, brand.400, brand.600)"
                w="16px"
                h="16px"
                mb="8px"
                borderRadius="50%"
              />
              <Text
                color={activeBullets.others ? 'white' : 'gray.300'}
                fontWeight={activeBullets.others ? 'bold' : 'normal'}
                display={{ sm: 'none', md: 'block' }}
              >
                Other Information
              </Text>
            </Flex>
          </Tab>
        </TabList>

        <form onSubmit={handleSubmit}>
          <TabPanels mt="24px" maxW={{ md: '90%', lg: '100%' }} mx="auto">
            <TabPanel
              w={{ sm: '330px', md: '700px', lg: '850px' }}
              p="0px"
              mx="auto"
            >
              <Card p="30px">
                <Text
                  color={textColor}
                  fontSize="2xl"
                  fontWeight="700"
                  mb="20px"
                >
                  Blog Info
                </Text>
                <Flex direction="column" w="100%">
                  <Input
                    isRequired={true}
                    variant="auth"
                    fontSize="sm"
                    ms={{ base: '0px', md: '0px' }}
                    type="text"
                    placeholder="Add Blog Heading"
                    mb="24px"
                    fontWeight="500"
                    size="lg"
                    name="blogHeading"
                    value={formDatas.blogHeading}
                    onChange={onChange}
                  />
                  <Flex justify="space-between" mt="24px">
                    <Button
                      variant="darkBrand"
                      fontSize="sm"
                      borderRadius="16px"
                      disabled={formDatas.blogHeading !== '' ? false : true}
                      cursor={
                        formDatas.blogHeading !== '' ? 'pointer' : 'not-allowed'
                      }
                      w={{ base: '128px', md: '148px' }}
                      h="46px"
                      ms="auto"
                      onClick={() =>
                        formDatas.blogHeading !== ''
                          ? mediaTab.current.click()
                          : null
                      }
                    >
                      Next
                    </Button>
                  </Flex>
                </Flex>
              </Card>
            </TabPanel>
            <TabPanel
              w={{ sm: '330px', md: '700px', lg: '850px' }}
              p="0px"
              mx="auto"
            >
              <Card p="30px">
                <Text
                  color={textColor}
                  fontSize="2xl"
                  fontWeight="700"
                  mb="20px"
                >
                  Media
                </Text>
                {console.log(blog)}
                <Dropzone
                  handleImage={handleImage}
                  editImage={params.id ? blog?.blogImage : ''}
                  content={
                    <Box>
                      <Icon
                        as={MdOutlineCloudUpload}
                        w="80px"
                        h="80px"
                        color={textColor}
                      />
                      <Text
                        mx="auto"
                        mb="12px"
                        fontSize="lg"
                        fontWeight="700"
                        whiteSpace="pre-wrap"
                        color={textColor}
                      >
                        Drop your files here, or{' '}
                        <Text
                          as="span"
                          fontSize="lg"
                          fontWeight="700"
                          color={brand}
                        >
                          browse
                        </Text>
                      </Text>
                      <Text
                        fontSize="sm"
                        fontWeight="500"
                        color="secondaryGray.500"
                      >
                        Click to Upload your Blog Image
                      </Text>
                      <Text
                        fontSize="sm"
                        fontWeight="500"
                        color="secondaryGray.500"
                      >
                        PNG and JPG files are allowed
                      </Text>
                    </Box>
                  }
                />
                <Flex justify="space-between" mt="24px">
                  <Button
                    variant="light"
                    fontSize="sm"
                    borderRadius="16px"
                    w={{ base: '128px', md: '148px' }}
                    h="46px"
                    onClick={() => productTab.current.click()}
                  >
                    Prev
                  </Button>
                  <Button
                    variant="darkBrand"
                    fontSize="sm"
                    borderRadius="16px"
                    w={{ base: '128px', md: '148px' }}
                    h="46px"
                    onClick={() =>
                      selectedImage || blog.blogImage !== ''
                        ? pricingTab.current.click()
                        : null
                    }
                    disabled={selectedImage ? false : true}
                    cursor={selectedImage ? 'pointer' : 'not-allowed'}
                  >
                    Next
                  </Button>
                </Flex>
              </Card>
            </TabPanel>
            <TabPanel
              w={{ sm: '330px', md: '700px', lg: '850px' }}
              p="0px"
              mx="auto"
            >
              <Card p="30px">
                <Text
                  color={textColor}
                  fontSize="2xl"
                  fontWeight="700"
                  mb="20px"
                >
                  Blog Data
                </Text>
                <Flex direction="column" w="100%">
                  {/* <Stack direction="column" spacing="20px">
                  <SimpleGrid
                    columns={{ base: 1, md: 3 }}
                    gap={{ base: '0px', md: '20px' }}
                  >
                    <InputField
                      id="price"
                      placeholder="eg. $99"
                      label="Price"
                    />
                    <InputField
                      id="code"
                      placeholder="eg. 4030120241"
                      label="Unique Code"
                    />
                    <Flex direction="column" mb="34px">
                      <FormLabel
                        ms="10px"
                        htmlFor="currency"
                        fontSize="sm"
                        color={textColor}
                        fontWeight="bold"
                        _hover={{ cursor: 'pointer' }}
                      >
                        Currency
                      </FormLabel>
                      <Select
                        fontSize="sm"
                        id="currency"
                        variant="main"
                        h="44px"
                        maxH="44px"
                        defaultValue="usd"
                      >
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                        <option value="gbp">GBP</option>
                      </Select>
                    </Flex>
                  </SimpleGrid>
                  <TagsField />
                </Stack> */}
                  <CKEditor
                    editor={ClassicEditor}
                    data={formDatas.data}
                    config={{
                      extraPlugins: [uploadPlugin],
                      toolbar: [
                        'heading',
                        '|',
                        'bold',
                        'italic',
                        '|',
                        'table',
                        'link',
                        'bulletedList',
                        'numberedList',
                        'blockQuote',
                        'undo',
                        'redo',
                        '|',
                        'imageUpload',
                        'insertTable',
                      ],
                      heading: {
                        options: [
                          {
                            model: 'paragraph',
                            title: 'Paragraph',
                            class: 'ck-heading_paragraph',
                          },
                          {
                            model: 'heading1',
                            view: 'h1',
                            title: 'Heading 1',
                            class: 'ck-heading_heading1',
                          },
                          {
                            model: 'heading2',
                            view: 'h2',
                            title: 'Heading 2',
                            class: 'ck-heading_heading2',
                          },
                          {
                            model: 'heading3',
                            view: 'h3',
                            title: 'Heading 3',
                            class: 'ck-heading_heading3',
                          },
                          {
                            model: 'heading4',
                            view: 'h4',
                            title: 'Heading 4',
                            class: 'ck-heading_heading4',
                          },
                          {
                            model: 'heading5',
                            view: 'h5',
                            title: 'Heading 5',
                            class: 'ck-heading_heading5',
                          },
                          {
                            model: 'heading6',
                            view: 'h6',
                            title: 'Heading 6',
                            class: 'ck-heading_heading6',
                          },
                        ],
                      },
                    }}
                    onReady={(editor) => {
                      editor.editing.view.change((writer) => {
                        writer.setStyle(
                          'height',
                          '300px',
                          editor.editing.view.document.getRoot(),
                        );
                      });
                    }}
                    onChange={handleEditorChange}
                  />
                  <Flex justify="space-between" mt="24px">
                    <Button
                      variant="light"
                      fontSize="sm"
                      borderRadius="16px"
                      w={{ base: '128px', md: '148px' }}
                      h="46px"
                      onClick={() => mediaTab.current.click()}
                    >
                      Prev
                    </Button>
                    <Button
                      variant="darkBrand"
                      fontSize="sm"
                      borderRadius="16px"
                      w={{ base: '128px', md: '148px' }}
                      h="46px"
                      disabled={formDatas.data !== '' ? false : true}
                      cursor={formDatas.data !== '' ? 'pointer' : 'not-allowed'}
                      onClick={() =>
                        formDatas.data ? othersTab.current.click() : null
                      }
                    >
                      Next
                    </Button>
                  </Flex>
                </Flex>
              </Card>
            </TabPanel>

            <TabPanel
              w={{ sm: '330px', md: '700px', lg: '850px' }}
              p="0px"
              mx="auto"
            >
              <Card p="30px">
                <Text
                  color={textColor}
                  fontSize="2xl"
                  fontWeight="700"
                  mb="20px"
                >
                  Other Information
                </Text>
                <Flex direction="column" w="100%">
                  <Stack direction="column" spacing="20px">
                    <SimpleGrid
                      columns={{ base: 1, md: 2 }}
                      gap={{ base: '0px', md: '20px' }}
                    >
                      <InputField
                        id=""
                        label="Meta Title"
                        isRequired={true}
                        variant="auth"
                        fontSize="sm"
                        ms={{ base: '0px', md: '0px' }}
                        type="text"
                        placeholder="Add Meta Title"
                        mb="24px"
                        fontWeight="500"
                        size="lg"
                        name="metaTitle"
                        value={formDatas.metaTitle}
                        onChange={onChange}
                      />
                      <InputField
                        id=""
                        label="Set URL"
                        isRequired={true}
                        variant="auth"
                        fontSize="sm"
                        ms={{ base: '0px', md: '0px' }}
                        type="text"
                        placeholder="Set URL"
                        mb="24px"
                        fontWeight="500"
                        size="lg"
                        name="url"
                        value={formDatas.url}
                        onChange={onChange}
                      />
                    </SimpleGrid>

                    <TextField
                      id=""
                      label="Meta Description"
                      isRequired={true}
                      variant="auth"
                      fontSize="sm"
                      ms={{ base: '0px', md: '0px' }}
                      type="text"
                      placeholder="Add Meta Description"
                      mb="24px"
                      fontWeight="500"
                      size="lg"
                      name="metaDescription"
                      value={formDatas.metaDescription}
                      onChange={onChange}
                    />
                    {console.log(tags, 'FISR TSGS')}
                    <TagsField
                      label="Meta Tags"
                      isRequired={true}
                      variant="auth"
                      fontSize="sm"
                      ms={{ base: '0px', md: '0px' }}
                      type="text"
                      mb="24px"
                      fontWeight="500"
                      size="lg"
                      name="metaTags"
                      value={tags.length > 0 ? tags : []}
                      getTags={handleGetTags}
                    />
                  </Stack>
                  <Flex justify="space-between" mt="24px">
                    <Button
                      variant="light"
                      fontSize="sm"
                      borderRadius="16px"
                      w={{ base: '128px', md: '148px' }}
                      h="46px"
                      onClick={() => pricingTab.current.click()}
                    >
                      Prev
                    </Button>
                    <Button
                      variant="darkBrand"
                      fontSize="sm"
                      borderRadius="16px"
                      w={{ base: '128px', md: '148px' }}
                      h="46px"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Flex>
                </Flex>
              </Card>
            </TabPanel>
          </TabPanels>
        </form>
      </Tabs>
    </Flex>
  );
}
