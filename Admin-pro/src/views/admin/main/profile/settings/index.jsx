import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
// Assets
import banner from 'assets/img/auth/banner.png';
import profile from 'assets/img/crm/vbz.png';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getSingleUser } from 'redux/Actions/UserActions';

// Custom components
import Info from 'views/admin/main/profile/settings/components/Info';
import Password from 'views/admin/main/profile/settings/components/Password';
import Profile from 'views/admin/main/profile/settings/components/Profile';
import Socials from 'views/admin/main/profile/settings/components/Socials';

export default function Settings() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    dispatch(getSingleUser());
  }, []);

  const refresh = () => {
    setUpdate(!update);
  };

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, lg: 2 }}
        spacing={{ base: '20px', xl: '20px' }}
      >
        {/* Column Left */}
        <Flex direction="column">
          {user ? (
            <Profile
              name={user?.fullName}
              accountType={
                user?.roles?.user
                  ? 'User Account'
                  : user?.roles?.admin
                  ? 'Administrator'
                  : user?.roles?.employee
                  ? 'Employee'
                  : 'Content Manager'
              }
              avatar={profile}
              banner={banner}
            />
          ) : null}
          <Info user={user ? user : {}} refresh={refresh} />
        </Flex>
        {/* Column Right */}
        <Flex direction="column">
          {user?.roles?.content ? <Socials user={user ? user : {}} /> : null}
          <Password />
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
