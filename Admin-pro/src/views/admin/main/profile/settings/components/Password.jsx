// Chakra imports
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from 'components/card/Card';
import InputField from 'components/fields/InputField';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import { changeUserPassword } from 'redux/Actions/UserActions';

export default function Settings() {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'secondaryGray.600';
  const brandStars = useColorModeValue('brand.500', 'brand.400');
  const textColor = useColorModeValue('navy.700', 'white');

  let navigate = useNavigate();
  let dispatch = useDispatch();
  const alert = useAlert();

  const [editdate, setEditData] = useState({});
  const [update, setUpdate] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [credentials, setcredentials] = useState({
    password: '',
    cpassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, cpassword } = credentials;
    // dispatch(updateUser(fullName, email, alert));
    if (password.length < 8 || cpassword.length < 8) {
      alert.show('Kindly establish an 8-digit password');
    } else if (password !== cpassword) {
      alert.show('Password does not Match');
    } else {
      dispatch(changeUserPassword(password, navigate, alert));
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <FormControl>
      <Card>
        <Flex direction="column" mb="40px" ms="10px">
          <Text fontSize="xl" color={textColorPrimary} fontWeight="bold">
            Change password
          </Text>
          <Text fontSize="md" color={textColorSecondary}>
            Here you can set your new password
          </Text>
        </Flex>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Flex flexDirection="column">
              <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                display="flex"
              >
                New Password<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                  isRequired={true}
                  fontSize="sm"
                  placeholder="Min. 8 characters"
                  mb="24px"
                  size="lg"
                  type={show ? 'text' : 'password'}
                  variant="auth"
                  name="password"
                  value={credentials.password}
                  onChange={onChange}
                />
                <InputRightElement display="flex" alignItems="center" mt="4px">
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: 'pointer' }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                display="flex"
              >
                Confirm Password<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size="md">
                <Input
                  isRequired={true}
                  fontSize="sm"
                  placeholder="Min. 8 characters"
                  mb="24px"
                  size="lg"
                  type={show ? 'text' : 'password'}
                  variant="auth"
                  name="cpassword"
                  value={credentials.cpasswordpassword}
                  onChange={onChange}
                />
                <InputRightElement display="flex" alignItems="center" mt="4px">
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: 'pointer' }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <Button
                variant="brand"
                minW="183px"
                fontSize="sm"
                fontWeight="500"
                ms="auto"
                type="submit"
              >
                Change Password
              </Button>
            </Flex>
          </FormControl>
        </form>
      </Card>
    </FormControl>
  );
}
