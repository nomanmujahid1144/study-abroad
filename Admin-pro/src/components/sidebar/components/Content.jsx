// chakra imports
import {
  Avatar,
  Box,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getSingleUser } from 'redux/Actions/UserActions';
//   Custom components
import Brand from 'components/sidebar/components/Brand';
import Links from 'components/sidebar/components/Links';
import SidebarCard from 'components/sidebar/components/SidebarCard';
import avatar4 from 'assets/img/avatars/avatar4.png';

// FUNCTIONS

function SidebarContent(props) {
  const { routes, mini, hovered } = props;
  const textColor = useColorModeValue('navy.700', 'white');
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getSingleUser());
  }, []);

  // SIDEBAR
  return (
    <Flex direction="column" height="100%" pt="25px" borderRadius="30px">
      <Brand mini={mini} hovered={hovered} />
      <Stack direction="column" mb="auto" mt="8px">
        <Box
          ps={
            mini === false
              ? '20px'
              : mini === true && hovered === true
              ? '20px'
              : '16px'
          }
          pe={{ md: '16px', '2xl': '1px' }}
          ms={mini && hovered === false ? '-16px' : 'unset'}
        >
          <Links mini={mini} hovered={hovered} routes={routes} />
        </Box>
      </Stack>

      {/* <Box
        ps="20px"
        pe={{ md: '16px', '2xl': '0px' }}
        mt="60px"
        borderRadius="30px"
      >
        <SidebarCard mini={mini} hovered={hovered} />
      </Box> */}
      <Flex mt="75px" mb="56px" justifyContent="center" alignItems="center">
        {/* <Avatar
          _hover={{ cursor: 'pointer' }}
          color={textColor}
          name="Adela Parkson"
          bg="#11047A"
          size="sm"
          w="40px"
          h="40px"
        /> */}
        <Avatar
          _hover={{ cursor: 'pointer' }}
          color={textColor}
          name="Adela Parkson"
          bg="#11047A"
          h="48px"
          w="48px"
          // src={avatar4}
          me={
            mini === false
              ? '20px'
              : mini === true && hovered === true
              ? '20px'
              : '0px'
          }
        />
        <Box
          display={
            mini === false
              ? 'block'
              : mini === true && hovered === true
              ? 'block'
              : 'none'
          }
        >
          <Text color={textColor} fontSize="md" fontWeight="700">
            {user?.fullName}
          </Text>
          <Text color="secondaryGray.600" fontSize="sm" fontWeight="400">
            {user?.roles?.user
              ? 'User Account'
              : user?.roles?.admin
              ? 'Administrator'
              : user?.roles?.employee
              ? 'Employee'
              : 'Content Manager'}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SidebarContent;
