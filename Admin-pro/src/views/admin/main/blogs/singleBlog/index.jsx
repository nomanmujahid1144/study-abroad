import { Box, Flex } from '@chakra-ui/react';

// Custom components
import Banner from './collection/components/Banner';

// Assets
import NftProfile from 'assets/img/nfts/NftProfile.png';
import NftBanner2 from 'assets/img/nfts/NftBanner2.png';
import { useAlert } from 'react-alert';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getBlogById } from 'redux/Actions/BlogsActions';
import { useEffect } from 'react';
import { baseURL } from 'constants/baseURL';

export default function Collection() {
  // Chakra Color Mode

  const alert = useAlert();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { blog } = useSelector((state) => state.blogReducer);

  useEffect(() => {
    dispatch(getBlogById(id));
  }, [id]);

  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      {/* Main Fields */}
      <Box mb="20px" display={{ base: 'block', lg: 'grid' }}>
        <Flex flexDirection="column">
          <Banner
            image={NftBanner2}
            profile={baseURL + blog?.blogImage}
            creator="Admin"
            name={blog?.blogHeading}
            desc={blog?.data}
            floor={0.56}
            volume={33.8}
            owners={4.6}
            items={28}
          />
        </Flex>
      </Box>
      {/* Delete Product */}
    </Box>
  );
}
