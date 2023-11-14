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
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Assets
import illustration from 'assets/img/auth/auth.png';
import { HSeparator } from 'components/separator/Separator';
import DefaultAuth from 'layouts/auth/variants/Default';
import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import OtpInput from 'react18-input-otp';
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux';
import { verifyOTPCode } from 'redux/Actions/UserActions';
import { OtpValication } from 'constants/helperFunction';

function SignUp() {
  // Chakra color mode

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  const brandStars = useColorModeValue('brand.500', 'brand.400');
  const googleBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.200');
  const googleText = useColorModeValue('navy.700', 'white');
  const googleHover = useColorModeValue(
    { bg: 'gray.200' },
    { bg: 'whiteAlpha.300' },
  );
  const googleActive = useColorModeValue(
    { bg: 'secondaryGray.300' },
    { bg: 'whiteAlpha.200' },
  );
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [otp, setOtp] = useState();

  const handleEmailVerification = async () => {
    console.log('HERE');
    if (!otp || otp.length !== 6) {
      return alert.error('Valid Otp required');
    } else {
      console.log(otp);
      dispatch(verifyOTPCode(otp, navigate, alert));
    }
  };

  const handleOTPChange = (newOtp) => {
    const convertedOtp = OtpValication(newOtp);
    setOtp(convertedOtp);
  };

  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        w="100%"
        maxW="max-content"
        mx={{ base: 'auto', lg: '0px' }}
        me="auto"
        h="100%"
        justifyContent="center"
        mb={{ base: '30px', md: '60px' }}
        px={{ base: '25px', md: '0px' }}
        mt={{ base: '40px', md: '8vh' }}
        flexDirection="column"
      >
        <Box me="auto">
          <Heading
            color={textColor}
            fontSize={{ base: '34px', lg: '36px' }}
            mb="10px"
          >
            OTP Validation
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Enter Verification Code we send you on phone.!
          </Text>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: '100%', md: '420px' }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: 'auto', lg: 'unset' }}
          me="auto"
          mb={{ base: '20px', md: 'auto' }}
        >
          <FormControl>
            <OtpInput
              value={otp}
              onChange={handleOTPChange}
              numInputs={6}
              containerStyle={{ justifyContent: 'space-between' }}
              inputStyle={{
                width: '100%',
                margin: '8px',
                padding: '10px',
                border: `1px solid rgb(217, 217, 217)`,
                borderRadius: 4,
              }}
              focusStyle={{
                outline: 'none',
                boxShadow: `rgba(22, 119, 255, 0.2) 0px 0px 0px 2px`,
                border: `1px solid rgb(217, 217, 217)`,
              }}
            />

            <Button
              type="submit"
              onClick={handleEmailVerification}
              disabled={otp === undefined || otp.length !== 6 ? true : false}
              variant="brand"
              fontSize="14px"
              fontWeight="500"
              w="100%"
              h="50"
              my="24px"
            >
              Verify OTP
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignUp;
