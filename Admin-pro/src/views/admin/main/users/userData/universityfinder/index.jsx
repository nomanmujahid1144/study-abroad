import { Flex } from '@chakra-ui/react';
import Card from 'components/card/Card';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import SearchTableUsers from './components/SearchTableUsersOverivew';
import { getAllSingleUserUniversityFinders } from 'redux/Actions/UniversityFinderAction';

export default function UsersOverview() {
  const dispatch = useDispatch();

  const { singleUserUniversityFinders } = useSelector(
    (state) => state.universityFinderReducer,
  );

  useEffect(() => {
    dispatch(getAllSingleUserUniversityFinders());
  }, []);

  return (
    <Flex direction="column" pt={{ sm: '125px', lg: '75px' }}>
      <div className="mt-5 grid grid-cols-1 gap-5">
        <Card px="0px">
          {singleUserUniversityFinders.length > 0 ? (
            <SearchTableUsers
              tableData={
                singleUserUniversityFinders.length > 0
                  ? singleUserUniversityFinders
                  : []
              }
            />
          ) : null}
        </Card>
      </div>
    </Flex>
  );
}
