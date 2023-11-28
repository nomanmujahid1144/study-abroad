import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from 'components/card/Card';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getWebsitessContactedUsers } from 'redux/Actions/UserActions';
import SearchTableUsers from './components/NewDomainsTable';
import { useDisclosure } from '@chakra-ui/hooks';
import { MdClose } from 'react-icons/md';
import { addDomain, getAllDomains } from 'redux/Actions/DomainAction';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';

export default function NewDomain() {
  const textColor = useColorModeValue('navy.700', 'white');
  const brandStars = useColorModeValue('brand.500', 'brand.400');

  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { domains } = useSelector((state) => state.domainReducer);

  const [credentials, setcredentials] = useState({
    websiteName: '',
    domain: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addDomain(credentials, navigate, alert, onClose));
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(getAllDomains());
  }, []);

  return (
    <Flex direction="column" pt={{ sm: '125px', lg: '75px' }}>
      <Card mb={'20px'}>
        <Flex justify={'end'} position={'relative'} textAlign={'center'}>
          {/* <Text className="text-navy-700 text-xl font-bold dark:text-white">
            Domains
          </Text> */}
          <Button
            type="button"
            variant="brand"
            fontSize="14px"
            fontWeight="500"
            w="13%"
            h="50"
            onClick={onOpen}
          >
            Add Domains
          </Button>
        </Flex>
      </Card>
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
                Add New Domain
              </Text>
              {/* <Text mb={'2'} textAlign={'start'}>
                Do you want to delete this blog?
              </Text> */}
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel
                    display="flex"
                    ms="4px"
                    fontSize="sm"
                    fontWeight="500"
                    color={textColor}
                    mb="8px"
                  >
                    Website Name<Text color={brandStars}>*</Text>
                  </FormLabel>
                  <Input
                    isRequired={true}
                    variant="auth"
                    fontSize="sm"
                    ms={{ base: '0px', md: '0px' }}
                    type="text"
                    placeholder="Enter Website Name"
                    mb="24px"
                    fontWeight="500"
                    size="lg"
                    name="websiteName"
                    value={credentials.websiteName}
                    onChange={onChange}
                  />
                  <FormLabel
                    display="flex"
                    ms="4px"
                    fontSize="sm"
                    fontWeight="500"
                    color={textColor}
                    mb="8px"
                  >
                    Domain<Text color={brandStars}>*</Text>
                  </FormLabel>
                  <Input
                    isRequired={true}
                    variant="auth"
                    fontSize="sm"
                    ms={{ base: '0px', md: '0px' }}
                    type="text"
                    placeholder="Enter Domain"
                    mb="24px"
                    fontWeight="500"
                    size="lg"
                    name="domain"
                    value={credentials.domain}
                    onChange={onChange}
                  />
                  <Button
                    type="submit"
                    variant="brand"
                    fontSize="14px"
                    fontWeight="500"
                    w="100%"
                    h="50"
                    mb="24px"
                  >
                    Add Domain
                  </Button>
                </FormControl>
              </form>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className="mt-5 grid grid-cols-1 gap-5">
        <Card px="0px">
          {console.log(domains, 'Domains')}
          {domains?.length > 0 ? (
            <SearchTableUsers
              tableData={domains?.length > 0 ? domains : []}
              isComanyUsers={false}
            />
          ) : null}
        </Card>
      </div>
    </Flex>
  );
}
