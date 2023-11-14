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
import { Flex } from '@chakra-ui/react';
import Card from 'components/card/Card';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAdminCreatedUsers } from 'redux/Actions/UserActions';
import SearchTableUsers from './components/SearchTableUsersOverivew';

export default function UsersOverview() {
  const dispatch = useDispatch();

  const { adminUsers } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getAdminCreatedUsers());
  }, []);

  return (
    <Flex direction="column" pt={{ sm: '125px', lg: '75px' }}>
      <div className="mt-5 grid grid-cols-1 gap-5">
        <Card px="0px">
          {adminUsers.length > 0 ? (
            <SearchTableUsers
              tableData={adminUsers.length > 0 ? adminUsers : []}
              isComanyUsers={true}
            />
          ) : null}
        </Card>
      </div>
    </Flex>
  );
}
