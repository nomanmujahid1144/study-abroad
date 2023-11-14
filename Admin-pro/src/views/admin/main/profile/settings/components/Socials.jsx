// Chakra imports
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Card from 'components/card/Card';
import InputField from 'components/fields/InputField';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import { updateSocial, updateUser } from 'redux/Actions/UserActions';

export default function Settings({ user }) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const alert = useAlert();

  const [editdate, setEditData] = useState({});

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'secondaryGray.600';
  const brandStars = useColorModeValue('brand.500', 'brand.400');
  const textColor = useColorModeValue('navy.700', 'white');
  const [credentials, setcredentials] = useState({
    twitter: '',
    facebook: '',
    linkedin: '',
  });

  useEffect(() => {
    setEditData(user);
  }, [user]);

  useEffect(() => {
    if (editdate) {
      setcredentials({
        twitter:
          editdate?.social?.twitter !== '' ? editdate?.social?.twitter : '',
        facebook:
          editdate?.social?.facebook !== '' ? editdate?.social?.facebook : '',
        linkedin:
          editdate?.social?.linkedin !== '' ? editdate?.social?.linkedin : '',
      });
    }
  }, [editdate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { twitter, facebook, linkedin } = credentials;
    const social = {
      twitter: twitter,
      facebook: facebook,
      linkedin: linkedin,
    };
    dispatch(updateSocial({ social }, alert));
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <FormControl>
      <Card mb="20px" pb="50px">
        <Flex direction="column" mb="40px" ms="10px">
          <Text fontSize="xl" color={textColorPrimary} fontWeight="bold">
            Social Profiles
          </Text>
          <Text fontSize="md" color={textColorSecondary}>
            Here you can set user social profiles
          </Text>
        </Flex>
        <form onSubmit={handleSubmit}>
          <FormLabel
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            display="flex"
          >
            Twitter Username<Text color={brandStars}>*</Text>
          </FormLabel>
          <Input
            isRequired={true}
            fontSize="sm"
            placeholder="Twitter Username"
            id="twitter_username"
            mb="25px"
            size="lg"
            type={'text'}
            variant="auth"
            name="twitter"
            value={credentials.twitter}
            onChange={onChange}
          />
          <FormLabel
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            display="flex"
          >
            Facebook Username<Text color={brandStars}>*</Text>
          </FormLabel>
          <Input
            isRequired={true}
            fontSize="sm"
            placeholder="Facebook Username"
            id="facebook_username"
            mb="25px"
            size="lg"
            type={'text'}
            variant="auth"
            name="facebook"
            value={credentials.facebook}
            onChange={onChange}
          />
          <FormLabel
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            display="flex"
          >
            LinkedIn Username<Text color={brandStars}>*</Text>
          </FormLabel>
          <Input
            isRequired={true}
            fontSize="sm"
            placeholder="LinkedIn Username"
            id="linkedin_username"
            mb="25px"
            size="lg"
            type={'text'}
            variant="auth"
            name="linkedin"
            value={credentials.linkedin}
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
