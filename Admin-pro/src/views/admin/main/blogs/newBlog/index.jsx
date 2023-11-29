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
import { getAllDomains } from 'redux/Actions/DomainAction';

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
  const { id } = useParams();
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

  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');

  const [formDatas, setFormData] = useState({
    blogHeading: '',
    blogImage: null,
    data: '',
    metaTitle: '',
    metaDescription: '',
    url: '',
    metaTags: [],
    domainId: null,
  });
  const { domains } = useSelector((state) => state.domainReducer);
  // EDIT BLOG CODING

  const { blog } = useSelector((state) => state.blogReducer);

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

  useEffect(() => {
    if (id) {
      dispatch(getBlogById(id));
    } else {
      setFormData({
        blogHeading: '',
        blogImage: null,
        data: '',
        metaTitle: '',
        metaDescription: '',
        url: '',
        metaTags: [],
        domainId: null,
      });
      setTags([]);
      setSelectedImage(null);
    }
  }, [id]);

  // useEffect(() => {
  //   if (blog) {
  //     if (Object.keys(blog).length > 0) {
  //       setFormData((prevData) => ({
  //         ...prevData,
  //         blogHeading: blog?.blogHeading || '',
  //         blogImage: blog?.blogImage || null,
  //         data: blog?.data || '',
  //         metaTitle: blog?.metaTitle || '',
  //         metaDescription: blog?.metaDescription || '',
  //         url: blog?.url || '',
  //         metaTags: blog?.metaTags || [],
  //         domainId: blog?.domainId || null,
  //       }));

  //       if (blog?.metaTags && blog.metaTags.length > 0) {
  //         let arr = blog.metaTags.map((element, index) => ({
  //           name: element,
  //           id: index + 1,
  //         }));
  //         setTags(arr);
  //       }
  //     }
  //   } else {
  //     setFormData({
  //       blogHeading: '',
  //       blogImage: null,
  //       data: '',
  //       metaTitle: '',
  //       metaDescription: '',
  //       url: '',
  //       metaTags: [],
  //       domainId: null,
  //     });
  //     setTags([]);
  //     setSelectedImage(null);
  //   }
  // }, []);

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
    formData.append('domainId', formDatas.domainId);
    if (isNamesArrayValid) {
      formData.append('metaTags', JSON.stringify(tags));
    } else {
      formData.append('metaTags', JSON.stringify(blog.metaTags));
    }
    console.log(selectedImage, 'selectedImage');
    if (selectedImage) {
      formData.append('blogImage', selectedImage);
    }
    console.log(formDatas, 'formDatas');
    if (id) {
      dispatch(updateBlog(id, formData, navigate, alert)).then(() => {
        navigate('/admin/main/blog/all-blogs');
      });
    } else {
      dispatch(addBlog(formData, navigate, alert));
    }
  };

  const handleGetTags = (allTags) => {
    let arr = [];
    if (allTags.length > 0) {
      allTags.map((tag) => arr.push(tag.name));
    }
    setTags(allTags.length > 0 ? arr : []);
  };

  useEffect(() => {
    dispatch(getAllDomains());
  }, []);

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
                    value={
                      blog?.blogHeading !== ''
                        ? blog?.blogHeading
                        : formDatas?.blogHeading
                    }
                    onChange={onChange}
                  />
                  <Flex justify="space-between" mt="24px">
                    <Button
                      variant="darkBrand"
                      fontSize="sm"
                      borderRadius="16px"
                      disabled={
                        blog?.blogHeading !== '' ||
                        formDatas?.blogHeading !== ''
                          ? false
                          : true
                      }
                      cursor={
                        blog?.blogHeading !== '' ||
                        formDatas?.blogHeading !== ''
                          ? 'pointer'
                          : 'not-allowed'
                      }
                      w={{ base: '128px', md: '148px' }}
                      h="46px"
                      ms="auto"
                      onClick={() =>
                        blog?.blogHeading !== '' ||
                        formDatas?.blogHeading !== ''
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
                <Dropzone
                  handleImage={handleImage}
                  editImage={id ? blog?.blogImage : ''}
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
                      selectedImage || blog?.blogImage !== ''
                        ? pricingTab.current.click()
                        : null
                    }
                    disabled={
                      blog?.blogImage !== '' || selectedImage ? false : true
                    }
                    cursor={
                      blog?.blogImage !== '' || selectedImage
                        ? 'pointer'
                        : 'not-allowed'
                    }
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
                    data={blog?.data !== '' ? blog?.data : formDatas?.data}
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
                      disabled={
                        blog?.blogImage !== '' || formDatas?.data !== ''
                          ? false
                          : true
                      }
                      cursor={
                        blog?.blogImage !== '' || formDatas?.data !== ''
                          ? 'pointer'
                          : 'not-allowed'
                      }
                      onClick={() =>
                        blog?.blogImage !== '' || formDatas?.data
                          ? othersTab.current.click()
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
                  Other Information
                </Text>
                <Flex direction="column" w="100%">
                  <Stack direction="column" spacing="20px">
                    <SimpleGrid
                      columns={{ base: 1, md: 3 }}
                      gap={{ base: '0px', md: '10px' }}
                    >
                      <Flex direction="column" mb={'30px'}>
                        <FormLabel
                          display="flex"
                          ms="10px"
                          htmlFor={'domainId'}
                          fontSize="sm"
                          color={textColorPrimary}
                          fontWeight="bold"
                          _hover={{ cursor: 'pointer' }}
                        >
                          Select Domain
                        </FormLabel>
                        <Select
                          fontSize="sm"
                          id="currency"
                          variant="auth"
                          h="44px"
                          maxH="44px"
                          ms={{ base: '0px', md: '0px' }}
                          mb="24px"
                          fontWeight="500"
                          size="lg"
                          name="domainId"
                          defaultValue={
                            blog?.domainId?.domain || formDatas?.domainId
                          }
                          onChange={onChange}
                        >
                          <option hidden selected>
                            Select Domain
                          </option>
                          {domains.map((domain, index) => (
                            <option value={domain._id}>{domain.domain}</option>
                          ))}
                        </Select>
                      </Flex>
                      <InputField
                        id=""
                        label="Meta Title"
                        isRequired={true}
                        variant="auth"
                        fontSize="sm"
                        ms={{ base: '0px', md: '0px' }}
                        mb="24px"
                        fontWeight="500"
                        size="lg"
                        type="text"
                        placeholder="Add Meta Title"
                        name="metaTitle"
                        value={
                          blog?.metaTitle !== ''
                            ? blog?.metaTitle
                            : formDatas?.metaTitle
                        }
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
                        value={blog?.url !== '' ? blog?.url : formDatas?.url}
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
                      value={
                        blog?.metaDescription !== ''
                          ? blog?.metaDescription
                          : formDatas?.metaDescription
                      }
                      onChange={onChange}
                    />
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
                      value={
                        blog?.metaTags?.length > 0
                          ? blog?.metaTags
                          : tags?.length > 0
                          ? tags
                          : []
                      }
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
