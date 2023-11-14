// Chakra imports
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from 'components/card/Card';
import InputField from 'components/fields/InputField';
import TextField from 'components/fields/TextField';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { updateUser } from 'redux/Actions/UserActions';

export default function Settings({ user, refresh }) {
  // Chakra Color Mode

  let navigate = useNavigate();
  let dispatch = useDispatch();
  const alert = useAlert();

  const [editdate, setEditData] = useState({});
  const [update, setUpdate] = useState(false);

  const [credentials, setcredentials] = useState({
    email: '',
    fullName: '',
  });

  useEffect(() => {
    setEditData(user);
  }, [user]);

  useEffect(() => {
    setcredentials({
      email: editdate?.email,
      fullName: editdate?.fullName,
    });
  }, [editdate]);

  useEffect(() => {
    refresh();
  }, [update]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, fullName } = credentials;
    dispatch(updateUser(fullName, email, alert, update, setUpdate));
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'secondaryGray.600';
  const brandStars = useColorModeValue('brand.500', 'brand.400');
  const textColor = useColorModeValue('navy.700', 'white');
  return (
    <FormControl>
      <Card>
        <Flex direction="column" mb="40px" ms="10px">
          <Text fontSize="xl" color={textColorPrimary} fontWeight="bold">
            Account Settings
          </Text>
          <Text fontSize="md" color={textColorSecondary}>
            Here you can change user account information
          </Text>
        </Flex>

        <form onSubmit={handleSubmit}>
          {/* <FormControl> */}

          <FormLabel
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            display="flex"
          >
            Full Name<Text color={brandStars}>*</Text>
          </FormLabel>
          <Input
            isRequired={true}
            fontSize="sm"
            placeholder="Min. 8 characters"
            mb="24px"
            size="lg"
            type={'text'}
            variant="auth"
            name="fullName"
            value={credentials.fullName}
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
            Email<Text color={brandStars}>*</Text>
          </FormLabel>
          <Input
            isRequired={true}
            variant="auth"
            fontSize="sm"
            ms={{ base: '0px', md: '0px' }}
            type="email"
            placeholder="mail@simmmple.com"
            mb="24px"
            fontWeight="500"
            size="lg"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
          <Button
            variant="brand"
            display={'block'}
            minW="183px"
            fontSize="sm"
            fontWeight="500"
            ms="auto"
            type="submit"
          >
            Save changes
          </Button>
        </form>
      </Card>
    </FormControl>
  );
}
