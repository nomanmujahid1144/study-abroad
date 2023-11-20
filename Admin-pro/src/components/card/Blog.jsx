// Chakra imports
import {
  AvatarGroup,
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import { MdClose } from 'react-icons/md';
// Custom components
import Card from 'components/card/Card';
// Assets
import { useState } from 'react';
import {
  IoHeart,
  IoHeartOutline,
  IoPencil,
  IoTrashOutline,
} from 'react-icons/io5';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function NFT(props) {
  const {
    image,
    name,
    data,
    blogId,
    handleDeleteBlogFun,
    author,
    bidders,
    download,
    currentbid,
  } = props;
  const [like, setLike] = useState(false);
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorBid = useColorModeValue('brand.500', 'white');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleDeleteBlog = () => {
    handleDeleteBlogFun(blogId);
  };

  const handleButtonClick = () => {
    console.log('navigate');
    // Replace '/your-route' with the path you want to navigate to
    navigate(`/admin/main/updateblog/${blogId}`);
  };

  return (
    <Card p="20px">
      <Flex direction={{ base: 'column' }} justify="center">
        <Box
          mb={{ base: '20px', '2xl': '20px' }}
          //   style={{ height: '20rem' }}
          position="relative"
        >
          <Image
            src={image}
            w={{ base: '100%', '3xl': '100%' }}
            h={{ base: '100%', '3xl': '100%' }}
            borderRadius="20px"
          />
          <Button
            position="absolute"
            bg="white"
            _hover={{ bg: 'whiteAlpha.900' }}
            _active={{ bg: 'white' }}
            _focus={{ bg: 'white' }}
            p="0px !important"
            top="14px"
            right="14px"
            borderRadius="50%"
            minW="36px"
            h="36px"
            onClick={onOpen}
          >
            <Icon
              transition="0.2s linear"
              w="20px"
              h="20px"
              as={IoTrashOutline}
              color="brand.500"
            />
          </Button>
          {/* <Link href={`/admin/main/updateblog/${blogId}`}> */}
          <Button
            position="absolute"
            bg="white"
            _hover={{ bg: 'whiteAlpha.900' }}
            _active={{ bg: 'white' }}
            _focus={{ bg: 'white' }}
            p="0px !important"
            top="14px"
            right="55px"
            borderRadius="50%"
            minW="36px"
            h="36px"
            onClick={handleButtonClick}
          >
            <Icon
              transition="0.2s linear"
              w="20px"
              h="20px"
              as={IoPencil}
              color="brand.500"
            />
          </Button>
          {/* </Link> */}
        </Box>

        {/* Modela for Delete Blog */}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay className="bg-[#000] opacity-30" />
          <ModalContent className="z-[1002] m-auto w-max min-w-[350px] max-w-[85%] md:top-[12vh]">
            <ModalBody>
              <div
                className={`shadow-3xl shadow-shadow-500 bg-navy-800 z-[1004] max-w-[450px] flex-col flex-col rounded-[20px] bg-white bg-clip-border`}
              >
                <Flex
                  onClick={onClose}
                  justify={'end'}
                  // className="flex cursor-pointer justify-end"
                >
                  <MdClose className="h-6 w-6" />
                </Flex>
                <Text
                  mb={'2'}
                  textAlign={'start'}
                  fontSize={'2xl'}
                  fontWeight={'bold'}
                >
                  Delete Blog
                </Text>
                <Text mb={'2'} textAlign={'start'}>
                  Do you want to delete this blog?
                </Text>
                <Flex justify={'center'} gap={'2'}>
                  <Button
                    onClick={handleDeleteBlog}
                    colorScheme="red"
                    variant="outline"
                    className="rounded-xl"
                  >
                    Yes
                  </Button>
                  <Button
                    onClick={onClose}
                    variant="outline"
                    className="rounded-xl"
                  >
                    No
                  </Button>
                </Flex>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* end Model */}
        <Flex flexDirection="column" justify="space-between" h="100%">
          <Flex
            justify="space-between"
            direction={{
              base: 'row',
              md: 'column',
              lg: 'row',
              xl: 'column',
              '2xl': 'row',
            }}
            mb="auto"
          >
            <Flex direction="column">
              <Text
                color={textColor}
                fontSize={{
                  base: 'xl',
                  md: 'lg',
                  lg: 'lg',
                  xl: 'lg',
                  '2xl': 'md',
                  '3xl': 'lg',
                }}
                mb="5px"
                fontWeight="bold"
                me="14px"
              >
                {name}
              </Text>
              <Text
                color="secondaryGray.600"
                fontSize={{
                  base: 'sm',
                }}
                fontWeight="400"
                me="14px"
              >
                {author}
              </Text>
            </Flex>
          </Flex>
          <Text
            color="secondaryGray.600"
            fontSize={{
              base: 'sm',
            }}
            fontWeight="400"
            me="14px"
            dangerouslySetInnerHTML={{
              __html: data != '' ? data.slice(0, 50) + '...' : '',
            }}
          ></Text>
          <Flex
            justify="space-between"
            align={{
              base: 'center',
              md: 'start',
              lg: 'center',
              xl: 'start',
              '2xl': 'center',
            }}
            direction={{
              base: 'row',
              md: 'column',
              lg: 'row',
              xl: 'column',
              '2xl': 'row',
            }}
            mt="25px"
          >
            {/* <Text fontWeight="700" fontSize="sm" color={textColorBid}>
              Current Bid: {currentbid}
            </Text> */}
            <Link
              href={download}
              mt={{
                base: '0px',
                md: '10px',
                lg: '0px',
                xl: '10px',
                '2xl': '0px',
              }}
            >
              <Button
                variant="darkBrand"
                color="white"
                fontSize="sm"
                fontWeight="500"
                borderRadius="70px"
                px="24px"
                py="5px"
              >
                Read More
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
